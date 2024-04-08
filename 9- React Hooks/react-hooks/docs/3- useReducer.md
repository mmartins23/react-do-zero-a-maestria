# useReducer

The `useReducer` hook in React is a powerful alternative to `useState` for managing complex state logic. It is especially useful when the state logic involves multiple sub-values or when the next state depends on the previous one. It accepts a reducer function and an initial state, and returns the current state and a dispatch function to trigger state updates.

Here's how the `useReducer` hook works in the provided code example:

1. **Initialization**:
   ```javascript
   const [number, dispatch] = useReducer((state, action) => {
       return Math.random(state);
   });
   ```
   - `number`: This is the current state value managed by `useReducer`.
   - `dispatch`: This is a function that you can call to dispatch actions to update the state. It triggers a state transition by invoking the reducer function provided to `useReducer`.

2. **Reducer Function**:
   ```javascript
   (state, action) => {
       return Math.random(state);
   }
   ```
   - The reducer function receives the current state (`state`) and an action (`action`) as arguments.
   - It computes the next state based on the current state and the action. In this example, the reducer function generates a random number using `Math.random()`. However, it's important to note that the reducer function should be a pure function, meaning it should not mutate the state directly but return a new state object.

3. **Rendering**:
   ```javascript
   <div>
       <h1>useReducer</h1>
       <p>Number: {number}</p>
       <button onClick={dispatch}>Change Number</button>
   </div>
   ```
   - The component renders a heading "useReducer" and displays the current value of `number`.
   - It also renders a button with an `onClick` event handler that calls the `dispatch` function. When clicked, this button dispatches an action to the reducer function, triggering a state update.

However, there are a few issues with the provided code:
- The reducer function should return a new state based on the action passed to it. However, in the example, it directly returns a random number, which doesn't use the previous state or the action.
- The action passed to the reducer function should describe the type of state transition being requested, but it's missing in the example.

To fix these issues, you need to define a proper reducer function that takes into account the previous state and the action type. Additionally, you should dispatch actions with a specific type to indicate what kind of state transition you want to perform.