# Refactoring Context to Hook

To refactor the context using a custom hook, the following steps were taken:

1. **Create a Custom Hook**:
   A new file named `useCounterContext.js` was created to define a custom hook called `useCounterContext`. Inside this hook, the `useContext` hook is used to access the `CounterContext`.

2. **Check for Context Existence**:
   Within the custom hook, a check is performed to ensure that the context exists. If the context is not found, a message is logged to the console.

3. **Return Context Value**:
   The custom hook returns the context value, allowing components to access the context without directly using the `useContext` hook.

4. **Refactor Components to Use Custom Hook**:
   Components that need access to the context were refactored to use the custom hook instead of directly importing and using `useContext` and `CounterContext`.

Here's a summary of the steps with code examples:

```javascript
// useCounterContext.js
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    console.log("Context not found");
  }

  return context;
};
```

```javascript
// Home.js
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";

export const Home = () => {
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Home</h1>
      <p>Value of counter: {counter}</p>
      {/* Render the ChangeCounter component to alter the context */}
      <ChangeCounter />
    </div>
  );
};
```

In summary, these steps demonstrate how to refactor context usage using a custom hook, making it more modular and reusable across components. The custom hook abstracts the logic of accessing the context, simplifying the implementation in components.