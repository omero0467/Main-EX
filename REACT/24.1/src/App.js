import React from 'react'
import './App.css';
import useCounter from './Hooks/useCounter';

function Test1(params) {
  const {counter, addOne, minusOne}   = useCounter(0)
return (<div>
  <button onClick={addOne}>add</button>
  <span>{counter}</span>
  <button onClick={minusOne}>minus</button>
</div>)
}
function Test2(params) {
  const {counter, double, divide}   = useCounter(2)
return (<div>
  <button onClick={double}>double</button>
  <span>{counter}</span>
  <button onClick={divide}>divide</button>
</div>)
  
}



function App() {
  return (
    <div className='App'>
      <Test1 />
      <Test2 />
    </div>
  )
}

export default App