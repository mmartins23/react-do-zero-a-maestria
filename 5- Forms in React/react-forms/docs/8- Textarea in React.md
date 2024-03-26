# Textarea in React

In React, `<textarea>` elements are used to create multi-line text input fields, allowing users to input larger amounts of text. Here's an explanation with a code example:

```jsx
// MyForm.js
import React, { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {
    // State variables for form data
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    // Event handler for name input
    const handleName = (e) => {
        setName(e.target.value);
    }

    // Event handler for form submission
    const handleForm = (e) => {
        e.preventDefault();
        console.log('Sending the form');
        console.log(name, email, bio, role);

        // Reset form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    return (
        <form onSubmit={handleForm}>
            {/* Creating Forms */}
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Insert your name" onChange={handleName} value={name} />
            </div>

            {/* Label involving input */}
            <label>
                <span>Email:</span>
                <input type="email" name="email" placeholder="Insert your email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>

            {/* Textarea */}
            <label>
                <span>Bio:</span>
                {/* Textarea input */}
                <textarea 
                    name="bio" 
                    value={bio} 
                    placeholder="User Description" 
                    onChange={(e) => setBio(e.target.value)} 
                />
            </label>

            {/* Select */}
            <label>
                <span>Role:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>

            {/* Submit Button */}
            <input type="submit" value="Send" />
        </form>
    );
}

export default MyForm;
```

### Explanation:

- **Textarea Element**: The `<textarea>` element is used to create a multi-line text input field. It has an opening and closing tag, and any text entered between these tags becomes the default value of the textarea.

- **Controlled Textarea**: Similar to other form elements, the value of the `<textarea>` element is controlled by React's state. The `value` attribute of the `<textarea>` element is bound to the `bio` state variable, and changes to the textarea value are handled by the `setBio` function.

- **Textarea Event Handler**: An `onChange` event handler is added to the textarea to capture changes to the textarea value. When the user types or deletes text in the textarea, the `setBio` function is called to update the `bio` state variable with the new value.

Using `<textarea>` elements allows users to input longer text entries, such as descriptions or comments, providing a more versatile form input option in React applications.