# Importing Components

Importing components in React is straightforward. Here's how you can import the `FirstComponent` into your `App.js` file:

1. **Create the Component File**: First, make sure you have a file where your `FirstComponent` is defined. If you haven't already, create a file named `FirstComponent.js` and place the component definition inside it.

   ```jsx
   // FirstComponent.js

   import React from 'react';

   export const FirstComponent = () => {
     return (
       <div>
         <h1>My first component</h1>
       </div>
     );
   };
   ```

2. **Import the Component**: Now, you can import `FirstComponent` into your `App.js` file. Assuming both files are in the same directory, you can import it like this:

   ```jsx
   // App.js

   import React from 'react';
   import { FirstComponent } from './FirstComponent';

   const App = () => {
     return (
       <div>
         <FirstComponent />
       </div>
     );
   };

   export default App;
   ```

   Here, `import { FirstComponent } from './FirstComponent';` imports the `FirstComponent` from the `FirstComponent.js` file. Make sure to use the correct file path if `FirstComponent.js` is in a different directory.

3. **Use the Component**: Once imported, you can use the `FirstComponent` within the `App` component just like any other JSX element. In the example above, `<FirstComponent />` is used within the `App` component's JSX return.

That's it! Now your `App` component can use the `FirstComponent` as part of its rendering. Remember to follow the correct file paths and import/export syntax when working with React components.