# useState Hook

In React, the `useState` hook is used to add state to functional components. It allows functional components to have their own local state, enabling them to manage and update data within the component. Here's an example of how to use the `useState` hook:

```jsx
import React, { useState } from 'react';

const Counter = () => {
  // useState hook with initial state value of 0
  const [count, setCount] = useState(0);

  // Event handler to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // Event handler to decrement count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

Explanation:

1. **Importing `useState`**: The `useState` hook is imported from the 'react' package along with the `React` object.

2. **Declaring State**: Inside the `Counter` component, the `useState` hook is called to declare a state variable `count` and a function `setCount` to update its value. The `useState` hook takes the initial state value of `0` as its argument.

3. **Updating State**: When the user clicks the "Increment" button, the `increment` function is called, which updates the `count` state by calling `setCount` with the new value (`count + 1`). Similarly, the "Decrement" button triggers the `decrement` function, which updates the `count` state by decrementing it (`count - 1`).

4. **Rendering State**: The current value of the `count` state is displayed within the component using JSX. Whenever the state changes, React will re-render the component with the updated state value.

This example demonstrates how to use the `useState` hook to manage state within a functional component. It provides a simple counter functionality where the user can increment or decrement the count value.