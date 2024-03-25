# Destructuring in props

In React, destructuring props is a technique used to extract specific values from the props object passed to a component. This can make your code cleaner and more concise by directly extracting the props you need, rather than accessing them through the props object each time. Here's an example to illustrate destructuring in props:

```jsx
import React from 'react';

// Functional component with destructuring in props
const UserInfo = ({ username, age, email }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

// Parent component passing props to UserInfo
const App = () => {
  const user = {
    username: 'john_doe',
    age: 25,
    email: 'john@example.com'
  };

  // Destructuring props in the parent component
  return <UserInfo {...user} />;
};

export default App;
```

In this example:
1. The `UserInfo` component receives `username`, `age`, and `email` as props.
2. Instead of accessing these props using `props.username`, `props.age`, etc., we're using destructuring in the function parameter `( { username, age, email } )` to directly extract these values from the `props` object.
3. In the `App` component, we create a `user` object with the relevant information.
4. When passing props to `UserInfo`, we're using the spread operator `{...user}` to pass all properties of the `user` object as separate props to the `UserInfo` component.

This approach makes the code cleaner and more readable, especially when dealing with components that receive many props. Additionally, it helps avoid repetitive `props` references within the component.