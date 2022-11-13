import { React, useEffect, useState } from "react";
import Spinner from "./Components/Spinner.jsx";

function App() {
  const [timer, setTimer] = useState(false);
  // const spinnersComponents = [Spinner, Spinner2 ]

  useEffect(() => {
    console.log("start");
    setTimer(true);
    setTimeout(() => {
      console.log("end");
      setTimer(false);
    }, 4000);
  }, []);

  return <div>{timer && <Spinner />}</div>;
}

export default App;
