# Receiving data from the API

The provided code is a React component that retrieves data from an API using the `fetch` function and displays it in the UI. Let's break down how it works:

1. **Setting up the Component**: The component is set up using functional components with the `useState` and `useEffect` hooks.

2. **Defining the API URL**: The `url` variable holds the URL of the API endpoint from which we want to fetch data. In this case, it's set to `http://localhost:3000/products`.

3. **Fetching Data from the API**: Inside the `useEffect` hook, an asynchronous function `fetchData` is defined. This function makes a GET request to the API endpoint specified by the `url` variable using the `fetch` function.

4. **Processing the Response**: Once the data is retrieved from the API, it is converted to JSON format using the `res.json()` method. The JSON data is then stored in the `data` variable.

5. **Updating the State**: The `setProducts` function is called to update the `products` state with the data retrieved from the API.

6. **Rendering the Data**: In the JSX code, a list of products is rendered using the `map` function on the `products` state. Each product is displayed as a list item (`<li>`) with its name and price.

Here's the code again with numbered comments explaining each step:

```jsx
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
```

This code demonstrates how to fetch data from an API in a React component using the `fetch` function and display it in the UI.