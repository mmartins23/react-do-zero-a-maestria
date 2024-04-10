import './App.css';
import Destructuring from './components/Destructuring';
// Components
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';

function App() {
  // 1- Variables in TS
  const name = 'John';
  const age = 23;
  const isWorking = true;

  // 2- Function in TS
  const greeting = (name: string):string => {
    return `Good Morning, ${name}`
  }


  return (
    <div className="App">
      <h1>React with Typescript</h1>
      {/* 1- Variables */}
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{isWorking && <p>{name} is working!</p>}</p>
      {/* 2- Function */}
      <h3>{greeting(name)}</h3>
      {/* 3- Components */}
      <FirstComponent/>
      {/* 4- Destructuring */}
      <SecondComponent name={'Second'}/>
      <Destructuring post={'Learning Destructuring in JS'} comments={'Nice Work'} commentsQty={1} tags={["js", "ts"]}/>
      {/* 5- useState */}
      <State/>
    </div>
  );
}

export default App;
