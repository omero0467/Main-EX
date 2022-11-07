import React, {useState} from 'react'
import './App.css';
import Box from './comps/Box';

function App() {
let [toggle, setToggle] = useState(true)


function clickHandler() {
  setToggle((prevState)=>{
   return !prevState
  })
}


  return (
    <div className='App'>
      <div className="wrapper">
        <button onClick={clickHandler}>show/hide</button>
        {toggle&&<Box></Box>}
        <div className="box"></div>
      </div>
    </div>
  )
}

export default App