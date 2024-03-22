const Challenge = () => {
    const A = Math.ceil(Math.random() * 50);
    const B = Math.ceil(Math.random() * 50);
  return (
    <div>
        <p>A: {A}</p>
        <p>B: {B}</p>
        <p>Total: {A+B}</p>
    </div>
  )
}

export default Challenge;