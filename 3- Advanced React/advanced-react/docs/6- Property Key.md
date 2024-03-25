# Property Key

In React, the `key` property is a special attribute used to uniquely identify elements rendered within a list. It helps React efficiently update and reconcile the DOM when the list changes, such as when items are added, removed, or reordered. Each key within a list should be unique among its siblings.

Here's an example to illustrate the use of the `key` property in React:

```jsx
import React from 'react';

const MyList = () => {
  // Sample array of data with unique IDs
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' }
  ];

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {/* Use map() to render a list item for each item in the array */}
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
```

Explanation:

1. **Data Array**: We have an array of objects called `items`, where each object represents a fruit and has a unique `id` property.

2. **Rendering List**: Inside the `MyList` component, we use the `map()` function to iterate over each item in the `items` array. For each item, we return a `<li>` element with the `key` attribute set to the `id` of the item. This ensures that each list item has a unique identifier.

3. **Component Usage**: The `<li>` elements are rendered within an unordered list `<ul>`, creating a list of fruits. The `key` property helps React efficiently update and reconcile the DOM when the list changes.

By providing a unique `key` for each list item, React can keep track of the item's state and optimize re-renders. It's important to use stable identifiers as keys to ensure predictable behavior and performance when working with lists in React.