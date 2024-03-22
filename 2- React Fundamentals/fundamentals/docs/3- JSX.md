# JSX

JSX, or JavaScript XML, is a syntax extension in React that allows developers to write HTML-like code directly within JavaScript files. JSX makes it easier to describe the structure of UI components, combining JavaScript functionality with HTML-like syntax. Here's a simple example:

```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a JSX element.</p>
    </div>
  );
};

export default MyComponent;
```

In this example, JSX allows us to define a React component (`MyComponent`) using HTML-like syntax within a JavaScript file. The `<div>`, `<h1>`, and `<p>` tags resemble HTML, but they're actually transformed into regular JavaScript function calls by React under the hood. This makes it easy and intuitive to build UI components in React.