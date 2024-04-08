# useState and Inputs

In React, controlled inputs are input elements whose value is controlled by React state. This means that the value displayed in the input is derived from state and updated through event handlers. Here's how the controlled inputs work in the provided code example:

1. **useState for Text Input**:
   ```javascript
   const [number, setNumber] = useState(5);
   ```
   Here, `number` is a state variable initialized to `5` using `useState`. This state variable represents the value of the input field.

2. **Handling Input Change**:
   ```javascript
   <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
   ```
   The `value` attribute of the input element is set to the `number` state variable. This makes the input a controlled input. When the user types in the input field, the `onChange` event handler updates the `number` state with the new value entered by the user.

3. **Handling Form Submission**:
   ```javascript
   const handleSubmit = (e) => {
       e.preventDefault();
       
       // Sending data to API
       console.log(number);
   }
   ```
   This function is called when the user clicks the "Send" button. It prevents the default form submission behavior and logs the current value of `number` to the console. This showcases how the current value of the controlled input is accessible for further processing, such as sending it to an API.

4. **Rendering the Current Value**:
   ```javascript
   <p>Your favourite number is: {number}</p>
   ```
   This paragraph renders the current value of the `number` state variable. As the user types in the input field or when it's updated programmatically, React re-renders this paragraph to display the updated value.

In summary, controlled inputs in React, using `useState`, allow for seamless synchronization between the value of the input elements and React state, enabling interactive and dynamic user interfaces.