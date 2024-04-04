# Adding Data with React

The provided code demonstrates how to add a product to the list of products displayed in the UI by sending a POST request to the API endpoint. Let's break down how it works:

1. **State Initialization**: The component initializes state variables `name` and `price` to manage the input fields for adding a new product.

2. **Handle Submit Function**: The `handleSubmit` function is called when the form is submitted. It prevents the default form submission behavior, creates a new product object using the `name` and `price` state variables, and sends a POST request to the API endpoint (`url`) with the new product data.

3. **Adding Product via POST Request**: Inside the `handleSubmit` function, `fetch` is used to make a POST request to the API endpoint (`url`). The request includes the method (`POST`), headers specifying the content type as JSON, and the product data in JSON format as the request body.

4. **Updating the UI**: After adding the product successfully, the UI is not updated automatically. Typically, you would either refresh the page or make another API request to fetch the updated data and update the `products` state accordingly. However, this step is missing in the provided code.

Here's the code with numbered comments explaining each step:

```jsx
// CSS Style
import './App.css';

// Hooks
import { useState, useEffect } from 'react';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Retrieve data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, [])

  // Add Products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    }

    // Send POST request to add product
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

    // Optionally, update UI by fetching data again
    // const newData = await res.json();
    // setProducts([...products, newData]);
    
    // Clear input fields
    setName("");
    setPrice("");
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
```

Remember to handle errors and edge cases appropriately, such as validating user input and handling server responses. Additionally, consider updating the UI after adding a product for a better user experience.