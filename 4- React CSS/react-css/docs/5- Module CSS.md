# Module CSS

CSS Modules is a popular approach for styling React components. It allows you to write modular CSS code where class names are scoped locally by default, preventing naming collisions and making it easier to manage styles within components. Here's an explanation with code examples:

### Installation:

First, you need to set up your React project to support CSS Modules. You can achieve this by using tools like Webpack, Create React App, or Next.js, which have built-in support for CSS Modules.

### Usage:

Once your project is set up to support CSS Modules, you can start using them in your React components.

#### 1. CSS Module File:

Create a CSS file for your component and name it with the `.module.css` extension. This naming convention indicates to the build tool that it should treat the CSS file as a CSS Module.

```css
/* MyComponent.module.css */

.container {
  text-align: center;
}

.title {
  color: blue;
}

.text {
  color: green;
}
```

#### 2. React Component:

Import and use the CSS module classes in your React component.

```jsx
// MyComponent.jsx
import React from 'react';
import styles from './MyComponent.module.css'; // Import CSS module

const MyComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, world!</h1>
      <p className={styles.text}>This is a React component.</p>
    </div>
  );
};

export default MyComponent;
```

In this example:

- We import the CSS module `MyComponent.module.css` using the `styles` object.
- We use the `styles` object to access class names defined in the CSS module within the JSX code.
- Class names are scoped locally to the component, preventing conflicts with other components.

### Benefits of CSS Modules:

1. **Scoping:** CSS Modules scope class names locally to the component, preventing global namespace collisions.
2. **Modularity:** CSS Modules encourage modular CSS code, making it easier to manage and maintain styles within components.
3. **Type Safety:** By importing CSS classes as objects, IDEs can provide auto-completion and type checking for class names.

### Summary:

CSS Modules provide a convenient and scalable way to style React components. By scoping class names locally and promoting modularity, CSS Modules help improve the maintainability and organization of styles in your React applications.