import './StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret Word</h1>
        <p>Click to start the game</p>
        <button onClick={startGame}>Start game</button>
    </div>
  )
}

export default StartScreen;