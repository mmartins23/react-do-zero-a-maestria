# Inline CSS

In React, you can apply inline CSS styles directly to individual elements using JavaScript objects. This approach allows you to define styles dynamically based on component state or props. Here's an explanation with a code example:

### Usage:

In your React component, define a JavaScript object containing CSS property-value pairs, and then apply it to JSX elements using the `style` attribute.

```jsx
import React from 'react';

const MyComponent = () => {
  // Define inline styles as a JavaScript object
  const styles = {
    container: {
      textAlign: 'center',
    },
    title: {
      color: 'blue',
    },
    text: {
      color: 'green',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello, world!</h1>
      <p style={styles.text}>This is a React component.</p>
    </div>
  );
};

export default MyComponent;
```

### Dynamic Styles:

You can also use JavaScript expressions to define dynamic styles based on component state or props.

```jsx
import React, { useState } from 'react';

const MyComponent = () => {
  const [isTitleBlue, setIsTitleBlue] = useState(true);

  const toggleTitleColor = () => {
    setIsTitleBlue(prevState => !prevState);
  };

  // Define inline styles dynamically based on component state
  const titleColor = isTitleBlue ? 'blue' : 'red';
  const titleStyle = {
    color: titleColor,
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={titleStyle}>Hello, world!</h1>
      <button onClick={toggleTitleColor}>Toggle Title Color</button>
    </div>
  );
};

export default MyComponent;
```

In this example, the color of the title dynamically changes between blue and red when the button is clicked.

### Pros and Cons:

#### Pros:
- Inline styles provide a straightforward way to define styles directly within React components.
- Styles are scoped to individual elements, avoiding global namespace collisions.

#### Cons:
- Inline styles can clutter your JSX code, especially for complex styles.
- It may be difficult to maintain and reuse inline styles, especially across multiple components.

### Summary:

Inline CSS in React allows you to define styles directly within your components using JavaScript objects. While this approach can be convenient for simple styling needs or dynamic styles, it's generally recommended to use CSS files or CSS-in-JS libraries like Styled Components for larger projects or more complex styling requirements.