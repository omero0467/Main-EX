import React from "react";

// link1,link2
function Button({ title, description, image,}) {
  return <div className="card">
    <img src ={image} alt="some" className="dogImage"></img>
    <h1>{title}</h1>
    <p>{description}</p>
    <button>explore</button>
    <button>share</button>
  </div>
}

export default Button;
