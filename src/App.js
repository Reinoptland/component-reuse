import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";

function App() {
  const [hide, setHide] = useState(false);

  function handleClick() {
    console.log("Clicked??");
    setHide(true);
  }
  return (
    <div className="App">
      <Alert variant="warning">Oops</Alert>
      <Alert
        className={hide ? "hide" : ""}
        variant="success"
        onClick={handleClick}
      >
        Yes
      </Alert>
      <Alert variant="danger">No</Alert>
    </div>
  );
}

export default App;
