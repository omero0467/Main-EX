import React from 'react'
import { useContext } from 'react'
import { colorContext } from '../context/MoodContext'

function Home() {
    const {currentStyle} = useContext(colorContext)

  return (
    <div className='page' style={{background: currentStyle.background, color: currentStyle.bordercolor}}>This is Home</div>
  )
}

export default Home