import React from 'react'
import './App.css';
import colorimg from './color.jpeg'
import bnwimg from './bnw.jpeg'
import Photo from './Photo'

function App() {
const first = React.useRef()
  const [photo, setPhoto] = React.useState(colorimg)
  
  
  return (
    <div className='App'>
      <Photo ref={first} bnwimg={bnwimg}></Photo>
    </div>
  )
}

export default App