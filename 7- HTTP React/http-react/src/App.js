// CSS Style
import './App.css';

// Hooks
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  // 1- Retrieve data
  useEffect(() => {
    async function fetchData() {
      // 2- Fetch data from the API
      const res = await fetch(url);
      
      // 3- Convert response to JSON
      const data = await res.json();
      
      // 4- Update state with the fetched data
      setProducts(data);
    }
    fetchData();
  }, [])


  return (
    <div className="App">
      <h2>List of products</h2>
      <ul>
        {/* 5- Render the list of products */}
        {products.map((product) => (
          <li key={product.id}>{product.name} - £{product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
