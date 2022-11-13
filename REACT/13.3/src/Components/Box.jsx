import { React, useEffect, useState } from "react";
import "./Box.css";

const colors = ["red", "green", "yellow", "black", "blue", "purple"];
function Box() {
  const [changeColor, setChangeColor] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter <= 5) {
      setTimeout(() => {
        setChangeColor(colors[counter]);
        setCounter((prev) => ++prev);
      }, 500);
    }
  }, [counter]);

  return (
    <div
      className={`myBox ${counter > 5 && "circle"}`}
      style={{ backgroundColor: changeColor }}
    >
      {counter}
    </div>
  );
}

export default Box;
