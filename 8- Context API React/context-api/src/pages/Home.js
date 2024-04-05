import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const Home = () => {
  const {counter} = useContext(CounterContext);
  return (
    <div>
      <h1>Home</h1>
      <p>Value of counter: {counter}</p>
    </div>
  )
}
