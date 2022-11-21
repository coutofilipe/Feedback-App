# My React Notes

## What is React:

React is a library / framework for building user interfaces. It is based upon building Elements and Components.

Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:
`const element = <h1>Hello, world</h1>;`

We call this a “root” DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element, first pass the DOM element to `ReactDOM.createRoot()`, then pass the React element to `root.render():`
```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);
```

## Updating the Rendered Element
React elements are **immutable**. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

With our knowledge so far, the only way to update the UI is to create a new element, and pass it to `root.render()`.

Consider this ticking clock example:
```
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

It calls `root.render()` every second from a `setInterval()` callback.

## Components and Props
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Components can have "state", wich is an object that determines how a component renders and behaves. Any data you bring to a **Component** is a part of it's state. If you have for example a list of users, that is also a part of state.

When you need to share that data (state) from a **Component** across multiple Components. For that you use the **App** or **global** state, that is available to the entire UI, not just a single Component.

If you get a bunch of **App level state** that becomes dificult to manage, you can either use the **Context API**, built into ReactJS, or a 3rd party state manager like **Redux**.

**NOTE!**
Props get passed down between components and events get passed up!!!!!!!!!


### Classes Components and Function Components

