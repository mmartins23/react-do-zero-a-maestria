import { useEffect, useState } from "react"

const HookUseEffect = () => {

    const [number, setNumber] = useState(1);

    //1- useEffect without depedencies
    useEffect(() => {
        console.log("useEffect has been activated!")
    })

    const updateNumber = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    return (
        <div>
            <h1>useEffect</h1>
            <p>Number: {number}</p>
            <button onClick={updateNumber}>Increase Number</button>
        </div>
    )
}

export default HookUseEffect