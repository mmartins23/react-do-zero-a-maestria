# Function as prop

In React, passing a function as a prop to a component allows you to pass behavior from a parent component to a child component. This is a powerful pattern that enables communication between components and facilitates encapsulation and reusability. Here's an explanation with a code example:

```jsx
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Passing handleClick function as a prop to Button component */}
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default App;
```

In this example:

1. We have a `Button` component that receives an `onClick` function as a prop along with children.
2. Inside the `Button` component, we attach the `onClick` event handler to the button element.
3. In the `App` component, we define a `handleClick` function that will be called when the button is clicked.
4. We pass the `handleClick` function as the `onClick` prop to the `Button` component.

When the button is clicked, the `handleClick` function defined in the `App` component will be executed. This allows the `App` component to control the behavior of the `Button` component without the `Button` component needing to know how it's being used.

This pattern is useful for creating reusable components that can be customized with different behaviors based on the needs of the parent component. It promotes separation of concerns and encapsulation, making your code more modular and maintainable.