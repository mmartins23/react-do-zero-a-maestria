import './App.css';

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
    </div>
  );
}

export default App;
