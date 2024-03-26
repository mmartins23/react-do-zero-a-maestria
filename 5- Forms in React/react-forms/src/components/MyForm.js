import './MyForm.css'
import { useState } from 'react';

const MyForm = ({ user }) => {
    // 6- controlled inputs
    // 3- data management
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState(user ? user.bio : "");

    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    }

    // 5- Sending Form
    const handleForm = (e) => {
        e.preventDefault();
        console.log('Sending the form');
        console.log(name, email, bio, role);

        // 7- Reset form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    return (
        <form onSubmit={handleForm}>
            {/* 1- Creating Forms */}
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Insert your name" onChange={handleName} value={name} />
            </div>

            {/* 2- Label involving input */}
            <label>
                <span>Email:</span>
                {/* 4- Inline state change */}
                <input type="email" name="email" placeholder="Insert your email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            {/* 8- Textarea */}
            <label>
                <span>Bio:</span>
                <textarea type='text' name='bio' value={bio} placeholder='User Description' onChange={(e) => setBio(e.target.value)} />
            </label>

            {/* 9- Select  */}
            <label>
                <span>Role:</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Send" />
        </form>)
}

export default MyForm