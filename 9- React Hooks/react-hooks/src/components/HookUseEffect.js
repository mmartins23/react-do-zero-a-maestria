import { useEffect, useState } from "react"

const HookUseEffect = () => {

    const [number, setNumber] = useState(1);
    const [anotherNumber, setAnotherNumber] = useState(1);


    //1- useEffect without dependencies
    useEffect(() => {
        console.log("useEffect has been activated!")
    })

    const updateNumber = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    //2- useEffect with dependencies
    useEffect(() => {
        console.log("This useEffect will be run only once!")
    },[])

     //3- useEffect with values in the array dependencies
     useEffect(() => {
        console.log("This useEffect will only run when luckyNumber is modified");
    },[anotherNumber])

    //4- useEffect CleanUp 
    useEffect(() => {
        const timer = setTimeout(() => {
          console.log("After 2 secs, this message will appear");

          setAnotherNumber(anotherNumber+1);
        }, 2000)

        return () => {
            clearTimeout(timer);
            console.log('Cleaning Up...')

        };
    }, [anotherNumber])

    return (
        <div>
            <h1>useEffect</h1>
            <p>Number: {number}</p>
            <button onClick={updateNumber}>Increase Number</button>
            <p>Lucky Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber+1)}>Increase number</button>
        </div>
    )
}

export default HookUseEffect;