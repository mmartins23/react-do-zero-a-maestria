import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { HookUseContext } from './components/HookUseContext';

// import pages
import Home from './pages/Home';
import About from './pages/About';



function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>React Hooks</h1>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </HookUseContext>
    </div>
  );
}

export default App;
