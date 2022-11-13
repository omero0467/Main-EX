import React from "react";
import "./App.css";


function App() {
  const myRef = React.useRef("");
  React.useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <div className="App">
      <input type="text" ref={myRef} />
    </div>
  );
}

export default App;
