# Switching Game Stages

In this code snippet, the `App` component manages the game stages and switches between them based on certain conditions. Let's understand how the game stages are switched:

1. **Start Game Functionality**:
   ```javascript
   const startGame = () => {
     setGameStage(stages[1].name);
   }
   ```
   - This function `startGame` is responsible for transitioning the game from the "start" stage to the "game" stage.
   - It updates the `gameStage` state to the name of the second stage in the `stages` array, which is the "game" stage.

2. **Verify Letter Functionality**:
   ```javascript
   const verifyLetter = () => {
     setGameStage(stages[2].name);
   }
   ```
   - This function `verifyLetter` is called when processing a letter input in the game.
   - It updates the `gameStage` state to the name of the third stage in the `stages` array, which is the "end" stage.

3. **Retry Functionality**:
   ```javascript
   const retry = () => {
     setGameStage(stages[0].name);
   }
   ```
   - This function `retry` is responsible for restarting the game.
   - It updates the `gameStage` state to the name of the first stage in the `stages` array, which is the "start" stage.

4. **Rendering Components Based on Game Stage**:
   ```javascript
   return (
     <div className="App">
       {gameStage === 'start' && <StartScreen startGame={startGame} />}
       {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
       {gameStage === 'end' && <GameOver retry={retry}/>}
     </div>
   );
   ```
   - The `App` component renders different components (`StartScreen`, `Game`, or `GameOver`) based on the current `gameStage`.
   - If `gameStage` is "start", it renders the `StartScreen` component with the `startGame` function passed as a prop.
   - If `gameStage` is "game", it renders the `Game` component with the `verifyLetter` function passed as a prop.
   - If `gameStage` is "end", it renders the `GameOver` component with the `retry` function passed as a prop.

With these functionalities, the game can smoothly transition between its different stages: start, game, and end, based on user actions or game logic.