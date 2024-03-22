const Events = () => {

  const handleEvent = () => {
    alert('You have activated the event');
  }

  const renderSomething = (x) => {
    if (x) {
      return <p>You have a true props</p>
    } else {
      return <p>You have a false props</p>
    }
  }
  return (
    <>
      <button onClick={handleEvent}>Click here to activate event</button>
      <button onClick={() => alert('The second event has been activated')}>Functions in Events</button>
      {renderSomething(true)}
      {renderSomething(false)}
    </>
  )
}

export default Events