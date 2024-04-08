import { useState } from "react"

const HookUseState = () => {
    let username = "John";
    const [name, setName] = useState("Ash");

    const updateNames = () => {
        username = "John Doe";

        setName("Ash Ketchum");
    }

  return (
    <div>
        {/* 1-useState */}
        <h1>useState</h1>
        <p>Variable: {username}</p>
        <p>useState: {name}</p>
        <button onClick={updateNames}>Update Names</button>
    </div>
  )
}

export default HookUseState