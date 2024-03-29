# Choosing word and category

In this code snippet, the `App` component manages the game stages and randomly selects a word and category for the game. Let's break down how the word and category are chosen at random:

1. **Picking Word and Category Functionality**:
   ```javascript
   const pickWordAndCategory = () => {
       // pick a random category
       const categories = Object.keys(words);
       const category = 
           categories[Math.floor(Math.random() * Object.keys(categories).length)];
       
       // pick a random word from the selected category
       const word = words[category][Math.floor(Math.random() * words[category].length)];
       
       return { word, category };
   };
   ```
   - This function `pickWordAndCategory` randomly selects a category and a word from that category.
   - It first retrieves all the categories from the `words` object using `Object.keys(words)`.
   - Then, it selects a random category index using `Math.floor(Math.random() * Object.keys(categories).length)`.
   - Once the category is selected, it selects a random word from that category using similar logic.

2. **Starting the Game Functionality**:
   ```javascript
   const startGame = () => {
       // pick word and pick category
       const { word, category } = pickWordAndCategory();
       
       // create an array of letters
       let wordLetters = word.split("");
       wordLetters = wordLetters.map(wl => wl.toLowerCase());
       
       // fill states
       setPickedWord(word);
       setPickedCategory(category);
       setLetters(letters);
       
       setGameStage(stages[1].name);
   }
   ```
   - When the game starts, this function `startGame` is called.
   - It calls `pickWordAndCategory` to select a random word and category.
   - Then, it creates an array of lowercase letters from the selected word.
   - It updates the states `pickedWord`, `pickedCategory`, and `letters` with the selected word, category, and array of letters, respectively.
   - Finally, it sets the game stage to the "game" stage.

With these functionalities, the game can start with a randomly selected word and category each time, providing variety and unpredictability to the gameplay.