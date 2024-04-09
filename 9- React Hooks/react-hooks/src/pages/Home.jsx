// hooks
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";

// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseEffectLayout from "../components/HookUseEffectLayout";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer/>
      <HookUseEffect/>
      <h2>useContext</h2>
      <p>Value of Context: {contextValue}</p>
      <hr />
      <HookUseRef/>
      <HookUseCallback/>
      <HookUseMemo/>
      <HookUseEffectLayout/>
    </div>
  );
};

export default Home;
