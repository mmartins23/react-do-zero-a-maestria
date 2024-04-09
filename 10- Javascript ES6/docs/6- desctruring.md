# Destructuring

Destructuring assignment is a feature introduced in ES6 that allows you to extract values from arrays or properties from objects into distinct variables. It provides a concise syntax for assigning values to variables from arrays or objects. Here's how it works with code examples:

1. Destructuring Arrays:

```javascript
// Basic array destructuring
const numbers = [1, 2, 3, 4, 5];
const [a, b, c] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

In this example, `a`, `b`, and `c` are variables that are assigned the values of the first three elements from the `numbers` array.

```javascript
// Skipping elements in array destructuring
const [first, , third] = numbers;

console.log(first);  // Output: 1
console.log(third);  // Output: 3
```

You can skip elements in the array by leaving empty commas.

2. Destructuring Objects:

```javascript
// Basic object destructuring
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
```

Here, `name` and `age` are variables that are assigned the values of the `name` and `age` properties from the `person` object.

```javascript
// Renaming destructured properties
const { name: fullName, age: personAge } = person;

console.log(fullName);   // Output: John
console.log(personAge);  // Output: 30
```

You can also rename the destructured properties by providing an alias after the colon.

3. Destructuring Function Parameters:

```javascript
// Destructuring function parameters
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

printPerson(person);  // Output: Name: John, Age: 30
```

Destructuring can be used in function parameters to extract values from objects passed as arguments directly.

Destructuring simplifies code and makes it more readable by providing a concise syntax for extracting values from arrays and objects. It's particularly useful when working with complex data structures or when dealing with function parameters.