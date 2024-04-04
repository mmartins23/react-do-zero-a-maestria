# Loading data dynamically

Step 3 in the provided code snippet is the part where the application dynamically loads the data after a new product is added. Let's break down the process:

```javascript
// 3- loading data dynamically
const addedProduct = await res.json();

setProducts((prevProducts) => [...prevProducts, addedProduct]);

setName("");
setPrice("");
```

1. After making a POST request to add a new product to the server, the response is awaited and parsed as JSON.
2. The parsed JSON response represents the newly added product.
3. The `setProducts` function is then called with the previous products array and the newly added product concatenated to it. This updates the state with the new list of products including the newly added one.
4. Finally, the `setName` and `setPrice` functions are called to reset the input fields to empty strings, clearing them for the next product addition.

This step ensures that once a new product is added, the UI is updated immediately to reflect the change without needing a page refresh. The new product is appended to the list of products displayed on the page.