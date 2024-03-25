# List rendering in component

In React, list rendering refers to the process of rendering a list of elements dynamically based on an array or iterable data. This is a common task when building user interfaces that display dynamic content like lists of items, menus, or tables. You can achieve list rendering using the `map()` function to iterate over the data and create React elements for each item. Here's an explanation with a code example:

```jsx
import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {/* Using map() to render a list of todo items */}
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  // Sample array of todo items
  const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a React app' },
    { id: 3, text: 'Deploy the app' }
  ];

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
```

In this example:

1. We have a `TodoList` component that receives an array of todos as props.
2. Inside the `TodoList` component, we use the `map()` function to iterate over the `todos` array.
3. For each todo item, we create a `<li>` element with the todo's text as content. We also assign a unique `key` to each `<li>` element to help React identify which items have changed, added, or removed.
4. In the `App` component, we define an array of todo items and pass it as props to the `TodoList` component.

Key points to note:

- Using `map()` allows us to dynamically render a list of elements based on the data.
- Each rendered component in the list should have a unique `key` prop assigned to it to help React efficiently update the UI when the list changes.
- List rendering is a powerful feature in React that enables the creation of dynamic and interactive user interfaces.

Overall, list rendering in React provides a flexible and efficient way to display dynamic content and is commonly used in building various types of applications.