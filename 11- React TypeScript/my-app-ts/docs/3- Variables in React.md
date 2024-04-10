# Variables in React

In React, variables are used to store data that can be dynamically displayed or manipulated within components. They are declared using JavaScript's `const`, `let`, or `var` keywords. Variables in React can hold various types of data, such as strings, numbers, booleans, arrays, objects, or even functions.

In the provided code example:

```jsx
import './App.css';

function App() {
  // Declaring variables
  const name = 'John';
  const age = 23;
  const isWorking = true;

  return (
    <div className="App">
      <h1>React with Typescript</h1>
      {/* Displaying variables */}
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      {/* Conditional rendering based on a variable */}
      <p>{isWorking && <p>{name} is working!</p>}</p>
    </div>
  );
}

export default App;
```

Here's an explanation of the variables used in the code:

1. **`name`**: It holds a string value `'John'`, representing a person's name.
2. **`age`**: It holds a numeric value `23`, representing the person's age.
3. **`isWorking`**: It holds a boolean value `true`, indicating whether the person is currently working.

In the JSX code within the `return` statement:
- The variables `{name}` and `{age}` are directly inserted into the JSX using curly braces `{}`. This is called interpolation, and it allows dynamic data to be displayed within the JSX.
- The variable `{isWorking}` is used in a conditional rendering expression `{isWorking && <p>{name} is working!</p>}`. If `isWorking` is `true`, it will render the paragraph `<p>{name} is working!</p>`; otherwise, it will render nothing.

Overall, variables in React are used to store and manipulate data dynamically, allowing for more dynamic and interactive user interfaces.