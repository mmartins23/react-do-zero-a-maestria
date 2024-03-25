# State Lift

State lifting in React is a pattern where you move the state up from child components to their closest common ancestor or a parent component, so that multiple child components can share and manipulate the same state. This promotes better data management and communication between components in a React application. Here's an explanation with a code example:

Let's consider a scenario where we have two child components that need to share and update a common piece of state, such as a counter value. We'll lift the state up from the child components to their parent component.

```jsx
import React, { useState } from 'react';

// Child component 1
const CounterButton1 = ({ onClick }) => {
  return <button onClick={onClick}>Increment Counter</button>;
};

// Child component 2
const CounterButton2 = ({ onClick }) => {
  return <button onClick={onClick}>Decrement Counter</button>;
};

// Parent component
const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      {/* Pass state updating functions as props */}
      <CounterButton1 onClick={incrementCounter} />
      <CounterButton2 onClick={decrementCounter} />
    </div>
  );
};

export default App;
```

In this example:

- We have two child components: `CounterButton1` and `CounterButton2`.
- The parent component, `App`, maintains the state of the counter using the `useState` hook.
- Both `CounterButton1` and `CounterButton2` receive functions (`onClick`) as props from the parent component to update the counter state.
- When the buttons are clicked, they call the respective functions passed from the parent (`incrementCounter` or `decrementCounter`), updating the shared state in the parent component.

By lifting the state up to the parent component, both child components can share and manipulate the same counter value. This makes the application's state management more centralized and easier to maintain, especially as the application grows in complexity. Additionally, it promotes reusability of components and separation of concerns.