// CSS Styles
import './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>Game Over</h1>
        <h2>Your total points: <span>{score}</span></h2>
        <button onClick={retry}>Click</button>
    </div>
  )
}

export default GameOver;
