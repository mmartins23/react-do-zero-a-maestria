import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CounterContextProvider } from "./context/CounterContext";

ReactDOM.render(
  <React.StrictMode>
    {/* 2 - create provider */}
    <CounterContextProvider>
        <App />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

