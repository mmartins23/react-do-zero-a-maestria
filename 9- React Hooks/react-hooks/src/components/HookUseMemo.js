import { useState, useMemo, useEffect } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);

  //   error
  // const premiumNumbers = ["0", "100", "200"];

  // fixing it with useMemo
  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Premium numbers was altered!");
  }, [premiumNumbers]);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumber(e.target.value)} />
      {premiumNumbers.includes(number) ? <p>You guessed the correct number!</p> : ""}
      <hr />
    </div>
  );
};

export default HookUseMemo;