import React from "react";

function Box({ myClass }) {
    const styling ={backgroundColor: "yellow",
    height:'80px',
width:'80px',
display:{myClass} }
  return <div style={styling}>
    Box</div>;
}

export default Box;
