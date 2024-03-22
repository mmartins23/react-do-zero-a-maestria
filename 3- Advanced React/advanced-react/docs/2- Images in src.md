# Images in src

To add images in React using assets, you typically import the images into your JavaScript files and then use them as variables in your components. Here's how you can do it:

1. **Place Images in the `src/assets` Directory**: First, create an `assets` directory inside the `src` directory of your React project. Place your images in this directory. For example, you might have a file structure like this:

   ```
   src/
   ├── assets/
   │   └── example.jpg
   ├── components/
   │   └── MyComponent.js
   └── App.js
   ```

   Place your image files, such as `example.jpg`, inside the `src/assets` directory.

2. **Import Images in Your Components**: Next, import the images into your React components where you want to use them. You can import the images as variables using ES6 import syntax. For example:

   ```jsx
   import React from 'react';
   import exampleImage from '../assets/example.jpg';

   const MyComponent = () => {
       return (
           <div>
               <img src={exampleImage} alt="Example" />
           </div>
       );
   };

   export default MyComponent;
   ```

   In this example, `exampleImage` is a variable that holds the imported image. We use this variable as the `src` attribute of the `<img>` tag.

3. **Build and Deploy**: When you build your React project for production, the images will be included in the build output. You can deploy your React application, and the images will be served from the correct path relative to the root of your website.

By importing images as assets, you can easily manage and use them in your React components. This approach is suitable for static images that you want to include in your project without the need for additional configuration or processing.