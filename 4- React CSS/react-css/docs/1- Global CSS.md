# Global CSS

In React, you can include global CSS stylesheets in your application to apply styles globally across all components. You can import CSS files directly into your React components or into the root component of your application. Here's an explanation with a code example:

### 1. Importing Global CSS into the Root Component:

You can import a global CSS file into the root component of your React application, such as `App.js` or `index.js`. This will ensure that the styles defined in the CSS file are applied globally to all components in your application.

```jsx
// App.js

import React from 'react';
import './App.css'; // Import the global CSS file

const App = () => {
  return (
    <div className="app">
      <h1>Hello, world!</h1>
      <p>This is a React application.</p>
    </div>
  );
};

export default App;
```

### 2. Global CSS File:

In your global CSS file (e.g., `App.css`), you can define styles that you want to apply globally across your application. For example:

```css
/* App.css */

body {
  font-family: Arial, sans-serif;
}

.app {
  text-align: center;
  margin-top: 20px;
}

h1 {
  color: #333;
}

p {
  color: #666;
}
```

### Notes:

- By importing the CSS file into the root component (`App.js`), the styles defined in the CSS file will be applied to all components rendered within the `App` component.
- The CSS rules defined in the global CSS file will have global scope and apply to all elements in your application.
- You can organize your global CSS files however you prefer, such as having separate files for different sets of global styles or including all global styles in a single file.

Using global CSS in React is a straightforward way to apply consistent styles across your entire application. However, be cautious when using global styles, as they can affect the styles of third-party components or lead to unintended conflicts. It's often a good practice to use CSS methodologies like BEM (Block Element Modifier) or CSS Modules to help manage your styles and avoid naming collisions.