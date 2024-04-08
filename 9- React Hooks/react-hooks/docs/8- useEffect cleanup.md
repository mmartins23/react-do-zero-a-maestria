# useEffect cleanup

To explain the `useEffect` cleanup and how it works in the provided code, let's break it down into steps:

1. **Setting up the Timer**:
   ```javascript
   useEffect(() => {
       const timer = setTimeout(() => {
           console.log("After 2 secs, this message will appear");
           setAnotherNumber(prevAnotherNumber => prevAnotherNumber + 1);
       }, 2000);
       return () => {
           clearTimeout(timer);
           console.log('Cleaning Up...');
       };
   }, [anotherNumber]);
   ```
   - In this `useEffect`, a timer is set up using `setTimeout`. It increments the `anotherNumber` state after 2 seconds.
   - The timer reference is stored in the `timer` variable.
   
2. **Cleanup Function**:
   ```javascript
   return () => {
       clearTimeout(timer);
       console.log('Cleaning Up...');
   };
   ```
   - The `useEffect` hook returns a cleanup function.
   - Inside the cleanup function, the `clearTimeout` function is called with the `timer` reference to clear the timer.
   - Additionally, a log message is printed to indicate that the cleanup is being performed.

3. **Effect Dependency**:
   ```javascript
   [anotherNumber]
   ```
   - The `useEffect` hook has `[anotherNumber]` as its dependency array, meaning it will run whenever `anotherNumber` changes.
   - If `anotherNumber` changes before the effect runs again, the previous timer will be cleared by the cleanup function, ensuring that only one timer is active at a time.

4. **Effect Execution**:
   - Initially, the effect runs when the component mounts and sets up the timer.
   - Whenever the `anotherNumber` state changes, the effect runs again. Before setting up a new timer, the cleanup function from the previous effect execution is invoked to clear the previous timer.
   - This ensures that there is only one active timer at any given time and prevents memory leaks or unexpected behavior.

In summary, the `useEffect` cleanup in this code ensures that any previously set timers are cleared before setting up a new timer when the `anotherNumber` state changes. This helps manage resources efficiently and prevents multiple timers from running simultaneously. Additionally, the cleanup function allows for proper cleanup when the component unmounts or when the dependency changes.