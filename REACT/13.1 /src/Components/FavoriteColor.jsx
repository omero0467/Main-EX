import { React, useEffect, useState } from "react";

function FavoriteColor({ color }) {
  const [isFavorite, setIsFavorite] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      setIsFavorite("green");
    }, 1000);
  }, []);

  return (
    <div>
      <h1>my favorite color is {isFavorite}</h1>
      {/* <button onClick={changeColor}></button> */}
    </div>
  );
}

export default FavoriteColor;
