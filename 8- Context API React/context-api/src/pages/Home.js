// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

// 4- Refactoring with hooks
import { useCounterContext } from "../hooks/useCounterContext";

export const Home = () => {
  const {counter} = useCounterContext();
  return (
    <div>
      <h1>Home</h1>
      <p>Value of counter: {counter}</p>
      {/* 3- changing context value */}
      <ChangeCounter/>
    </div>
  )
}
