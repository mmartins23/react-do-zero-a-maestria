import { useState } from "react"

const HookUseState = () => {
    // 1- useState
    let username = "John";
    const [name, setName] = useState("Ash");

    const updateNames = () => {
        username = "John Doe";

        setName("Ash Ketchum");
    }

    // 2- useState and inputs
    const [number, setNumber] = useState(5);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Sending data to API
        console.log(number);
    }

  return (
    <div>
        {/* 1-useState */}
        <h1>useState</h1>
        <p>Variable: {username}</p>
        <p>useState: {name}</p>
        <button onClick={updateNames}>Update Names</button>
        <p>What is your favourite number?</p>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
        <button onClick={handleSubmit}>Send</button>
        <p>Your favourite number is: {number}</p>
    </div>
  )
}

export default HookUseState