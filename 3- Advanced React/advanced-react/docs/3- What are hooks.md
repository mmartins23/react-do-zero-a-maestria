# What are hooks ?

In React, hooks are functions that enable functional components to use state, lifecycle methods, and other React features that were previously only available in class components. They allow you to "hook into" React state and lifecycle features from functional components without the need for class syntax. Introduced in React 16.8, hooks provide a more expressive and flexible way to work with React components. They offer a simpler and more streamlined approach to managing state and side effects, promoting code reuse and composability.

Hooks come in two main categories:

1. **Built-in Hooks**: React provides a set of built-in hooks that cover common use cases. Some of the most commonly used built-in hooks include:
   - `useState`: Allows functional components to have local state.
   - `useEffect`: Allows functional components to perform side effects, such as data fetching, DOM manipulation, or subscriptions.
   - `useContext`: Allows functional components to consume context provided by a `Context.Provider` component.
   - `useReducer`: Provides an alternative to `useState` for managing complex state logic.
   - `useRef`: Allows functional components to access and interact with DOM elements or other React elements.

2. **Custom Hooks**: Developers can create custom hooks to encapsulate reusable logic. Custom hooks are functions that use one or more built-in hooks internally and can be shared across multiple components. By following the naming convention of prefixing custom hooks with `use`, React recognizes them as hooks.

Overall, hooks provide a more modern and flexible way to work with React components, enabling developers to write cleaner, more maintainable, and more expressive code. They encourage the use of functional components and promote composability and code reuse.