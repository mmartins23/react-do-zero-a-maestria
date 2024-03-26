# Sending Form

Sending a form in React involves capturing form submission events and handling the form data appropriately. Here's a step-by-step explanation with a code example:

```jsx
import React, { useState } from 'react';
import './MyForm.css';

const MyForm = () => {
    // 3- Data Management
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // 5- Sending Form
    const handleForm = (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)
        console.log('Sending the form');
        console.log('Name:', name);
        console.log('Email:', email);
        // Additional logic for form submission (e.g., sending data to server)
    };

    return (
        <form onSubmit={handleForm}>
            {/* 1- Creating Forms */}
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    placeholder="Insert your name" 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* 2- Label involving input */}
            <label>
                <span>Email:</span>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    placeholder="Insert your email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            {/* 6- Submit Button */}
            <input type="submit" value="Send" />
        </form>
    );
};

export default MyForm;
```

### Steps for Sending a Form in React:

1. **Creating Forms**:
   Define the form structure using HTML form elements such as `<form>`, `<input>`, and `<label>`.

2. **Label Involving Input**:
   Wrap the input fields with `<label>` elements to associate them with their labels for better accessibility and usability.

3. **Data Management**:
   Use React state (via the `useState` hook) to manage form data. Each form input should have a corresponding state variable, and an event handler (`onChange`) to update the state as the user inputs data.

4. **Inline State Change**:
   Optionally, use inline state change for simplicity. Inline state change allows you to update the state directly within the JSX without defining separate event handler functions.

5. **Sending Form**:
   Create a form submission event handler (`handleForm`) that is triggered when the form is submitted (`onSubmit`). Prevent the default form submission behavior using `e.preventDefault()` to handle form submission programmatically, such as logging data or sending it to the server.

6. **Submit Button**:
   Include a submit button (`<input type="submit">` or `<button type="submit">`) within the form to allow users to submit the form data.

### Summary:
Sending a form in React involves capturing form submission events, managing form data using React state, and handling the form submission logic. By following these steps, you can create interactive and responsive forms in your React applications.