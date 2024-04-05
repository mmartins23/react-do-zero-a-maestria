# React Router Dom Setup

To achieve the desired functionality, you can follow these steps:

1. **Install React Router DOM**:
   First, install the `react-router-dom` package using npm or yarn:
   ```bash
   npm install react-router-dom
   ```
   or
   ```bash
   yarn add react-router-dom
   ```

2. **Create Pages**:
   Create separate components for the home, products, and about pages. Ensure these components are correctly exported.

3. **Create Navbar Component**:
   Create a `Navbar.js` component to serve as your navigation bar. Inside this component, use `NavLink` components from React Router DOM to create navigation links. Ensure you export the Navbar component.

4. **Set up Routes**:
   In your main component (`App.js`), import `BrowserRouter` as `Router`, `Routes`, and `Route` from `react-router-dom`. Define routes for your pages using the `Route` component and use the `Routes` component to wrap them.

5. **Import Components**:
   Import the created pages and the Navbar component into your `App.js` file.

Here's the modified code:

```javascript
// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Navbar } from "./components/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
```

```javascript
// Navbar.js
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};
```

```javascript
// Home.js
export const Home = () => {
  return <div>Home Component</div>;
};
```

```javascript
// About.js
export const About = () => {
  return <div>About Component</div>;
};
```

```javascript
// Products.js
export const Products = () => {
  return <div>Products Component</div>;
};
```

Ensure that you have appropriate CSS styles defined for your Navbar component (`Navbar.css`).