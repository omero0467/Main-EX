import React,{useState} from 'react'
import './App.css';



const colors = ["blue","red","yellow"];

const clickHandler = (color,func) =>{
  func((prev)=>{
      return prev=color
  })}

// FATHER ---------------
function App() {
  const [colorName, setColorName] = useState('someColor');
  
  
  function coloration (arr) {
    return arr.map((colorElement)=>{
      return <ChildButton func={setColorName} color={colorElement}/>
    })
  }
  function ChildButton(props){
    return (<button className={props.color} onClick={()=>{clickHandler(props.color,props.func)}}>{props.color}</button>)
  }
  
  return (
    <div className='App'>
    {coloration(colors)}
    <div >The selected color is {colorName}</div>
    </div>
  )
}

export default App;
