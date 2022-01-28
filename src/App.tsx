import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { useApp } from "./context/AppContext";
import Routes from "./routes";

import { getLocaltoken } from "./utils/security";

function App() {
  const { state, dispatch } = useApp();
  console.log(state);
  React.useEffect(() => {
    const token = getLocaltoken() || "";
    dispatch({ type: "SET_TOKEN", payload: token });
  }, []);

  return (
    <div className="App">
      <Routes userToken={state.userToken} />
    </div>
  );
}

export default App;
