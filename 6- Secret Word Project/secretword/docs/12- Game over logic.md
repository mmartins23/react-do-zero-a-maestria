# Game over logic

Sure, here's the code with detailed explanations:

```javascript
// process the letter input
const verifyLetter = (letter) => {
  // normalize letter
  const normalizedLetter = letter.toLowerCase();

  // Check if letter has already been utilized
  if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
    return; // If letter has already been guessed or considered wrong, return early
  }

  // push guessed letter or remove a guess
  if (letters.includes(normalizedLetter)) {
    // If the letter is in the word, add it to the guessed letters
    setGuessedLetters((actualGuessedLetters) => [
      ...actualGuessedLetters,
      normalizedLetter
    ])
  } else {
    // If the letter is not in the word, add it to the wrong letters and decrement the guesses
    setWrongLetters((actualWrongLetters) => [
      ...actualWrongLetters,
      normalizedLetter
    ]);

    setGuesses((actualGuesses) => actualGuesses - 1);
  }
}

// Function to clear guessed and wrong letter states
const clearLetterStates = () => {
  setGuessedLetters([]);
  setWrongLetters([]);
}

// useEffect hook to check for game over condition
useEffect(() => {
  if (guesses <= 0) {
    // If no guesses remaining, trigger game over
    clearLetterStates(); // Reset guessed and wrong letters
    setGameStage(stages[2].name); // Transition game stage to "end" (game over)
  }
}, [guesses]) // Run this effect whenever guesses changes

// restarts the game
const retry = () => {
  // Reset game state for a new game
  setScore(0); // Reset score to 0
  setGuesses(guessesQty); // Reset number of guesses to initial quantity
  setGameStage(stages[0].name); // Transition game stage to "start"
}
```

Explanation:


1. **verifyLetter Function**:
   - This function is called whenever a player submits a letter guess.
   - It first normalizes the guessed letter to lowercase to ensure consistency in comparison.
   - Then, it checks if the normalized letter has already been guessed (`guessedLetters`) or considered wrong (`wrongLetters`). If so, it returns early without further processing.
   - If the letter is not in either of those arrays, it checks if it's part of the word (`letters` array). If it is, it adds it to the `guessedLetters` array. Otherwise, it adds it to the `wrongLetters` array and decrements the `guesses` count.

2. **clearLetterStates Function**:
   - This function is called when the game over condition is met to reset the guessed and wrong letters arrays (`guessedLetters` and `wrongLetters`) to empty arrays.

3. **useEffect Hook**:
   - This hook is used to handle the game over condition. It runs after every render and checks if the number of remaining guesses (`guesses`) is less than or equal to 0.
   - If the game over condition is met, it calls the `clearLetterStates` function to reset the letter states and then transitions the game stage to the "end" stage (game over stage).

4. **retry Function**:
   - This function resets the game state to prepare for a new game round.
   - It resets the score to 0, resets the number of guesses (`guesses`) to the initial quantity (`guessesQty`), and transitions the game stage back to the "start" stage.

Overall, this logic ensures that the game properly handles the game over condition when the player exhausts all available guesses and provides an option to restart the game for a new round.