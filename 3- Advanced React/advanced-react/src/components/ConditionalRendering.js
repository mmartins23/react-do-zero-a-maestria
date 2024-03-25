import { useState } from "react"

const ConditionalRendering = () => {

    const [x] = useState(true);

    const [name] = useState('John');
    return (
        <div>
            <h1>Conditional Rendering</h1>
            {x && <p>Only show x if the value is true</p>}
            {!x && <p>Only show x if the value is false</p>}
            <h1>Ternary Operator</h1>
            {name === 'John' ? (
                <div><p>Correct, the name is {name}</p></div>
            ) : (<div>
                <p>Name not found</p>
            </div>)}
        </div>
    )
}

export default ConditionalRendering