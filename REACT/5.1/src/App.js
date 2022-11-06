import React from "react";
import "./App.css";
import Button from "./Button";

const Style = {
  fontWeight: 'bold',
}

function App() {
  return (
    <div>
      
      <Button title="important" font={Style}></Button>
      <Button title="not important"></Button>
    </div>
  );
}

export default App;
