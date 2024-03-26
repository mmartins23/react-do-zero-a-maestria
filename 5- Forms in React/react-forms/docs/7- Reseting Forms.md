# Reseting Forms

Resetting a form in React involves clearing the input fields and resetting the form's state to its initial state. This can be achieved by setting the state variables to their initial values or clearing them altogether. Here's an explanation with a code example:

```jsx
// MyForm.js
import React, { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {
    // 3- Data Management
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    // Event handler for name input
    const handleName = (e) => {
        setName(e.target.value);
    }

    // Event handler for form submission
    const handleForm = (e) => {
        e.preventDefault();
        console.log('Sending the form');
        console.log(name, email);

        // Reset form
        setName(""); // Clearing name input
        setEmail(""); // Clearing email input
    }

    return (
        <form onSubmit={handleForm}>
            {/* Creating Forms */}
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Insert your name" 
                    onChange={handleName} 
                    value={name} 
                />
            </div>

            {/* Label involving input */}
            <label>
                <span>Email:</span>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Insert your email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                />
            </label>

            {/* Submit Button */}
            <input type="submit" value="Send"/>
        </form>
    );
}

export default MyForm;
```

### Explanation:

- **Resetting Form**: After handling form submission (`handleForm`), the form data is logged, and then the state variables (`name` and `email`) are reset to their initial values or cleared altogether.

- **Clearing State Variables**: In the example, `setName("")` and `setEmail("")` are called to clear the state variables, effectively resetting the input fields to their initial empty state.

- **Form Submission**: The form submission event is prevented from the default behavior (`e.preventDefault()`) to handle form submission programmatically and perform additional actions, such as resetting the form and sending data to the server.

Resetting the form state after submission ensures that the input fields are cleared, allowing the user to enter new data for the next submission. This improves user experience and prevents unintended data submission.