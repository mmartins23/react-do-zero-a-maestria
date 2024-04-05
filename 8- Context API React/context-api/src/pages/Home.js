import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

export const Home = () => {
  const {counter} = useContext(CounterContext);
  return (
    <div>
      <h1>Home</h1>
      <p>Value of counter: {counter}</p>
      {/* 3- changing context value */}
      <ChangeCounter/>
    </div>
  )
}
