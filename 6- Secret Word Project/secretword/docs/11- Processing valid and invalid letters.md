# Processing valid and invalid letters

In the provided code, the `App` component manages the state of the game and controls the flow between different stages of the game. It uses several states to keep track of the game progress, including the current game stage, the word and category picked for the current round, the letters of the word, guessed letters, wrong letters, remaining guesses, and the score.

Let's focus on the `verifyLetter` function and how it processes valid and invalid letters:

```jsx
// process the letter input
const verifyLetter = (letter) => {
  // normalize letter
  const normalizedLetter = letter.toLowerCase();

  // Check if letter has already been utilized
  if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
    return; // If letter has already been guessed or considered wrong, return early
  }

  // Check if the guessed letter is in the word
  if (letters.includes(normalizedLetter)) {
    // If the letter is in the word, add it to the guessed letters
    setGuessedLetters((actualGuessedLetters) => [
      ...actualGuessedLetters,
      normalizedLetter
    ]);
  } else {
    // If the letter is not in the word, add it to the wrong letters and decrement the guesses
    setWrongLetters((actualWrongLetters) => [
      ...actualWrongLetters,
      normalizedLetter
    ]);
    setGuesses((prevGuesses) => prevGuesses - 1);
  }

  // Log the updated guessed and wrong letters for debugging
  console.log(guessedLetters);
  console.log(wrongLetters);
};
```

Explanation:

1. **Normalization**: The function first normalizes the input letter to lowercase to ensure consistency in comparison.

2. **Checking for Previous Usage**: It checks if the normalized letter is already included in either `guessedLetters` or `wrongLetters` arrays. If it's found in either array, it means the letter has already been guessed or considered wrong, so the function returns early without further processing.

3. **Processing Valid Letters**:
   - If the normalized letter is found in the `letters` array (which represents the letters of the word to be guessed), it means the guess is correct. In this case, it adds the letter to the `guessedLetters` array using the `setGuessedLetters` function.
   
4. **Processing Invalid Letters**:
   - If the normalized letter is not found in the `letters` array, it means the guess is incorrect. In this case, it adds the letter to the `wrongLetters` array using the `setWrongLetters` function and also decrements the `guesses` count.

5. **Logging for Debugging**: The function logs the updated `guessedLetters` and `wrongLetters` arrays for debugging purposes, showing the current state of the game after processing the letter guess.

This `verifyLetter` function ensures that the game correctly handles both valid and invalid letter guesses, updating the game state accordingly.