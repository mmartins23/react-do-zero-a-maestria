# useCallback

**Explanation of useCallback Hook:**

The `useCallback` hook is used to memoize functions, meaning it returns a memoized version of the function that only changes if one of the dependencies has changed. This can be particularly useful in scenarios where passing callbacks to child components, and preventing unnecessary re-renders of those child components.

**Code Explanation:**

1. **Importing Dependencies:**
   ```javascript
   import { useCallback, useState } from "react";
   ```

2. **Defining HookUseCallback Component:**
   ```javascript
   const HookUseCallback = () => {
       const [counter, setCounter] = useState(0);

       // Defining a memoized function using useCallback
       const getItemsFromDatabase = useCallback(() => {
           return ["a", "b", "c"];
       }, []);
   ```
   Inside the `HookUseCallback` component, a state variable `counter` and its setter function `setCounter` are initialized using the `useState` hook. Then, a memoized function `getItemsFromDatabase` is defined using the `useCallback` hook. This function returns an array `["a", "b", "c"]` and has an empty dependency array `[]`, indicating that it does not depend on any external variables.

3. **Rendering List Component with Callback Function:**
   ```javascript
       return (
           <div>
               <h2>useCallback</h2>
               {/* Rendering List component and passing memoized function as prop */}
               <List getItems={getItemsFromDatabase} />
               {/* Button to update counter */}
               <button onClick={() => setCounter(counter + 1)}>Update!</button>
               {/* Displaying counter value */}
               <p>{counter}</p>
               <hr />
           </div>
       );
   };
   ```
   The `HookUseCallback` component returns JSX, where the `List` component is rendered. The `getItemsFromDatabase` memoized function is passed to the `List` component as a prop named `getItems`. Additionally, a button is rendered to update the `counter` state, and the current value of `counter` is displayed.

4. **Defining List Component:**
   ```javascript
   const List = ({ getItems }) => {
       const [myItems, setMyItems] = useState([]);

       // useEffect to fetch items from database using the provided callback function
       useEffect(() => {
           console.log("Searching items in the DB...");
           setMyItems(getItems());
       }, [getItems]);

       // Rendering list of items
       return (
           <div>
               {myItems.map((item) => (
                   <p key={item}>{item}</p>
               ))}
           </div>
       );
   };
   ```
   The `List` component receives the `getItems` function as a prop. Inside the component, it maintains a state variable `myItems` to store the items fetched from the database. The `useEffect` hook is used to fetch items from the database using the provided callback function (`getItems`) whenever it changes. Finally, the list of items is rendered inside a `<div>` element.

This setup demonstrates how the `useCallback` hook can be used to memoize a function and prevent unnecessary re-renders of child components that depend on it.