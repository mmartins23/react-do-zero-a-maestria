# Adding Data with React

Certainly, let's break down Step 2 of the code:

```javascript
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
```

Here's what's happening in Step 2:

1. **Prevent Default Action**: The `handleSubmit` function is called when the form is submitted. The first step inside this function is to prevent the default behavior of the form submission, which is to refresh the page.

2. **Create Product Object**: A `product` object is created using the `name` and `price` state variables. These state variables hold the values entered by the user into the input fields of the form.

3. **POST Request to Add Product**: The `fetch` function is used to send a POST request to the specified `url` (which is the API endpoint for adding products). The request includes the `method` as POST, along with headers specifying that the content type is JSON. The `body` of the request is the `product` object converted to a JSON string using `JSON.stringify()`.

4. **Parse Response**: Once the POST request is made, the response from the server is awaited and then parsed as JSON using `res.json()`. This response likely contains the newly added product information.

5. **Update State with New Product**: The parsed JSON response, which represents the newly added product, is then added to the existing list of products stored in the component's state. This is achieved by using the `setProducts` function and the spread operator to create a new array containing all the previous products along with the newly added one.

6. **Clear Input Fields**: Finally, after adding the product successfully, the `name` and `price` state variables are reset to empty strings using the `setName` and `setPrice` functions. This clears the input fields in the form, ready for the user to add another product.

Overall, Step 2 handles the submission of the form to add a new product, making a POST request to the server, updating the UI with the newly added product, and clearing the input fields for further additions.