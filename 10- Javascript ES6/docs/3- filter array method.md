# Filter Array Method

The `filter()` method in JavaScript is used to create a new array with all elements that pass a certain condition defined by a callback function. Here are examples of using `filter()` to filter numbers and users:

1. Filtering numbers:

```javascript
const numbers = [1, 5, 10, 15, 20, 25];

// Filter numbers greater than 10
const filteredNumbers = numbers.filter(number => number > 10);

console.log(filteredNumbers); // Output: [15, 20, 25]
```

2. Filtering users:

```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 20 },
  { id: 4, name: "David", age: 35 },
];

// Filter users younger than 30
const filteredUsers = users.filter(user => user.age < 30);

console.log(filteredUsers);
// Output:
// [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 3, name: 'Charlie', age: 20 }
// ]
```

In both examples, the `filter()` method iterates through each element of the array and applies the condition specified in the callback function (`number > 10` for numbers and `user.age < 30` for users). It creates a new array containing only the elements that satisfy the condition.