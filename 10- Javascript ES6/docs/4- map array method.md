# Map Array Method

Certainly! The `map()` method in JavaScript is used to create a new array by calling a provided function on every element in the original array. Here's an explanation along with code examples:

1. Basic usage of `map()`:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Multiply each number by 2
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
```

In this example, `map()` multiplies each number in the `numbers` array by 2 and creates a new array with the result.

2. Mapping through a list of products and adding a new property if the prices are below 10:

```javascript
const products = [
  { id: 1, name: "Product A", price: 8 },
  { id: 2, name: "Product B", price: 12 },
  { id: 3, name: "Product C", price: 5 },
];

// Add a property 'onsale' to products with price below 10
const productsOnSale = products.map(product => {
  if (product.price < 10) {
    return { ...product, onSale: true };
  } else {
    return product;
  }
});

console.log(productsOnSale);
```

In this example, the `map()` method iterates through each product in the `products` array. If the price of the product is below 10, it creates a new object with an additional property `onSale` set to `true`. Otherwise, it returns the original product object. The `...product` syntax is used for object spread to copy all existing properties of the product.