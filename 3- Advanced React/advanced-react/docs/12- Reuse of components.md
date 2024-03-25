# Reuse of components

Certainly! Here's an explanation of reusing components in React with code examples, focusing solely on basic component reuse and props passing:

### 1. Basic Component Reuse:

You can create reusable components that encapsulate specific UI elements or functionalities:

```jsx
// Button.js
import React from 'react';

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
```

Now, you can reuse this `Button` component in various parts of your application:

```jsx
// App.js
import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default App;
```

### 2. Reusing Components with Props:

You can make your components more flexible by passing props:

```jsx
// Card.js
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
```

Now, you can reuse the `Card` component with different content:

```jsx
// App.js
import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card title="First Card" content="Content of the first card" />
      <Card title="Second Card" content="Content of the second card" />
    </div>
  );
};

export default App;
```

### Benefits:

1. **Modularity:** Components can be easily reused across different parts of the application, promoting modular code.
2. **Customization:** By passing props, you can customize the behavior and appearance of components according to different requirements.
3. **Consistency:** Reusing components ensures consistency in UI elements and functionalities throughout the application.
4. **Efficiency:** Writing reusable components reduces code duplication, making development more efficient and less error-prone.

In summary, leveraging basic component reuse and props passing in React allows for the creation of modular, customizable, and efficient UI components across your application. This promotes code maintainability, scalability, and consistency.