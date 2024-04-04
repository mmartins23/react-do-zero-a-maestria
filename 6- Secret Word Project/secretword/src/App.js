// CSS Style 
import './App.css';

// Hooks
import { useCallback, useState, useEffect } from 'react';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

// Data
import { wordsList } from './data/word';

// Stages of the game
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

const guessesQty = 3;


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("");

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);


  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return { word, category };
  }, [words]);

  // starts the game
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();

    // pick work and pick category
    const { word, category } = pickWordAndCategory();

    // create an array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map(wl => wl.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name)
  }, [pickWordAndCategory]);

  // process the letter input
  const verifyLetter = (letter) => {

    // normalize letter
    const normalizedLetter = letter.toLowerCase();

    // Check if letter has alrady been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) { return }

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

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // reset all stages
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses])

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if(guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => actualScore +=100);

      // restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame])

  // restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
