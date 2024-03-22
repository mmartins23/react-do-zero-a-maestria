# Public images in React

In React, public images are typically stored in the `public` directory of your project. You can reference these images in your components using relative paths. Here's how you can use public images in a React project:

1. **Place Images in the `public` Directory**: First, place your images in the `public` directory of your React project. This directory is typically located at the root of your project.

   For example, if you have an image named `example.jpg`, you would place it in the `public` directory like this:

   ```
   public/
   └── example.jpg
   ```

2. **Reference Images in Components**: You can reference these images in your React components using relative paths. For example, if you want to display the `example.jpg` image in a component, you can use the following code:

   ```jsx
   import React from 'react';

   const MyComponent = () => {
       return (
           <div>
               <img src="/example.jpg" alt="Example" />
           </div>
       );
   };

   export default MyComponent;
   ```

   In the `src` attribute of the `<img>` tag, you specify the relative path to the image starting from the root of your project (`/`). Since the image is in the `public` directory, you don't need to include `public` in the path.

3. **Build and Deploy**: When you build your React project for production, the images from the `public` directory will be copied to the build output. You can deploy your React application, and the images will be served from the correct path relative to the root of your website.

That's it! You can now use public images in your React components by referencing them with relative paths. This approach is suitable for static images that don't need to be processed by Webpack or other build tools.