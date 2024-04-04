# Consuming game states

The `Game` component in the provided code is responsible for rendering the actual gameplay screen. Let's break down how it's using the game states and props passed down from the `App` component:

1. **Props Received**:
   - `verifyLetter`: A function passed down from the `App` component. It's intended to verify the letter input by the user.
   - `pickedWord`: The word picked for the current game round.
   - `pickedCategory`: The category of the picked word.
   - `letters`: An array containing individual letters of the picked word.
   - `guessedLetters`: An array containing letters that the user has guessed correctly.
   - `wrongLetters`: An array containing letters that the user has guessed incorrectly.
   - `guesses`: The number of remaining guesses.
   - `score`: The current score of the game.

2. **Local State**:
   - `letter`: Stores the current letter input by the user.
   - `letterInputRef`: Ref for the input element to focus on after submitting a letter.

3. **Rendering**:
   - It renders various UI elements including total points, hints about the word, remaining guesses, the word container showing guessed letters and blanks, a form for inputting a letter, and a container for displaying wrong letters.
   - It maps over the `letters` array to render either guessed letters or blank squares based on whether the letter has been guessed correctly.
   - It renders a form with an input field where users can input a single letter guess.

4. **Handling User Input**:
   - The `handleSubmit` function is called when the user submits the form. It prevents the default form submission behavior, calls `verifyLetter` with the current letter input, resets the `letter` state, and focuses on the input field again.
   - The `onChange` event handler is attached to the input field to update the `letter` state as the user types.

5. **Displaying Used Letters**:
   - It maps over the `wrongLetters` array to display the letters that the user has guessed incorrectly.

Overall, the `Game` component utilizes props to display relevant game information and local state to manage user input. It provides an interface for users to interact with the game by inputting guesses and displays feedback such as the current word state, remaining guesses, and used letters.