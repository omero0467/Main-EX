import React from 'react'
import './App.css';
import CategoryHeading from './components/CategoryHeading';
import Nav from './components/Nav';
import objFuncs from './utils/carObj.utils';

function App() {
  
    React.useEffect(()=>{
    console.log(myRef)
    },[CategoryHeading])

  const [myRef, setMyRef] = React.useState('')
  function getRef (someRef){
    return setMyRef((prev)=>{
      return prev=someRef
    })
  }
  
  const [catHeading, setCatHeading] = React.useState('')
  console.log(myRef)
  return (
    <div className='App'>
      <Nav myRef={myRef} setCatHeading={setCatHeading}></Nav>
      <CategoryHeading text={catHeading?objFuncs.filterUnderScores(catHeading):'Welcome to the car market'} getRef={getRef} catHeading={catHeading} setCatHeading={setCatHeading}/>
    </div>
  )
}

export default App