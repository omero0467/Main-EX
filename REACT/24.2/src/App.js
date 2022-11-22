import React from 'react'
import './App.css';
import useFetch from './Hooks/useFetch';


function Testfech() {
const {data,isLoading,error} = useFetch('https://api.chucknorris.io/jokes/random')

  return (
    <div className='App'>
      {isLoading && 'Loading'}
      <div>{data&&data.value}</div>
      {error&& error.message}{error&& console.log(error)}
    </div>
  )
}



function App() {
  return (
    <Testfech></Testfech>
  )
}

export default App