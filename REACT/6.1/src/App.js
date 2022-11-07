import React, {useState} from 'react'
import './App.css';

function App() {

let [counter, setCounter] = useState(0)

function clickHandle() {
  setCounter(counter++)
}
  return (
    <div className='App'>
    <button onClick={clickHandle}>increment</button>
    <span>{counter}</span>
    </div>
  )
}

export default App