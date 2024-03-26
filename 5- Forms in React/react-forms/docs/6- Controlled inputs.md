# Controlled inputs

In React, controlled inputs are input elements whose value is controlled by React's state. This means that the value of the input element is controlled by the component's state, and any changes to the input value are handled by updating the state. Here's an explanation with a code example:

```jsx
// App.js
import React from 'react';
import './App.css';
import MyForm from './components/MyForm'

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "John", email: "john@example.com"}}/>
    </div>
  );
}

export default App;
```

```jsx
// MyForm.js
import React, { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {
    // 3- Data Management (Initializing state with user data)
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    // Event handler for name input
    const handleName = (e) => {
        setName(e.target.value); // Update name state with input value
    }

    // Event handler for form submission
    const handleForm = (e) => {
        e.preventDefault();
        console.log('Sending the form');
        console.log(name, email);
    }

    return (
        <form onSubmit={handleForm}>
            {/* 1- Creating Forms */}
            <div>
                <label htmlFor="name">Name:</label>
                {/* 6- Controlled Input */}
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Insert your name" 
                    onChange={handleName} 
                    value={name} // Controlled input value bound to state
                />
            </div>

            {/* 2- Label involving input */}
            <label>
                <span>Email:</span>
                {/* 4- Inline state change */}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Insert your email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} // Controlled input value bound to state
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

- **Controlled Inputs**: In the code example, both input fields (`name` and `email`) are controlled inputs. Their values are controlled by React's state (`name` and `email` state variables).
  
- **Data Management**: The component initializes the state variables `name` and `email` with the user data passed as props (`user` object). If the `user` object is provided, the component sets the initial state values based on the user's name and email. 

- **Event Handling**: The component defines event handlers (`handleName` and `handleForm`) to handle changes to the input fields and form submission, respectively. 

- **Controlled Input Value**: The value of each input field is bound to its corresponding state variable (`value={name}` and `value={email}`), making them controlled inputs. Any changes to the input fields are reflected in the component's state, and vice versa.

Using controlled inputs ensures that the component always reflects the current state of the input values, making it easy to manage form data and implement features like validation and form submission.