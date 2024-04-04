// CSS Style
import './App.css';

// Hooks
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  // 1- Retrieve data
  useEffect(() => {
    async function fetchData() {
      // Fetch data from the API
      const res = await fetch(url);
      
      // Convert response to JSON
      const data = await res.json();
      
      // Update state with the fetched data
      setProducts(data);
    }
    fetchData();
  }, [])

  // 2- Add Products
  const handleSubmit = async(e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
     method: "POST",
     headers: {
      "Content-Type": "application/json"
     },
     body: JSON.stringify(product),
    });
  }

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
        <form onSubmit={handleSubmit}>
         <label>
          Name:
          <input type='text' value={name} name="name" onChange={(e) => setName(e.target.value)}/>
         </label>

         <label>
          Price:
          <input type='number' value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
         </label>
         <input type='submit' value="add"/>
        </form>
      </div>
    </div>
  );
}

export default App;
