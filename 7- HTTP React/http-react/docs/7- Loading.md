# Loading

In the provided code snippet, a loading indicator is added to the application to indicate when data is being fetched. Let's break down how it works:

```javascript
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState("");
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    
    // 6- Loading
    const [loading, setLoading] = useState(false);

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            // 6- loading
            setLoading(true); // Set loading to true when fetching data
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
            setLoading(false); // Set loading to false after data is fetched
        }
        fetchData();
    }, [url, callFetch])

    // 5- Refactoring Post
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                const json = await res.json();
                setCallFetch(json);
            }
        }
        httpRequest();
    }, [config, method, url])

    return { data, httpConfig, loading }
}
```

Here's how loading is used in the `App` component:

```javascript
import { useFetch } from './hooks/useFetch';

function App() {
    const { data: items, httpConfig, loading } = useFetch(url);

    return (
        <div className="App">
            <h2>List of products</h2>
            {/* Show loading message when data is being fetched */}
            {loading && <p>Loading products .....</p>}
            <ul>
                {/* Render the list of products */}
                {items && items.map((product) => (
                    <li key={product.id}>{product.name} - £{product.price}</li>
                ))}
            </ul>
            {/* Other JSX code */}
        </div>
    );
}
```

Explanation:

1. **Custom Hook Changes**:
    - A new state variable `loading` is added using the `useState` hook to track whether data is being fetched.
    - Inside the `useEffect` hook responsible for fetching data, `loading` is set to `true` before the fetch operation starts and then set back to `false` after the fetch operation completes.

2. **App Component**:
    - The `useFetch` custom hook returns a `loading` variable, which is destructured from the hook's return value in the `App` component.
    - In the `App` component, a conditional rendering is used to display a loading message (`<p>Loading products .....</p>`) when `loading` is `true`. This indicates to the user that data is being fetched.
    - Once the data is fetched and `loading` becomes `false`, the loading message disappears and the list of products is rendered.

This implementation provides visual feedback to the user during data fetching, enhancing the user experience by indicating that something is happening in the background.