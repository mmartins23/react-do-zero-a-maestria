import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  // 1- useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  })

  // 2- useRef and dom
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>useRef</h1>
      {/* 1-useRef */}
      <p>The component was rendered: {numberRef.current} times</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Counter A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(prevCounter => prevCounter + 1)}>Counter B</button>
      {/* 2- useRef and dom */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          ref={inputRef}
          onChange={(e) => setText(e.target.value)} />
        <button>Send</button>
      </form>
      <hr />
    </div>
  )
}

export default HookUseRef