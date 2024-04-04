// Hooks
import { useState, useRef } from 'react';

// Styles
import './Game.css';

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score }) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  }

  return (
    <div className='game'>
      <p className='points'>
        <span>Total Points: {score}</span>
      </p>
      <h1>Guess the word:</h1>
      <h3 className='tip'>
        Hint about the word: <span>{pickedCategory}</span>
      </h3>
      <p>You still have {guesses} guesses</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className='letter'>{letter}</span>
          ) : (
            <span key={i} className='blankSquare'></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Guess one word:
        </p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="letter" maxLength="1" onChange={(e) => setLetter(e.target.value)}
            value={letter} ref={letterInputRef} required />
          <button>Play</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Used Letters</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter},</span>
        ))}
      </div>
    </div>
  )
}

export default Game;