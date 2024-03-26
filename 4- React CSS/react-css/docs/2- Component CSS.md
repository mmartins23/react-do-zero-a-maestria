# Component CSS

To add styles to components in React using separate CSS files with the same name as the component file, you can follow these steps:

### 1. Create Component File:

First, create your React component file with the desired name. For example, let's create a component called `MyComponent.jsx`.

```jsx
// MyComponent.jsx
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a React component.</p>
    </div>
  );
};

export default MyComponent;
```

### 2. Create CSS File:

Next, create a CSS file with the same name as the component file, but with a `.css` extension. For our example, create a file named `MyComponent.css`.

```css
/* MyComponent.css */
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

### 3. Import CSS into Component:

Import the CSS file into your component file. You can import the CSS file directly into your JavaScript/JSX file using the `import` statement.

```jsx
// MyComponent.jsx
import React from 'react';
import './MyComponent.css'; // Import CSS file

const MyComponent = () => {
  return (
    <div className="container">
      <h1 className="title">Hello, world!</h1>
      <p className="text">This is a React component.</p>
    </div>
  );
};

export default MyComponent;
```

### 4. Usage:

Now, when you use the `MyComponent` component in your application, the styles defined in the `MyComponent.css` file will be applied.

```jsx
// App.jsx
import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

export default App;
```

### Summary:

By following these steps, you can add styles to your React components by creating separate CSS files with the same name as the component files. This approach helps keep your component's styles organized and modular, making it easier to manage and maintain your application's CSS code.