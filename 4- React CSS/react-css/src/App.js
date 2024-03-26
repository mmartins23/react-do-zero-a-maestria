import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';


function App() {
  const n = 6;
  return (
    <div className="App">
      {/* CSS  Global */}
      <h1>React CSS Global</h1>
      {/* CSS Component */}
      <MyComponent />
      {/* CSS Inline Dynamic */}
      <p style={n > 5 ? { color: 'yellow', backgroundColor: 'black' } : { color: 'purple', backgroundColor: 'black' }}>This was styled via dynamic inline</p>
      {/* Dynamic class */}
      <p className={n > 5 ? 'redStyle' : 'blackStyle'}>This was styled via dynamic classname css</p>
      {/* CSS Module */}
      <Title />
    </div>
  );
}

export default App;
