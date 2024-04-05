import './App.css';

import { useState } from 'react';

// 4- Custom Hook
import { useFetch } from './hooks/useFetch';

// URL for the API
const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4- Custom Hook and 5- Refactor Post
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 2- Add Products
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a product object with name and price
    const product = {
      name,
      price,
    };

    // 5- Refactoring Post
    httpConfig(product, "POST");

    // Clear the input fields after submission
    setName("");
    setPrice("");
  }

  // 8- Challenge
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h2>List of products</h2>
      {/* 6 - state de loading */}
      {loading && <p>Loading products .....</p>}
      {error && <p>{error}</p>}
      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - £{product.price}
            {/* 8- desafio */}
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div className='add-product'>
        <p>Add product:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type='number'
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type='submit' value="add" />
        </form>
      </div>
    </div>
  );
}

export default App;
