# Functions

In TypeScript, functions are defined similarly to JavaScript functions but with the added benefit of specifying types for parameters and return values. Here's an explanation of the provided code example:

```tsx
import './App.css';

function App() {
  // 1- Variables in TS
  const name = 'John';
  const age = 23;
  const isWorking = true;

  // 2- Function in TS
  const greeting = (name: string): string => {
    return `Good Morning, ${name}`;
  };

  return (
    <div className="App">
      <h1>React with Typescript</h1>
      {/* 1- Variables */}
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>{isWorking && <p>{name} is working!</p>}</p>
      {/* 2- Function */}
      <h3>{greeting(name)}</h3>
    </div>
  );
}

export default App;
```

Here's an explanation of the function defined in the code:

1. **`greeting` function**: This function takes a single parameter `name`, which is specified to be of type `string`. The function returns a string, as indicated by the return type `: string`.

   - `(name: string)`: This part defines the parameter `name` with the type `string`.
   - `: string`: This part specifies the return type of the function as `string`.
   - `=>`: This is the arrow function syntax used in TypeScript.

   Inside the function body, a template literal is used to generate a string containing the greeting `"Good Morning"` along with the provided `name`.

In the JSX code within the `return` statement:
- The function `{greeting(name)}` is called to generate a greeting message based on the `name` variable. The result of the function call is displayed within an `<h3>` element.

Overall, functions in TypeScript allow you to specify types for parameters and return values, which can help catch errors during development and improve code readability.