// CSS Style
import './App.css';

// Hooks
import { useState, useEffect } from 'react';

// URL for the API
const url = "http://localhost:3000/products";

// App component
function App() {
  // State variables for products, name, and price
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1- Retrieve data
  useEffect(() => {
    // Fetch products data from the API
    async function fetchData() {
      const res = await fetch(url); // Fetch data from the API
      const data = await res.json(); // Convert response to JSON
      setProducts(data); // Update state with the fetched data
    }
    fetchData();
  }, []) // Empty dependency array to only run once on component mount

  // 2- Add Products
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a product object with name and price
    const product = {
      name,
      price,
    }

    // Make a POST request to add the new product
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

    // 3- loading data dynamically
    const addedProduct = await res.json(); // Parse the response as JSON

    // Update the state with the new product added to the existing products
    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // Clear the input fields after submission
    setName("");
    setPrice("");
  }

  // JSX for rendering the UI
  return (
    <div className="App">
      <h2>List of products</h2>
      <ul>
        {/* Render the list of products */}
        {products.map((product) => (
          <li key={product.id}>{product.name} - £{product.price}</li>
        ))}
      </ul>

      <div className='add-product'>
        {/* Form for adding new product */}
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type='text' value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>

          <label>
            Price:
            <input type='number' value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type='submit' value="add" />
        </form>
      </div>
    </div>
  );
}

export default App;
