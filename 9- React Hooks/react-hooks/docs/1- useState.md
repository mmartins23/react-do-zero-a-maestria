# useState

`useState` is a hook provided by React that allows functional components to manage state. It enables components to have stateful logic without needing to convert them into class components. Here's how it works:

1. **Importing `useState`**:
   In React, `useState` is imported from the "react" library. It's commonly used at the top of functional components.

   ```javascript
   import { useState } from "react";
   ```

2. **Initializing State**:
   Inside the component, state is initialized using the `useState` hook. It takes the initial state value as an argument and returns an array containing the current state value and a function to update that value.

   ```javascript
   const [name, setName] = useState("Ash");
   ```

   In this example, `name` is the current state value, and `setName` is the function used to update the state. The initial state value is "Ash".

3. **Updating State**:
   To update the state, you call the setter function (`setName` in this case) with the new state value as an argument.

   ```javascript
   setName("Ash Ketchum");
   ```

   This will update the `name` state to "Ash Ketchum".

4. **Rendering State**:
   State values can be rendered directly in JSX using curly braces `{}`.

   ```javascript
   <p>useState: {name}</p>
   ```

   This will render the current value of the `name` state.

5. **Re-rendering**:
   When the state is updated using `useState`, React will re-render the component to reflect the changes in the UI.

Here's the provided code example explained:

```javascript
import { useState } from "react";

const HookUseState = () => {
    // Declaring a normal variable
    let username = "John";
    // Declaring state using useState
    const [name, setName] = useState("Ash");

    // Function to update names
    const updateNames = () => {
        // Update the normal variable
        username = "John Doe";
        // Update the state variable
        setName("Ash Ketchum");
    }

    return (
        <div>
            <h1>useState</h1>
            {/* Displaying normal variable */}
            <p>Variable: {username}</p>
            {/* Displaying state variable */}
            <p>useState: {name}</p>
            {/* Button to trigger state update */}
            <button onClick={updateNames}>Update Names</button>
        </div>
    );
}

export default HookUseState;
```

In this example:
- `username` is a normal variable that is declared outside the component's state.
- `name` is a state variable declared using `useState`.
- `updateNames` is a function that updates both the normal variable `username` and the state variable `name` when triggered by clicking the button.
- Clicking the button updates the UI with the new state value, but the normal variable `username` does not trigger a re-render because it's not part of the component's state.