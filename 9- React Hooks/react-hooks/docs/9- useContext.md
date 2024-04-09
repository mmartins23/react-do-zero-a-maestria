# useContext

The `useContext` hook in React allows functional components to consume context values that have been provided higher up in the component tree. Let's break down how `useContext` is used in the given code example:

1. **Setting Up the Context**:
   The context is set up using the `createContext` function from React. In this case, the context is created in a file named `HookUseContext.js`:

   ```javascript
   import { createContext } from "react";

   export const SomeContext = createContext();

   export const HookUseContext = ({ children }) => {
     const contextValue = "testing context";

     return (
       <SomeContext.Provider value={{ contextValue }}>
         {children}
       </SomeContext.Provider>
     );
   };
   ```

   Here, the `SomeContext` is created using `createContext()`, and a provider component `HookUseContext` is defined to wrap its children. The `value` prop of the provider determines the value that will be shared with consuming components.

2. **Consuming the Context**:
   In the `Home` component, the `useContext` hook is imported from React, and the `SomeContext` created earlier is imported from the `HookUseContext` file:

   ```javascript
   import { useContext } from "react";
   import { SomeContext } from "../components/HookUseContext";
   ```

   Then, inside the `Home` component, the `useContext` hook is used to access the context value:

   ```javascript
   const { contextValue } = useContext(SomeContext);
   ```

   This line retrieves the `contextValue` from the `SomeContext` and makes it available for use within the `Home` component.

3. **Rendering the Context Value**:
   Finally, the retrieved context value is rendered within the `Home` component:

   ```javascript
   <h2>useContext</h2>
   <p>Value of Context: {contextValue}</p>
   ```

   This code displays the value of the context in the rendered output.

By following these steps, the `useContext` hook is used to consume context values provided by the `HookUseContext` component and make them available for use within the `Home` component.

***

In the `App.js` file, the `HookUseContext` component is wrapped around the entire application using JSX syntax. This allows the context provided by `HookUseContext` to be available to all components rendered within the `App` component. Let's break down how `HookUseContext` is used in `App.js`:

1. **Importing the HookUseContext Component**:
   The `HookUseContext` component is imported at the top of the file:

   ```javascript
   import { HookUseContext } from './components/HookUseContext';
   ```

2. **Wrapping the Application with HookUseContext**:
   Inside the `App` component, the `HookUseContext` component is rendered, wrapping the entire application:

   ```javascript
   function App() {
     return (
       <div className="App">
         <HookUseContext>
           {/* Content of the application */}
         </HookUseContext>
       </div>
     );
   }
   ```

   By wrapping the entire application with `HookUseContext`, all child components of `App` have access to the context provided by `HookUseContext`.

3. **Router Integration**:
   Additionally, the `Router` component from `react-router-dom` is used to set up routing for the application. The `<Router>` component wraps the application content, allowing navigation between different pages:

   ```javascript
   <Router>
     {/* Navigation links and route configuration */}
   </Router>
   ```

   Inside the `Router`, navigation links and route configurations are defined using the `Link` and `Route` components provided by `react-router-dom`.

In summary, the `HookUseContext` component is used in `App.js` to provide context to all components rendered within the `App` component, allowing them to consume the context values using the `useContext` hook. Additionally, routing functionality is set up using the `Router` component from `react-router-dom`.