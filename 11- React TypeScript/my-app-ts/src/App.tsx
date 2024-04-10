import './App.css';

function App() {
  // 1- Variables in TS
  const name = 'John';
  const age = 23;
  const isWorking = true;


  return (
    <div className="App">
      <h1>React with Typescript</h1>
      {/* 1- Variables */}
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{isWorking && <p>{name} is working!</p>}</p>
    </div>
  );
}

export default App;
