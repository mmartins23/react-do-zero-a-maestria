import { useLayoutEffect, useEffect, useState } from "react";

const HookUseEffectLayout = () => {
  const [name, setName] = useState("Name 0");

  useEffect(() => {
    console.log("2");
    setName("Name 2!");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setName("Name 1");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>useEffectLayout</h2>
      <p>Name: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseEffectLayout;