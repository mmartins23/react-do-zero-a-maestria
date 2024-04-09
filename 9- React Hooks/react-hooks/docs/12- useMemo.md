# useMemo

**Explanation of useMemo Hook:**

The `useMemo` hook is used to memoize values, meaning it returns a memoized value that only changes if one of the dependencies has changed. This can be useful for optimizing performance by avoiding expensive calculations or computations that don't need to be repeated on every render.

**Code Explanation:**

1. **Importing Dependencies:**
   ```javascript
   import { useState, useMemo, useEffect } from "react";
   ```

2. **Defining HookUseMemo Component:**
   ```javascript
   const HookUseMemo = () => {
     // State variable to hold input value
     const [number, setNumber] = useState(0);

     // Memoizing an array of premium numbers using useMemo
     const premiumNumbers = useMemo(() => {
       return ["0", "100", "200"];
     }, []);

     // useEffect to log when premiumNumbers is altered
     useEffect(() => {
       console.log("Premium numbers was altered!");
     }, [premiumNumbers]);
   ```
   Inside the `HookUseMemo` component, a state variable `number` and its setter function `setNumber` are initialized using the `useState` hook to hold the input value. Then, the array of premium numbers is memoized using the `useMemo` hook. The `useMemo` hook takes a function as its first argument, which computes the memoized value, and an array of dependencies as its second argument. In this case, the array of premium numbers is computed only once when the component mounts, as indicated by the empty dependency array `[]`.

3. **Rendering Input and Displaying Result:**
   ```javascript
     return (
       <div>
         <h2>useMemo</h2>
         {/* Input field to enter a number */}
         <input type="text" onChange={(e) => setNumber(e.target.value)} />
         {/* Display message if the entered number is a premium number */}
         {premiumNumbers.includes(number) ? <p>You guessed the correct number!</p> : ""}
         <hr />
       </div>
     );
   };

   export default HookUseMemo;
   ```
   The `HookUseMemo` component returns JSX, which includes an input field to enter a number and a message to display if the entered number is a premium number. The `premiumNumbers` array is checked using the `includes` method to determine if the entered number matches any premium number. If it does, a message is displayed indicating that the correct number was guessed.

4. **Effect of useMemo and useEffect:**
   The `useMemo` hook ensures that the `premiumNumbers` array is computed only once and then memoized for subsequent renders, optimizing performance. The `useEffect` hook with `premiumNumbers` as a dependency logs a message whenever the `premiumNumbers` array is altered, demonstrating the behavior of the `useMemo` hook.