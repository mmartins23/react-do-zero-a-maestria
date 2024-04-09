# Template Literals

Template literals, introduced in ES6, are string literals allowing embedded expressions. They are enclosed by backticks (` `) instead of single or double quotes. Template literals support multi-line strings and interpolation, making string manipulation more concise and readable. Here's how they work with code examples:

1. Basic usage:

```javascript
const name = 'John';
const greeting = `Hello, ${name}!`;

console.log(greeting); // Output: Hello, John!
```

In this example, `${name}` is a placeholder for the variable `name`, and it gets replaced with its value when evaluated inside the template literal.

2. Multi-line strings:

```javascript
const multiLineString = `
  This is a
  multi-line
  string using
  template literals.
`;

console.log(multiLineString);
```

This example demonstrates the ability to create multi-line strings without using concatenation or escape characters.

3. Expressions and calculations:

```javascript
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result); // Output: The sum of 5 and 10 is 15.
```

Template literals can contain expressions, allowing for dynamic content generation and calculations directly within the string.

4. Nesting template literals:

```javascript
const name = 'John';
const profession = 'developer';
const greeting = `Hello, my name is ${name}, and I'm a ${profession}.`;

console.log(greeting); // Output: Hello, my name is John, and I'm a developer.
```

You can nest template literals within other template literals to create complex strings with embedded expressions.

Template literals offer a more convenient and readable syntax for string interpolation and multi-line strings compared to traditional string concatenation or interpolation methods.