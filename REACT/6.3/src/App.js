import React, { useState } from 'react'
import './App.css';
function App() {
  
  let [num, setNum] = useState(0);
  const increment = () => {
    if (num < 10) {
      setNum(num + 1);
    }
  };
  const decrement = () => {
    if (num > -10 ) {
      setNum(num - 1);
    }
  }
  return (
      <div className='App'>
            <button class="btn"onClick={decrement}>-</button>
          <div style={{color:num>0?'green':num===0?'black':"red"}}>
            {num}
          </div>
            <button class="btn" onClick={increment}>+</button>
    </div>
  );
}

export default App

