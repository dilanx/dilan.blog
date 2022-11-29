---
date: 2022-11-29
authors: [dilan]
tags: [Projects, paper, northwestern]
draft: true
---

# How Paper Manages Hundreds of Thousands of Lines of Data

[Paper](https://www.dilanxd.com/paper), Northwestern's course planning tool, useful to thousands of students is its course data. Obviously. A website for planning courses should have courses to plan. For you, the user, simply visiting the site puts all of the latest data right in front of you, and all of it is referenced by the **save data system** to automatically prepare your plan or schedule quickly, whether it's matching it to one of your account entries or decoding it from the URL or any of the other ways the system tries to make it as easy as possible for you. While you wait usually less than a second for everything to be ready, there's a lot going on in the background to make it possible!

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

This user data that I'm referring to includes the plan and schedule data for a given person.

### The account data

Continue
