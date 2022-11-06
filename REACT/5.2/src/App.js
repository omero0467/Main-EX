import React from "react";
import "./App.css";
import Button from "./Button";
import image1 from'./images/1.JPG'
import image2 from'./images/2.JPG'
import image3 from'./images/3.JPG'
// const Style = {
//   fontWeight: 'bold',
// }

// const link1 = 'share'
// const link2 = 'explore'

function App() {
  return (
    <div className="flex-center">
      
      <Button title="Naknik" description='Long dog' image={image3}></Button>
    <Button title="Husky" description='warm dog' image={image2}></Button>
  <Button title="Golden" description = 'friendly' image={image1}></Button>
    </div>
  );
}

export default App;
