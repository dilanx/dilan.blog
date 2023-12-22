---
date: 2022-12-11
updated: 2023-12-22
authors: [dilan]
tags: [projects, paper, northwestern]
image: /img/how-paper-manages-hundreds-of-thousands-of-lines-of-data/preview.jpg
---

# How Paper Manages Hundreds of Thousands of Lines of Data

:::warning Update as of December 22, 2023

The Paper data system has evolved a lot since this post was written. Much of this content may not accurately describe the current system.

:::

What makes [Paper](https://www.dilanxd.com/paper), Northwestern's course planning tool, useful to thousands of students is its course data. Obviously. A website for planning courses should have courses to plan. For you, the user, simply visiting the site puts all of the latest data right in front of you, and all of it is referenced by the **save data system** to automatically prepare your plan or schedule quickly, whether it's matching it to one of your account entries or decoding it from the URL or any of the other ways the system tries to make it as easy as possible for you. While you wait usually less than a second for everything to be ready, there's a lot going on in the background to make it possible!

<!--truncate-->

## Gathering the course data

### The data the school provides

Paper is developed in partnership with [Northwestern University Information Technology](https://www.it.northwestern.edu) and the [Northwestern University Office of the Registrar](https://www.registrar.northwestern.edu), both of which provide specific portions of official data.

The registrar's office provides general data (descriptions, distros, prereqs, units, etc.) for all courses offered at Northwestern, while NUIT exposes an API to access quarter-specific data (course sections and their time slots, instructors, locations, etc.). While the planning functionality of Paper primarily uses the general data and the scheduling functionality uses the quarter-specific data, both datasets are smartly integrated to display all of the relevant info very easily in both views.

### Keeping things fast

Dealing with such a large amount of data can be very inefficient if done poorly, and that's no fun. Imagine having to wait for several seconds (or even minutes??) just to find courses for a given subject (that sounds like CAESAR, to be honest). It's certainly not too difficult to get all of the data once and just save it for later, but a challenge arises when trying to keep that same data up to date.

This was a huge focus of mine when developing Paper. Thanks to a lot of systems working together behind-the-scenes, an efficient solution was possible. Let's talk about the quarter-specific schedule data, since that changes much more often than the general plan data.

### Retrieving the data

A simple way to ensure that the user has the latest data is just to make API calls to CAESAR every time they load Paper. Well, it sometimes takes around 1-2 seconds just to retrieve data for 30 computer science courses, so you could probably imagine how long retrieving data for over 2000 courses for an upcoming quarter would take. Retrieving all of the courses data takes around 1-2 minutes. While that doesn't seem like a lot, imagine if you had to wait 1-2 minutes every single time you wanted to use Paper. Yeah, no.

To solve this issue, I developed a standalone **data retrieval and management system** (it's also open source so you can find the source code [here](https://github.com/dilanx/paper.nu-data)). It's essentially a command-line interface that runs on a cron job scheduled three times a week on the server to retrieve the latest course data and parse it into a form that is compact and usable by Paper.

The data is then sent to my content delivery network (CDN), which specializes in caching the data and efficiently delivering it to the client. At the same time, the Paper API (the service that also manages user data) keeps track of when the cache was updated.

The client has its own in-browser cache. Each time you access Paper, the site sends a request to the Paper API to compare the timestamp of the data on the CDN to the timestamp of the data in the local cache. If there's a mismatch, the client will replace the local data with the data on the CDN. Because the CDN stores data in the format Paper likes, this data load operation doesn't even take a second (unless your Wi-Fi sucks—there's nothing I can do about that).

A maximum of three sets of schedule data are cached in the browser. This allows you to switch between quarters in Paper (like if you're loading a previous quarter's schedule from your account) without having to fetch the data over and over again. If all three caches are in use and you try getting data for a fourth quarter, the oldest cache will be replaced. If there's newer data for a quarter that a cache already has data for, then that cache will be updated with the new data. There's a lot of stuff going on here, but it's all done very quickly. Computers are fast.

## Interpreting user data

Managing and saving user data is super important so you don't lose all of your plan or schedule data when you leave the site. Rather than just saving a complete copy of each course on your plan or section on your schedule, the data is serialized further to lessen the amount of unnecessary information used just for saving, especially when all of the course data is already available separately. This is especially important for the **URL save data system** so that you don't have to save or share an insanely long URL.

The data is serialized into a **data string** that looks something like this:

```
y0q0=027_111-0%2C027_211-0&y0q1=027_214-0
```

Paper **data strings** were implemented in the first version of Plan Northwestern (Paper's predecessor before it merged with salad.nu) when the account system didn't exist. All data would be saved in the URL and browser storage only, so you would have to swap URLs to switch between plans (browser storage only saved the most recently edited plan). If you're familiar with the structure of a URL [query string](https://en.wikipedia.org/wiki/Query_string), then you may have noticed that this is one of them.

For plans, each parameter's key is in the form `yYqQ` where `Y` is the year number (0-9 for a max of 10 years) and `Q` is the quarter number (0-3 for a max of 4 quarters). The value is a comma-separated list (URL encoded as `%2C`) of courses for that year and quarter. The 3 numbers before the underscore correspond to a Paper-specific subject ID. The example above shows `027` for all of the courses which in this case corresponds to the subject `COMP_SCI`. After the subject ID is the course catalog number. Thus, the data string above represents a plan that has `COMP_SCI 111-0` and `COMP_SCI 211-0` in the fall of the first year, and `COMP_SCI 214-0` in the winter of the first year.

Bookmarked courses (both for credit and not for credit) are also included within their own parameter key of `f`.

Now, here's an example data string for a schedule:

```
t=4890&s=015362-1&sf=004134
```

The `t` parameter contains the Northwestern-provided term ID to which the schedule belongs, and the `s` parameter contains a comma-separated list of Northwestern course IDs (before the hyphen) and which section is on the schedule (after the hyphen). There's also the `sf` parameter that includes the bookmarked courses.

Course IDs are used in schedule data strings but not in plan data strings because the first version of Plan Northwestern did not use data that included those IDs (instead, course data from the online course catalog was scraped).

Even though these data strings are query strings intended for URLs, they're also used in browser storage and in account data to save plans and schedules.

When a plan or schedule is loaded, Paper will parse the data string and match each element to the corresponding courses and sections. If an invalid course appears in a plan data string, the plan load will fail with an error popup. If an invalid course section appears in a schedule data string, that specific section will be skipped, but the rest of the schedule will still be loaded (this is necessary since classes that may have originally been offered for an upcoming quarter may no longer be offered and are no longer on CAESAR). If both plan parameters and schedule parameters appear in the same data string, the schedule will be prioritized and the plan's parameters will be removed. Loading URLs or the browser storage will also have Paper scan the account plans and schedules and automatically activate the one with the same data so you don't have to manually activate your plan or schedule if you reload the page.
