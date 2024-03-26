import './MyComponent.css';

const MyComponent = () => {
    return (
        <div>
            <h1>CSS Component</h1>
            <p>This was styled via component CSS</p>
            <p className='my-comp-para'>This was styled via className</p>
            <p style={{ color: 'pink', backgroundColor: 'black' }}>This was styled via inline CSS</p>
        </div>
    )
}

export default MyComponent