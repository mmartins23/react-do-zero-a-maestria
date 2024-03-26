import './App.css';
import MyForms from './components/MyForm'

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForms user={{name: "John", email: "john@example.com", bio: "developer", role: "admin"}}/>
    </div>
  );
}

export default App;
