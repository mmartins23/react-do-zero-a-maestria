# useRef

The `useRef` hook in React allows you to create a mutable reference object that persists across renders. This reference object can be used to store values that persist between renders, similar to instance variables in class components. Additionally, `useRef` can be used to access and interact with DOM elements directly.

**Code Example:**

In the provided code example, the `useRef` hook is used to create a reference object named `numberRef`. Let's break down the usage and behavior of `useRef` in this example:

1. **Initialization of useRef:**
   ```javascript
   const numberRef = useRef(0);
   ```
   Here, `numberRef` is initialized with an initial value of `0`. This value can be accessed and modified throughout the component's lifecycle.

2. **Rendering Counter Values:**
   ```javascript
   <p>The component was rendered: {numberRef.current} times</p>
   ```
   The current value of `numberRef` is accessed using `numberRef.current`. This value is displayed in the UI to indicate how many times the component has been rendered.

3. **Updating useRef Value:**
   ```javascript
   useEffect(() => {
     numberRef.current = numberRef.current + 1;
   });
   ```
   Inside the `useEffect` hook, the `numberRef.current` value is incremented by `1` each time the component renders. Since `numberRef` persists across renders, its value is updated and retained between renders.

4. **Interacting with State:**
   ```javascript
   const [counter, setCounter] = useState(0);
   const [counterB, setCounterB] = useState(0);
   ```
   Two state variables `counter` and `counterB` are declared using the `useState` hook to keep track of two different counters in the component.

5. **Updating State with Buttons:**
   ```javascript
   <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Counter A</button>
   <button onClick={() => setCounterB(prevCounter => prevCounter + 1)}>Counter B</button>
   ```
   Two buttons are provided to increment the `counter` and `counterB` state values respectively when clicked. These buttons allow interaction with the component to demonstrate the re-rendering behavior.

***

**Step 2: useRef and DOM Interaction**

In this step, we utilize the `useRef` hook to create a reference to a DOM element, specifically an input element. This allows us to access and interact with the input element directly from within our functional component.

1. **Initializing a useRef for DOM Interaction:**
   ```javascript
   const inputRef = useRef();
   ```
   Here, we create a new ref called `inputRef` using the `useRef()` hook. This ref will be used to reference an input element in the DOM.

2. **Handling Form Submission:**
   ```javascript
   const handleSubmit = (e) => {
     e.preventDefault();
     setText("");
     inputRef.current.focus();
   }
   ```
   When the form is submitted, the `handleSubmit` function is called. It prevents the default form submission behavior (`e.preventDefault()`), clears the input field (`setText("")`), and then focuses on the input field using `inputRef.current.focus()`.

3. **Rendering Input Element with ref:**
   ```javascript
   <input
     type="text"
     value={text}
     ref={inputRef}
     onChange={(e) => setText(e.target.value)} />
   ```
   In the JSX, we render an input element with the `ref` attribute set to `inputRef`. By doing so, we associate the input element with the `inputRef`, allowing us to access and interact with it programmatically.


This approach is useful for scenarios where we need to perform imperative DOM operations, such as focusing an input element after a certain action (like form submission) or accessing other properties or methods of the DOM element directly from within our component logic.

**Summary:**

The `useRef` hook is used to create a mutable reference object that persists across renders. It is particularly useful for storing values that need to persist between renders or for accessing and interacting with DOM elements directly. In this example, `useRef` is used to track the number of times the component has rendered, demonstrating its persistence across renders.