import React from 'react'
import { useContext } from 'react'
import { colorContext } from '../context/MoodContext'

function About() {
    const {currentStyle} = useContext(colorContext)

  return (
    <div className='page' style={{background: currentStyle.background, color: currentStyle.bordercolor}}>This is About</div>
  )
}

export default About