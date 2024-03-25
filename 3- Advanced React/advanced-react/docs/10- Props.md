# Props

In React, props (short for properties) are a way to pass data from a parent component to a child component. Props are read-only and help create dynamic and reusable components. Here's how props work with a code example:

```jsx
import React from 'react';

// ChildComponent receives props as a parameter
const ChildComponent = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

// ParentComponent renders ChildComponent and passes props to it
const ParentComponent = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      {/* Props are passed as attributes */}
      <ChildComponent title="Hello" description="This is a description." />
    </div>
  );
};

export default ParentComponent;
```

Explanation:

1. **Parent Component**: In the `ParentComponent`, we render a `ChildComponent` and pass props to it. Props are passed as attributes on the `ChildComponent` element.

2. **Child Component**: The `ChildComponent` receives props as a parameter. Inside the component, we can access props using dot notation (`props.title`, `props.description`) to access the data passed from the parent.

3. **Dynamic Rendering**: Props allow components to be dynamic and reusable. We can pass different data to the `ChildComponent` by changing the props passed from the `ParentComponent`.

4. **Read-only**: Props are read-only, meaning that the child component cannot modify the props received from the parent. This helps maintain a unidirectional data flow in React applications.

In summary, props enable communication between components in a React application, allowing data to be passed down the component tree from parent to child. This makes React components more flexible, reusable, and easier to maintain.