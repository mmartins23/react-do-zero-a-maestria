# Ternary Operator

In React, the ternary operator (`? :`) is commonly used for conditional rendering within JSX. It allows you to conditionally render components or elements based on a boolean expression. When the expression evaluates to `true`, the expression before the `:` is rendered. If the expression evaluates to `false`, the expression after the `:` is rendered.

Here's an example to illustrate the use of the ternary operator for conditional rendering:

```jsx
import React, { useState } from 'react';

const MyComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Welcome to My App</h2>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
};

export default MyComponent;
```

Explanation:

1. **State Initialization**: We use the `useState` hook to declare a state variable `isLoggedIn` initialized with a value of `false`.

2. **Conditional Rendering**: Within the JSX, we use the ternary operator `? :` to conditionally render different messages based on the user's login status.
   - If `isLoggedIn` is `true`, the expression before the `:` (`<p>You are logged in!</p>`) is rendered.
   - If `isLoggedIn` is `false`, the expression after the `:` (`<p>Please log in to continue.</p>`) is rendered.

3. **Dynamic Rendering**: The content rendered by the ternary operator is dynamic and will change based on the value of `isLoggedIn`. When `isLoggedIn` is `true`, the message "You are logged in!" will be rendered. When `isLoggedIn` is `false`, the message "Please log in to continue." will be rendered.

Using the ternary operator (`? :`) for conditional rendering provides a concise and readable way to handle conditional logic in JSX. It's commonly used for rendering components conditionally based on boolean expressions in React.