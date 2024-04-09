# let and const

In ES6 (ECMAScript 2015), two new variable declaration keywords were introduced: `const` and `let`. These keywords have different scoping rules and immutability characteristics compared to the traditional `var` keyword. Below is an explanation of each:

1. **`const` Declaration:**
   - Variables declared with `const` are block-scoped like variables declared with `let`.
   - The value of a `const` variable cannot be reassigned once it's initialized.
   - However, for complex data types like arrays or objects, the properties of the object/array can still be modified.
   - It's a good practice to use `const` for variables that you know will not be reassigned.
   
   Example:
   ```javascript
   const PI = 3.14159; // Constant value of PI
   const myName = "John"; // Constant string

   // This will throw an error because the value of a constant cannot be changed
   // PI = 3.14;

   // However, the properties of objects or arrays declared with const can be modified
   const person = { name: "John", age: 30 };
   person.age = 31; // Valid
   ```

2. **`let` Declaration:**
   - Variables declared with `let` are block-scoped like variables declared with `const`.
   - The value of a `let` variable can be reassigned.
   - `let` allows for more flexible variable assignment compared to `const`.
   
   Example:
   ```javascript
   let x = 10; // Mutable variable
   x = 20; // Valid reassignment
   
   // Block scope example
   if (true) {
     let y = 20;
     console.log(y); // Outputs: 20
   }
   // console.log(y); // ReferenceError: y is not defined because y is not accessible outside the block

   // let can be used in loops to declare variables that are scoped to the loop
   for (let i = 0; i < 3; i++) {
     console.log(i); // Outputs: 0, 1, 2
   }
   // console.log(i); // ReferenceError: i is not defined because i is not accessible outside the loop
   ```

In summary, `const` is used to declare constants whose values cannot be reassigned, while `let` is used for variables that need to be reassigned or have block scope. It's generally recommended to use `const` by default and only use `let` when you need to reassign the variable.