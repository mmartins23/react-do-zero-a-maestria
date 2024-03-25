import { useState } from 'react';

const ManageData = () => {
    const [number, setNumber] = useState(1);

    return (
        <>
            <p>Value: {number}</p>
            <button onClick={() => setNumber(+10)}>Increase value by 10</button>
            <button onClick={() => setNumber(-10)}>Decrease value by 10</button>
        </>)
}

export default ManageData;