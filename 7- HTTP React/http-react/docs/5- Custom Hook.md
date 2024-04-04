# Custom Hook 

Step 4 in the provided code snippet introduces a custom hook called `useFetch` and demonstrates its usage within the `App` component. Let's break it down:

1. **Importing Custom Hook**: First, the custom hook `useFetch` is imported from the file `'./hooks/useFetch'`. This hook is responsible for fetching data from the specified URL.

```javascript
// 4- Custom Hook
import { useFetch } from './hooks/useFetch';
```

2. **Using the Custom Hook**: Inside the `App` component, the custom hook `useFetch` is invoked by passing the URL (`url`) as an argument. The result of invoking the hook is destructured to obtain the `data` property, which contains the fetched data.

```javascript
// 4- Custom Hook
const { data: items } = useFetch(url);
```

3. **Custom Hook Definition**: The custom hook `useFetch` is defined separately from the component. It is a function that takes a URL as input and returns an object containing the fetched data (`data`).

```javascript
import { useState, useEffect } from 'react';

// 4- Custom Hooks
export const useFetch = (url) => {
    const [data, setData] = useState(""); // State variable to store fetched data

    useEffect(() => {
        // Fetch data asynchronously
        const fetchData = async () => {
            const res = await fetch(url); // Fetch data from the specified URL
            const json = await res.json(); // Convert response to JSON format
            setData(json); // Update state with the fetched data
        }
        fetchData(); // Call the fetchData function
    }, [url]) // Dependency array containing the URL

    return { data }; // Return an object containing the fetched data
}
```

4. **Usage of Fetched Data**: In the JSX of the `App` component, the fetched data (`items`) is utilized to render the list of products. The `map` function is applied to iterate over the `items` array and generate list items for each product.

```javascript
<ul>
  {/* Render the list of products */}
  {items && items.map((product) => (
    <li key={product.id}>{product.name} - £{product.price}</li>
  ))}
</ul>
```

Overall, Step 4 demonstrates the creation and usage of a custom hook (`useFetch`) to handle data fetching within the `App` component. This allows for better separation of concerns and reusability of logic related to fetching data.