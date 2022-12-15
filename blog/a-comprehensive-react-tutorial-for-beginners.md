---
date: 2022-12-14
authors: [dilan]
tags: [guides, react, javascript, typescript, beginner]
image: /img/a-comprehensive-react-tutorial-for-beginners/preview.jpg
base: a-comprehensive-react-tutorial-for-beginners
---

# A Comprehensive React Tutorial for Beginners

[React](https://reactjs.org/) is a powerful JavaScript library for building interactive user interfaces (and it's the most popular one, too). Its **component**-based architecture allows for complex UIs just by combining small and isolated pieces of code. In combination with [JSX](https://reactjs.org/docs/introducing-jsx.html), you can easily write your entire UI in JavaScript using a familiar HTML-like syntax. There's an official [tutorial](https://reactjs.org/tutorial/tutorial.html) where they walk you through the basics of React by making a tic-tac-toe game, and I highly recommend checking that out for a good overview of what React is. However, since the introduction of [hooks](https://reactjs.org/docs/hooks-intro.html), a lot of React code you'll see today is written using function components as opposed to the class component alternative, so here's a tutorial for that. They already made tic-tac-toe, so let's make Wordle!

<!--truncate-->

:::caution before we start

This tutorial **does not** assume prior knowledge of React but **does** assume at least some prior knowledge of HTML, CSS, and JavaScript. There are tons of resources online to help you with those if you're new! Don't worry about CSS too much for this tutorial though since the starter code has it done for you.

:::

## About the guide

### Why this tutorial?

This tutorial focuses on function components rather than class components, which is what React's official tutorial covers. If you're not sure what the difference is, this tutorial covers newer React functionality and techniques.

### What are we making?

[Wordle](https://www.nytimes.com/games/wordle/index.html) is a simple word puzzle game that was especially popular at the beginning of 2022. In this game, you have 6 tries to guess a five-letter word. After each try, each letter is marked as either green, yellow, or gray. Green means the letter is in the correct position, yellow means the letter is in the answer but in the wrong position, and gray means it's not in the answer at all. I recommend trying it out for yourself real quick!

### JavaScript or TypeScript?

This tutorial covers both! All code blocks have a JavaScript tab and a TypeScript tab, so you can choose the one you prefer.

## Setup

You're totally welcome to read this tutorial and not write any code for yourself (if that's what you want, skip this setup section), but you can also follow along! It's super easy to get things going in your own code editor.

:::note prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed. You can check if you have these installed by running `$ node -v` and `$ npm -v` in your terminal.

The best way to install everything is with **[nvm](https://github.com/nvm-sh/nvm#installing-and-updating)**. Follow the instructions to install nvm, then run `$ nvm install node` to install the latest version of Node.js and npm.

:::

First, get the starter code for this tutorial.

```
$ npm create tutorial wordle
```

You'll then be prompted to select the JavaScript or TypeScript variant. Select the one you prefer. You can also get my completed source code for this project if you'd like (only available in TypeScript).

```
$ npm create tutorial wordle

Using tutorial project tutorial-react-wordle.
? Select a variant › - Use arrow-keys. Return to submit.
❯   JavaScript
    TypeScript
    Completed
```

Move into the project directory and install the dependencies.

```
$ cd tutorial-react-wordle
$ npm install
```

This project uses the [Vite](https://vitejs.dev/) build tool, which includes a script to spin up the server.

```
$ npm run dev
```

Now, if you did everything correctly, visit the printed link in your browser and you should see a gray screen with "Hi" in small text in the middle.

Hi!! Looks like we're ready to get started.

:::tip

Have your browser's developer tools open to monitor the console for any errors. I also highly recommend the React Developer Tools extension ([Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)), which adds a couple tabs to your developer tools that are super useful when developing with React.

:::

### Explore the source code

Open up the project in your code editor of choice (like [Visual Studio Code](https://code.visualstudio.com/)). Check out the files to get familiar with how the project is structured. We'll start in `App.jsx` (or `App.tsx` if you're using TypeScript).

## Components

### About React components

**Components** are basically pieces of UI that contain a chunk of isolated code. A full UI will be made up of a bunch of these. In our case with Wordle, we'll have a few components. We'll have one for the board itself, one for a word row, and one for a letter cell. Each row will contain 5 letter cells, and the board will contain 6 rows.

Typically, each component should be in its own file and should be the default export. **Components MUST start with an uppercase letter!** Although you can _technically_ name one completely lowercase, JSX won't know if you're referring to a custom component or an actual HTML component. For example, if you name your component `div` and try to use that in JSX, you'll get the default HTML div element.

### Creating the board

Let's start by creating a blank board, then replacing out our "Hi" message with the component.

Create a `components` directory in `src` and define a new `Board` function component:

<langs>
<lang value="JavaScript">

```jsx title="src/components/Board.jsx"
export default function Board() {
  return <div className="board"></div>;
}
```

</lang>
<lang value="TypeScript">

```tsx title="src/components/Board.tsx"
export default function Board() {
  return <div className="board"></div>;
}
```

</lang>
</langs>

:::tip

Use the same `className` attribute values as I do if you're using the starter code! I've already written all of the CSS we need in `src/index.css`, but you're welcome to add your own, of course!

:::

Now, let's add it to our default `App` component:

<langs>
<lang value="JavaScript">

```jsx title="src/App.jsx"
// highlight-next-line
import Board from './components/Board';

function App() {
  // highlight-start
  return (
    <div>
      <Board />
    </div>
  );
  // highlight-end
}

export default App;
```

</lang>
<lang value="TypeScript">

```tsx title="src/App.tsx"
// highlight-next-line
import Board from './components/Board';

function App() {
  // highlight-start
  return (
    <div>
      <Board />
    </div>
  );
  // highlight-end
}

export default App;
```

</lang>
</langs>

Nice! Let's create a cell component and a row component, then add a single cell to a row, then add a single row to our board.

<langs>
<lang value="JavaScript">

```jsx title="src/components/Cell.jsx"
export default function Cell() {
  return <div className="cell"></div>;
}
```

```jsx title="src/components/Row.jsx"
import Cell from './Cell';

export default function Row() {
  return (
    <div className="row">
      <Cell />
    </div>
  );
}
```

```jsx title="src/components/Board.jsx"
// highlight-next-line
import Row from './Row';

export default function Board() {
  // highlight-start
  return (
    <div className="board">
      <Row />
    </div>
  );
  // highlight-end
}
```

</lang>

<lang value="TypeScript">

```tsx title="src/components/Cell.tsx"
export default function Cell() {
  return <div className="cell"></div>;
}
```

```tsx title="src/components/Row.tsx"
import Cell from './Cell';

export default function Row() {
  return (
    <div className="row">
      <Cell />
    </div>
  );
}
```

```tsx title="src/components/Board.tsx"
// highlight-next-line
import Row from './Row';

export default function Board() {
  // highlight-start
  return (
    <div className="board">
      <Row />
    </div>
  );
  // highlight-end
}
```

</lang>
</langs>

If everything goes well, a single letter cell should appear in the middle of the screen.

<image fm={frontMatter} src="single-cell.png" />

Now, add 4 more cells to the row component, and 5 more rows to the board component.

<langs>
<lang value="JavaScript">

```jsx title="src/components/Row.jsx"
// ...

export default function Row() {
  return (
    <div className="row">
      <Cell />
      {/* highlight-start */}
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      {/* highlight-end */}
    </div>
  );
}
```

```jsx title="src/components/Board.jsx"
// ...

export default function Board() {
  return (
    <div className="board">
      <Row />
      {/* highlight-start */}
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      {/* highlight-end */}
    </div>
  );
}
```

</lang>
<lang value="TypeScript">

```tsx title="src/components/Row.tsx"
// ...

export default function Row() {
  return (
    <div className="row">
      <Cell />
      {/* highlight-start */}
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      {/* highlight-end */}
    </div>
  );
}
```

```tsx title="src/components/Board.tsx"
// ...

export default function Board() {
  return (
    <div className="board">
      <Row />
      {/* highlight-start */}
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      {/* highlight-end */}
    </div>
  );
}
```

</lang>
</langs>

<image fm={frontMatter} src="board.png" />

## Props

### About React props

**Props**, short for properties, are read-only values that can be passed to components. The component will rerender when its props change. Props work similarly to HTML attributes syntactically, but their values can be any JavaScript expression.

With function components, props are passed to the function as a single object argument. Check out this example unrelated to our game:

```jsx title="ExampleComponent.jsx"
export default function ExampleComponent(props) {
  return (
    <div>
      {props.message} {props.num}
    </div>
  );
}
```

```jsx title="ExampleApp.jsx"
// ...

export default function ExampleApp() {
  return (
    <div>
      <ExampleComponent message="Hello, world!" num={4} />
    </div>
  );
}
```

Any JavaScript expression is fair game, so you can even pass a function as a prop:

```jsx title="ExampleButton.jsx"
export default function ExampleButton(props) {
  return <button onClick={() => props.handleClick()}>{props.text}</button>;
}
```

```jsx title="ExampleApp.jsx"
// ...

export default function ExampleApp() {
  return (
    <div>
      <ExampleButton
        text="Click me!"
        handleClick={() => console.log('Hello, world!')}
      />
    </div>
  );
}
```

And, since props are just passed as JavaScript objects, you can [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) them:

```jsx title="ExampleComponent.jsx"
export default function ExampleButton({ text, handleClick }) {
  return <button onClick={() => handleClick()}>{text}</button>;
}
```

### Passing data to the cells

We know that each cell should have a letter and a status. This status can be `'correct'`, `'partial'`, `'incorrect'`, or left `undefined`. The first three are the states each cell can be in when a given row is submitted, and the last one is the state each cell is in when you're still typing out that row. Let's add these as props to our cell component, and code in some logic to display the letter and the status as a background color.

<langs>
<lang value="JavaScript">

```jsx title="src/components/Cell.jsx"
export default function Cell({ letter, status }) {
  let backgroundColor;

  switch (status) {
    case 'correct':
      backgroundColor = 'green';
      break;
    case 'partial':
      backgroundColor = 'orange';
      break;
    case 'incorrect':
      backgroundColor = 'gray';
      break;
  }

  return (
    <div className="cell" style={{ backgroundColor }}>
      {letter?.toUpperCase()}
    </div>
  );
}
```

</lang>
<lang value="TypeScript">

```tsx title="src/components/Cell.tsx"
import type { Status } from '../types';

interface CellProps {
  letter?: string;
  status?: Status;
}

export default function Cell({ letter, status }: CellData) {
  let backgroundColor;

  switch (status) {
    case 'correct':
      backgroundColor = 'green';
      break;
    case 'partial':
      backgroundColor = 'orange';
      break;
    case 'incorrect':
      backgroundColor = 'gray';
      break;
  }

  return (
    <div className="cell" style={{ backgroundColor }}>
      {letter?.toUpperCase()}
    </div>
  );
}
```

```ts title="src/types.ts"
export type Status = 'correct' | 'partial' | 'incorrect';
```

:::note

The starter code includes a line in `src/types.ts` that exports an empty object. This is just to get rid of the compiler errors because TypeScript's `isolatedModules` setting is enabled. You can remove it when you add these exports.

:::

</lang>
</langs>

:::note

Note that the `style` prop takes in an object with camelCase properties (`backgroundColor`) rather than a string like with the HTML `style` attribute! Typically, you shouldn't need to update style manually and can just use CSS classes, but since we're just dynamically changing the background color based on the status, we'll do so here.

https://reactjs.org/docs/dom-elements.html#style

:::

Finally, let's test this by adding some dummy data to the first cell in our row component:

<langs>
<lang value="JavaScript">

```jsx title="src/components/Row.jsx"
// ...

export default function Row() {
  return (
    <div className="row">
      {/* highlight-next-line */}
      <Cell letter="a" status="correct" />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}
```

</lang>
<lang value="TypeScript">

```tsx title="src/components/Row.tsx"
// ...

export default function Row() {
  return (
    <div className="row">
      {/* highlight-next-line */}
      <Cell letter="a" status="correct" />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}
```

</lang>
</langs>

<image fm={frontMatter} src="dummy-first-cell.png" />

Now that we have that working, let's set up some row props so our cell data can change dynamically.

<langs>
<lang value="JavaScript">

```jsx title="src/components/Row.jsx"
// ...

export default function Row({ data }) {
  return (
    <div className="row">
      {/* highlight-start */}
      <Cell {...data?.[0]} />
      <Cell {...data?.[1]} />
      <Cell {...data?.[2]} />
      <Cell {...data?.[3]} />
      <Cell {...data?.[4]} />
      {/* highlight-end */}
    </div>
  );
}
```

</lang>
<lang value="TypeScript">

```tsx title="src/components/Row.tsx"
// ...
// highlight-start
import type { CellData } from '../types';

interface RowProps {
  data?: CellData[];
}
// highlight-end

export default function Row({ data }: RowProps) {
  return (
    <div className="row">
      {/* highlight-start */}
      <Cell {...data?.[0]} />
      <Cell {...data?.[1]} />
      <Cell {...data?.[2]} />
      <Cell {...data?.[3]} />
      <Cell {...data?.[4]} />
      {/* highlight-end */}
    </div>
  );
}
```

</lang>
</langs>

:::note spread syntax

Here, we used [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...`. This "spreads" out the properties of the object we're passing in, so that we can pass them in as props to the cell component. For example, if we pass in `{ letter: 'a', status: 'correct' }`, then the cell component will receive `letter="a"` and `status="correct"` as props. This is equivalent to writing it out like this:

```jsx
<Cell letter={data?.[0]?.letter} status={data?.[0]?.status}>
```

:::

:::note optional chaining

We also used [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `?.`. This allows us to immediately return `undefined` from the expression if the value on the left is `undefined`, saving us from errors about reading properties from `undefined`. This is important since we still want to render 5 cells in a row, but not all of them will have data (the blank ones won't).

:::

At this point, our dummy data should disappear, but the board should still have all of the cells visible yet empty.

## State and lifecycle

### About React state

**State** serves as a way for components to store and keep track of data that changes over time. Each component has its own state that only it (and its children that receive it as props) can access. To use state in function components, we'll need to use the `useState` hook.

### About React hooks

[**Hooks**](https://reactjs.org/docs/hooks-intro.html) let you use state and other React features in function components. They were introduced in React 16.8, so before that, function components couldn't use state and you'd have to use class components instead. We'll be using a couple of them in this tutorial, namely `useState` and `useEffect`, but we'll start with `useState` for now.

### Using `useState`

Let's bring back that example app and button from earlier.

Here's the button component for reference:

```jsx title="ExampleComponent.jsx"
export default function ExampleButton({ text, handleClick }) {
  return <button onClick={() => handleClick()}>{text}</button>;
}
```

Now, we'll make it so clicking the button increments a number stored in the app component's state:

```jsx title="ExampleApp.jsx"
// ...
// highlight-next-line
import { useState } from 'react';

export default function ExampleApp() {
  // highlight-next-line
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExampleButton
        {/* highlight-start */}
        text={`Clicked ${count} times`}
        handleClick={() => setCount(count + 1)}
        {/* highlight-end */}
      />
    </div>
  );
}
```

The `useState` function takes in a default value (in this case, that's `0`) to which the state variable `count` will be initialized. It returns a two-element array with the first element being the value of the state variable and the second being a function to update the value. Here, we destructured the array into two variables, `count` and `setCount`.

You probably noticed that we're using `setCount` to update the state rather than just updating `count` directly. This is important so that React knows when to re-render the component and to avoid unnecessarily re-rendering it if the props and state haven't changed.

Clicking on the button will update the state and re-render the component, causing the button text to update.

:::tip

You can use as many `useState` calls as you want in a component! You should have one for each state variable that you're want to use.

:::

### Keeping track of row data

Let's define some state within our board component. We'll use a two-dimentional array of cell data objects (letter and status) to represent each row and each cell in that row.

<langs>
<lang value="JavaScript">

```jsx title="src/components/Board.jsx"
// ...
import { useState } from 'react';

export default function Board() {
  const [rows, setRows] = useState([[]]);

  return (
    <div className="board">
      <Row data={rows[0]} />
      <Row data={rows[1]} />
      <Row data={rows[2]} />
      <Row data={rows[3]} />
      <Row data={rows[4]} />
      <Row data={rows[5]} />
    </div>
  );
}
```

</lang>
<lang value="TypeScript">

```tsx title="src/components/Board.tsx"
// ...
import type { CellData } from '../types';
import { useState } from 'react';

export default function Board() {
  const [rows, setRows] = useState<CellData[][]>([[]]);

  return (
    <div className="board">
      <Row data={rows[0]} />
      <Row data={rows[1]} />
      <Row data={rows[2]} />
      <Row data={rows[3]} />
      <Row data={rows[4]} />
      <Row data={rows[5]} />
    </div>
  );
}
```

</lang>
</langs>

We initialized the state variable `rows` to be an array containing one empty array to give us a starting point when entering data. This will make more sense as we implement the game logic.

### The game logic

Before we directly modify our state and implement keyboard functionality, let's create a function to handle the game logic.

Let's define a new exported function in our `src/common.js` (or `src/common.ts`) file that takes in a key, the Wordle word, and our current data 2D array, which will return a new 2D array with the updated data:

<langs>
<lang value="JavaScript">

```js title="src/common.js"
// Import the words list. The JSON file should already be in the `src` directory.
import words from './words.json';

export function update(key, word, rows) {
  // In Wordle, we're only ever updating the last row.
  const current = rows.length - 1;

  // Let's separate out the old rows since we're not changing them,
  // then spread the current row into a new array.
  // This is important for STATE IMMUTABILITY, which we'll talk about later.
  let old = rows.slice(0, current);
  let row = [...rows[current]];

  // Use regex to check if the key is a letter.
  if (/^[a-z]$/.test(key)) {
    // If the row already has 5 letters, don't update anything.
    if (row.length === 5) return rows;

    // Otherwise, add the new letter to the row.
    // We'll leave the status undefined for now since the player
    // is still typing the word and can backspace the letter.
    row.push({ letter: key });
  }

  // If the key is backspace, remove the last letter from the row.
  if (key === 'Backspace') {
    row.pop();
  }

  // Check if the key is enter
  if (key === 'Enter') {
    // Make sure the row has 5 letters and that it makes up a valid word.
    // If not, return the old rows so nothing is updated.
    // See isWord below this function.
    if (row.length !== 5 || !isWord(row)) return rows;

    // Update the row with each letter's status changed.
    // See checkWord below this function.
    row = checkWord(word, rows[current]);

    // If we're not yet at the end of the game, return the updated rows plus
    // an empty row for the next attempt.
    if (rows.length < 6) {
      return [...old, row, []];
    }
  }

  // Return the updated rows.
  return [...old, row];
}

// Check if the row makes up a valid word.
export function isWord(row) {
  const word = row.map(({ letter }) => letter).join('');
  return words.includes(word);
}

// Determine the correctness of each letter in the attempt.
export function checkWord(word, row) {
  const letters = word.split('');
  return row.map(({ letter }, i) => {
    let status;
    if (letter === letters[i]) {
      status = 'correct';
    } else if (letters.includes(letter)) {
      status = 'partial';
    } else {
      status = 'incorrect';
    }

    return {
      letter,
      status,
    };
  });
}
```

</lang>
<lang value="TypeScript">

```ts title="src/common.ts"
import type { CellData, Status } from './types';
// Import the words list. The JSON file should already be in the `src` directory.
import words from './words.json';

export function update(key: string, word: string, rows: CellData[][]) {
  // In Wordle, we're only ever updating the last row.
  const current = rows.length - 1;

  // Let's separate out the old rows since we're not changing them,
  // then spread the current row into a new array.
  // This is important for STATE IMMUTABILITY, which we'll talk about later.
  let old = rows.slice(0, current);
  let row = [...rows[current]];

  // Use regex to check if the key is a letter.
  if (/^[a-z]$/.test(key)) {
    // If the row already has 5 letters, don't update anything.
    if (row.length === 5) return rows;

    // Otherwise, add the new letter to the row.
    // We'll leave the status undefined for now since the player
    // is still typing the word and can backspace the letter.
    row.push({ letter: key });
  }

  // If the key is backspace, remove the last letter from the row.
  if (key === 'Backspace') {
    row.pop();
  }

  // Check if the key is enter
  if (key === 'Enter') {
    // Make sure the row has 5 letters and that it makes up a valid word.
    // If not, return the old rows so nothing is updated.
    // See isWord below this function.
    if (row.length !== 5 || !isWord(row)) return rows;

    // Update the row with each letter's status changed.
    // See checkWord below this function.
    row = checkWord(word, rows[current]);

    // If we're not yet at the end of the game, return the updated rows plus
    // an empty row for the next attempt.
    if (rows.length < 6) {
      return [...old, row, []];
    }
  }

  // Return the updated rows.
  return [...old, row];
}

// Check if the row makes up a valid word.
export function isWord(row: CellData[]) {
  const word = row.map(({ letter }) => letter).join('');
  return words.includes(word);
}

// Determine the correctness of each letter in the attempt.
export function checkWord(word: string, row: CellData[]) {
  const letters = word.split('');
  return row.map(({ letter }, i) => {
    let status: Status;
    if (letter === letters[i]) {
      status = 'correct';
    } else if (letters.includes(letter)) {
      status = 'partial';
    } else {
      status = 'incorrect';
    }

    return {
      letter,
      status,
    };
  });
}
```

</lang>
</langs>

:::note

The starter code includes a line in `src/common.js` or `src/common.ts` that exports an empty object. This is just to get rid of the compiler errors because TypeScript's `isolatedModules` setting is enabled. You can remove it when you add these exports.

:::

### State immutability

In our logic code, we created a copy of the row we were modifying (that's why we did `let row = [...rows[current]]` instead of `let row = rows[current]`), and then we returned a new array with the updated row. This is done for the same reason we talked about in the [using `useState`](#using-usestate) section, but is a bit more complicated here.

Let's say you have an array `x` of numbers and you add the number `5` to it:

```js
x.push(5);
```

This doesn't return a new array but rather updates the array in place (reference rather than copy).

We _could_ do something like this:

```js
// assume state variable x with the setX exists where x is an array
x.push(5);
setX(x);
```

The problem with this is that we're updating `x` through a reference, which means `x` itself is left unchanged while the actual array value `x` points to gets a new element. When we run `setX`, React doesn't know that the variable changed. While this could work on some occasions, the user may not always see the updated result since the component wouldn't know to re-render.

The solution would be something like this:

```js
const y = [...x];
y.push(5);
setX(y);

// this works, too
setX([...x, y]);
```

### Adding keyboard functionality

Let's make it so our board's state updates based on our keyboard input.

Define a handler function within the board component:

<langs>
<lang value="JavaScript">

```jsx title="src/components/Board.jsx"
// ...
import { update } from '../common';

// Let's hardcode a word for now.
const word = 'react';

export default function Board() {
  // ...

  const handleKeyUp = (e) => {
    setRows(update(e.key, word, rows));
  };

  // ...
}
```

</lang>
<lang value="TypeScript">

```tsx title="src/components/Board.tsx"
// ...
import { update } from '../common';

// Let's hardcode a word for now.
const word = 'react';

export default function Board() {
  // ...

  const handleKeyUp = (e: KeyboardEvent) => {
    setRows(update(e.key, word, rows));
  };

  // ...
}
```

</lang>
</langs>

Here's where it gets interesting. We need to add this handler to our HTML document to allow us to listen for keyboard events on the page. Normally, that's done with the following JavaScript:

```js
document.addEventListener('keyup', handleKeyUp);
```

However, since we're updating state within the component, the functions must all be defined within the component somehow. But the function runs every time the component is re-rendered. We wouldn't want a new event listener to be added every time, so we need to get this code to run only once.

### Using `useEffect`

The `useEffect` hook allows us to manage allows us to execute code based on the [lifecycle](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class) of the component. We can use it to run code when only certain values change, or just when the component is first rendered (this is when the component is **mounted**).

:::note

Operations that should only be done once and that could affect other components like data fetching and manually changing the DOM (like we're doing with the event listener) are called "side effects" (or "effects" for short). This is why it's called the `useEffect` hook!

https://reactjs.org/docs/hooks-overview.html#effect-hook

:::

Let's move the event listener code into the callback argument for `useEffect`.

<langs>
<lang value="JavaScript">

```jsx title="src/components/Board.jsx"
// ...
import { useEffect, useState } from 'react';

export default function Board() {
  // ...

  useEffect(() => {
    const handleKeyUp = (e) => {
      setRows((prev) => update(e.key, word, prev));
    };

    document.addEventListener('keyup', handleKeyUp);
  }, []);

  // ...
}
```

</lang>
<lang value="TypeScript">

```tsx title="src/components/Board.tsx"
// ...
import { useEffect, useState } from 'react';

export default function Board() {
  // ...

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      setRows((prev) => update(e.key, word, prev));
    };

    document.addEventListener('keyup', handleKeyUp);
  }, []);

  // ...
}
```

</lang>
</langs>

Firstly, notice how we passed `setRows` a function rather than a value and switched the third argument of `update` from `rows` to `prev`. Since we only add the event listener once, the value of the `rows` variable that we pass in will always be what it was when the component initially mounted. Changing the argument to a function allows `setRows` to call it with the current value of the state, which we can then pass to `update`.

:::tip try it out!

If you keep it as it was before (`setRows(update(e.key, word, rows))`), notice what happens. The letter in the first cell will be replaced with each letter you type! `setRows` ran successfully so the first letter appears, but `rows` is still empty as an argument to that function.

:::

Secondly, the second argument of `useEffect` is an array of values that the component should watch for changes (its dependencies). If any of the values change, the callback function will be run again. Passing an empty array means that it'll only run once when the component mounts, and passing no array means that it'll run every time the component re-renders.

:::danger watch out!

Do **not** update state for any of the dependencies within your `useEffect`. For example, if state variable `x` is a dependency (`useEffect(() => {}, [x])`), there should not be a call to `setX` within the callback function. Remember that the `useEffect` callback runs every time one of its dependencies changes, so if you update the dependency's value within the callback, it'll loop infinitely. It's safe to update state for state variables that aren't dependencies (and for all variables if an empty array is passed in).

:::

Finally, when the component **unmounts**, we should remove the event listener. The `useEffect` callback argument can return a function that will be called when the component unmounts. This is what that would look like:

<langs>
<lang value="JavaScript">

```jsx title="src/components/Board.jsx"
// ...

export default function Board() {
  // ...

  useEffect(() => {
    const handleKeyUp = (e) => {
      setRows((prev) => update(e.key, word, prev));
    };

    document.addEventListener('keyup', handleKeyUp);

    // highlight-start
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
    // highlight-end
  }, []);

  // ...
}
```

</lang>
<lang value="TypeScript">

```tsx title="src/components/Board.tsx"
// ...

export default function Board() {
  // ...

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      setRows((prev) => update(e.key, word, prev));
    };

    document.addEventListener('keyup', handleKeyUp);

    // highlight-start
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
    // highlight-end
  }, []);

  // ...
}
```

</lang>
</langs>

Now, the game should be fully functional! We hardcoded the word 'react' so try playing Wordle to "guess" that word.

<image fm={frontMatter} src="complete-react.png" />

### Finishing up

Let's add a function to our `src/common.js` (or `src/common.ts`) file to pick a random word from our list, then add one more state variable to store the random word for the board. It won't change from its initial value, so we only need to destructure the first element. Don't forget to remove the hardcoded word variable, by the way!

<langs>
<lang value="JavaScript">

```js title="src/common.js"
// ...

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// ...
```

```jsx title="src/components/Board.jsx"
// ...
import { getRandomWord, update } from '../common';

export default function Board() {
  const [word] = useState(getRandomWord());

  // ...
}
```

</lang>
<lang value="TypeScript">

```ts title="src/common.ts"
// ...

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// ...
```

```tsx title="src/components/Board.tsx"
// ...

export default function Board() {
  // <string> isn't necessary here since the type is inferred
  // but you can have it if you want
  const [word] = useState<string>(getRandomWord());

  // ...
}
```

</lang>
</langs>

## Conclusion

That's it. We've built a fully functional Wordle game using React and its features like components, props, state, lifecycle, and hooks. Chances are you probably aren't gonna be building a lot of games using React since the main intent is to build dynamic user interfaces, but it was still a fun project to get familiar with the features. Hopefully you'll be able to apply this in your own React projects!

### Source code

If you were following along with the guide, you should have final source code of your own! However, you can also view my final source code [here on GitHub](https://github.com/dilanx/create-tutorial/tree/main/tutorial-react-wordle-completed) or play around with it in your own editor by running the same setup command from before and selecting the `Completed` variant.

```
$ npm create tutorial wordle

Using tutorial project tutorial-react-wordle.
? Select a variant › - Use arrow-keys. Return to submit.
    JavaScript
    TypeScript
❯   Completed
```

### Community

Run into any issues or have any questions? Get a conversation going on the [discussion board](https://github.com/dilanx/dilan.blog/discussions).

If you notice a problem with anything in this post, please open an [issue](https://github.com/dilanx/dilan.blog/issues).
