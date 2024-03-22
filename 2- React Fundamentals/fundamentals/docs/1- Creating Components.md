# Creating Components
Creating components in React involves a few straightforward steps. Here's a breakdown of the process using your example:

1. **Import React**: If you haven't already, you need to import the React library at the top of your file. React is a prerequisite for using JSX syntax.

   ```jsx
   import React from 'react';
   ```

2. **Define the Component**: You define your component using a function or a class. In this case, you're using a functional component. Functional components are simpler and more concise.

   ```jsx
   export const FirstComponent = () => {
     return (
       <div>
         <h1>My first component</h1>
       </div>
     );
   };
   ```

   In this example, you've defined a functional component named `FirstComponent`. It returns JSX, which describes what the component should render.

3. **Export the Component (Optional)**: If you want to use this component in other files, you'll need to export it. This makes it accessible outside of this file.

   ```jsx
   export const FirstComponent = () => {
     // Component code here
   };
   ```

4. **Use the Component**: Now that you've defined and exported your component, you can import it into other files and use it like any other HTML element.

   ```jsx
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

   In this example, `FirstComponent` is imported and used within another component named `App`. When `App` is rendered, it will include `FirstComponent`.

That's it! You've successfully created a basic React component, exported it for use in other files, and demonstrated how to use it within another component.