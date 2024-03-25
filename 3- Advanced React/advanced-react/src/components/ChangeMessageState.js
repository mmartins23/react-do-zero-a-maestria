const ChangeMessageState = ({handleMessage}) => {
    const messages = ['Good Morning', 'Good Afternoon', 'Good Night']
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>Click 1</button>
        <button onClick={() => handleMessage(messages[1])}>Click 2</button>
        <button onClick={() => handleMessage(messages[2])}>Click 3</button>
    </div>
  )
}

export default ChangeMessageState