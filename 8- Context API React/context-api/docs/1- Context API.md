# Context API

The Context API in React is a way to share data between components without having to pass props manually through each level of the component tree. It allows you to create a global state that can be accessed by any component within a React application.

Here's an explanation of how the Context API works along with code examples:

### Creating a Context

First, you need to create a context using the `createContext()` function from React. This function returns an object with two components: `Provider` and `Consumer`.

```jsx
// MyContext.js

import React from 'react';

const MyContext = React.createContext();

export default MyContext;
```

### Providing Data with a Provider

You need to wrap the components that need access to the context with a `Provider` component. This provider component accepts a `value` prop which contains the data you want to share.

```jsx
// App.js

import React from 'react';
import MyContext from './MyContext';

function App() {
  const sharedData = {
    message: 'Hello from Context!',
    // other shared data
  };

  return (
    <MyContext.Provider value={sharedData}>
      {/* Components that need access to the context */}
      <ChildComponent />
    </MyContext.Provider>
  );
}

export default App;
```

### Consuming Context Data

Components that need access to the shared data can use the `Consumer` component or the `useContext` hook to consume the context data.

#### Using Consumer

```jsx
// ChildComponent.js

import React from 'react';
import MyContext from './MyContext';

function ChildComponent() {
  return (
    <MyContext.Consumer>
      {value => (
        <div>
          <h1>{value.message}</h1>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default ChildComponent;
```

#### Using useContext Hook (React v16.8+)

```jsx
// ChildComponent.js

import React, { useContext } from 'react';
import MyContext from './MyContext';

function ChildComponent() {
  const value = useContext(MyContext);

  return (
    <div>
      <h1>{value.message}</h1>
    </div>
  );
}

export default ChildComponent;
```

### Updating Context Data

To update context data, you need to modify the state within the provider component and then provide the updated data using the `value` prop.

```jsx
// App.js

import React, { useState } from 'react';
import MyContext from './MyContext';

function App() {
  const [sharedData, setSharedData] = useState({
    message: 'Hello from Context!',
    // other shared data
  });

  const updateContextData = () => {
    setSharedData(prevData => ({
      ...prevData,
      message: 'Updated message!',
    }));
  };

  return (
    <MyContext.Provider value={{ ...sharedData, updateContextData }}>
      <ChildComponent />
      <button onClick={updateContextData}>Update Context Data</button>
    </MyContext.Provider>
  );
}

export default App;
```

### Summary

- The Context API in React provides a way to share data across the component tree without having to pass props down manually.
- It consists of a provider component and a consumer component.
- The `useContext` hook provides a convenient way to consume context data in functional components.
- Context data can be updated by modifying the state within the provider component and then providing the updated data using the `value` prop.