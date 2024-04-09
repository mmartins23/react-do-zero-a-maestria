# useEffectLayout

**Explanation of useLayoutEffect Hook:**

The `useLayoutEffect` hook is similar to the `useEffect` hook in React, but it fires synchronously after all DOM mutations. This means it runs before the browser paints the screen, allowing you to make DOM updates or measurements before the user sees the changes.

**Code Explanation:**

1. **Importing Dependencies:**
   ```javascript
   import { useLayoutEffect, useEffect, useState } from "react";
   ```

2. **Defining HookUseEffectLayout Component:**
   ```javascript
   const HookUseEffectLayout = () => {
     // State variable to hold name
     const [name, setName] = useState("Name 0");

     // useEffect to update name asynchronously
     useEffect(() => {
       console.log("2");
       setName("Name 2!");
     }, []);

     // useLayoutEffect to update name synchronously
     useLayoutEffect(() => {
       console.log("1");
       setName("Name 1");
     }, []);

     console.log(name);
   ```

   Inside the `HookUseEffectLayout` component, a state variable `name` and its setter function `setName` are initialized using the `useState` hook to hold the name. Then, two effects are defined:
   - The first effect is created using `useEffect`, which updates the name asynchronously when the component mounts. It sets the name to "Name 2!".
   - The second effect is created using `useLayoutEffect`, which updates the name synchronously when the component mounts. It sets the name to "Name 1".

3. **Rendering Name:**
   ```javascript
     return (
       <div>
         <h2>useEffectLayout</h2>
         <p>Name: {name}</p>
         <hr />
       </div>
     );
   };

   export default HookUseEffectLayout;
   ```

   The `HookUseEffectLayout` component returns JSX, which includes a paragraph element to display the name. The current value of the name state is rendered inside the paragraph.

4. **Console Output:**
   When the component mounts, the console logs "1", indicating that the `useLayoutEffect` hook runs synchronously before the browser paints the screen. Then, "2" is logged, indicating that the `useEffect` hook runs asynchronously after the browser paints the screen. Finally, the console logs the updated value of the name state.