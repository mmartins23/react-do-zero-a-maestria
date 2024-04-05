# Altering Context

To alter the context in the provided example, the following steps are taken:

1. **Import `useContext` and the Context**:
   Import the `useContext` hook from React and the `CounterContext` from the context file.

2. **Create Component to Alter Context**:
   Create a new component, in this case, named `ChangeCounter`, where you can define actions to alter the context value. Inside this component, use the `useContext` hook to access the `counter` state variable and the `setCounter` function provided by the `CounterContext`.

3. **Alter Context Value**:
   Define actions within the `ChangeCounter` component to modify the context value. For example, in this case, a button is provided that, when clicked, increments the `counter` value by one using the `setCounter` function.

4. **Use the Component to Alter Context in Other Components**:
   Import the `ChangeCounter` component into the component where you want to alter the context value. In this case, the `Home` component is using the `ChangeCounter` component. Render the `ChangeCounter` component within the `Home` component.

5. **Access Context Values in Other Components**:
   Inside the `Home` component, use the `useContext` hook to access the `counter` value from the `CounterContext`. This allows the `Home` component to display the current value of the `counter` and render the `ChangeCounter` component, which can alter the context value.

Here's a summary of the steps with code examples:

```javascript
// ChangeCounter.js
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Add value to counter</button>
    </div>
  );
};

export default ChangeCounter;
```

```javascript
// Home.js
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

export const Home = () => {
  const { counter } = useContext(CounterContext);
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

In summary, these steps demonstrate how to alter the context value by creating a component that modifies the context and then using that component within other components where the context value needs to be altered.