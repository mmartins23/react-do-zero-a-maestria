# Spread Operator

The spread operator, denoted by three consecutive dots (`...`), is a powerful feature introduced in ES6 (ECMAScript 2015) that allows an iterable (such as an array or string) to be expanded into individual elements. It can be used in various contexts, including arrays, objects, and function arguments. Here's how it works with code examples:

1. Spread Operator with Arrays:

```javascript
// Example 1: Copying an array
const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];

console.log(copiedNumbers); // Output: [1, 2, 3]

// Example 2: Combining arrays
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'grape'];

const combinedFruits = [...fruits, ...moreFruits];

console.log(combinedFruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Example 3: Adding elements to an array
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5];

console.log(newArray); // Output: [1, 2, 3, 4, 5]
```

2. Spread Operator with Objects:

```javascript
// Example 1: Copying an object
const person = { name: 'John', age: 30 };
const copiedPerson = { ...person };

console.log(copiedPerson); // Output: { name: 'John', age: 30 }

// Example 2: Merging objects
const defaults = { theme: 'dark', fontSize: 14 };
const userPreferences = { fontSize: 16 };

const mergedPreferences = { ...defaults, ...userPreferences };

console.log(mergedPreferences); // Output: { theme: 'dark', fontSize: 16 }
```

3. Spread Operator with Function Arguments:

```javascript
// Example 1: Passing array elements as function arguments
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;

console.log(sum(...numbers)); // Output: 6

// Example 2: Combining arrays in a function call
const moreNumbers = [4, 5, 6];
const combinedSum = sum(...numbers, ...moreNumbers);

console.log(combinedSum); // Output: 21
```

The spread operator provides a concise syntax for working with arrays, objects, and function arguments. It's particularly useful for tasks such as copying, merging, and spreading elements.