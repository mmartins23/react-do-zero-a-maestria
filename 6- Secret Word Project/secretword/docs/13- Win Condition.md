# Win Condition

In the provided code, the win condition logic is implemented using a `useEffect` hook that triggers whenever there's a change in `guessedLetters`, `letters`, or `startGame` function. Here's how it works:

```javascript
// check win condition
useEffect(() => {
  // Get unique letters of the word
  const uniqueLetters = [...new Set(letters)];

  // Check if all unique letters of the word have been guessed
  if (guessedLetters.length === uniqueLetters.length) {
    // If all unique letters are guessed, increase the score
    setScore(actualScore => actualScore += 100);

    // Restart the game with a new word
    startGame();
  }
}, [guessedLetters, letters, startGame])
```

Explanation:

1. **`useEffect` Hook for Win Condition**:
   - This `useEffect` hook is responsible for checking the win condition.
   - It runs whenever there's a change in `guessedLetters`, `letters`, or `startGame` function (specified in the dependency array).
   - Inside the hook, it first creates an array of unique letters of the word using `Set` to remove duplicates.
   - Then it compares the length of `guessedLetters` array with the length of `uniqueLetters` array. If they are equal, it means all unique letters of the word have been guessed, triggering the win condition.
   - If the win condition is met:
     - It increases the score by 100.
     - It calls the `startGame` function to restart the game with a new word.

This logic ensures that the win condition is properly checked and handled, and the game responds accordingly when the player successfully guesses all the unique letters of the word.

***

useCallback() Hook

In the provided code, the `useCallback` hook is used to memoize the functions `pickWordAndCategory` and `startGame`. Let's break down how `useCallback` is being used:

1. **Definition of Functions**:
   - `pickWordAndCategory`: This function randomly selects a word and its corresponding category from the `wordsList`.
   - `startGame`: This function is responsible for initializing the game by clearing all letters, selecting a word and category, and setting the game stage.

2. **Usage of `useCallback`**:
   - Both `pickWordAndCategory` and `startGame` functions are wrapped inside the `useCallback` hook.
   - This hook memoizes the functions, ensuring that they are only recreated if their dependencies change.
   - The dependencies for `useCallback` are specified as the second argument. In this case, `[words]` is provided as a dependency for `pickWordAndCategory`, and the function will be recreated if the `words` state changes. Similarly, `[pickWordAndCategory]` is provided as a dependency for `startGame`, ensuring that it is recreated whenever `pickWordAndCategory` changes.

3. **Benefit of `useCallback`**:
   - By memoizing these functions, unnecessary recreations are avoided, improving the performance of the application, especially in scenarios where these functions are passed down to child components as props.
   - Since both functions rely on the `words` state, using `useCallback` ensures that they always have access to the latest state value without causing unnecessary re-renders.

Here's a summary of the usage of `useCallback` in the provided code:

```javascript
const pickWordAndCategory = useCallback(() => {
  // Function body
}, [words]);

const startGame = useCallback(() => {
  // Function body
}, [pickWordAndCategory]);
```

In these functions, `useCallback` ensures that they are efficiently memoized based on their dependencies, leading to optimized performance in the React application.