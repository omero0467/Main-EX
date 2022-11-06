import React from 'react'
import Balloons from './Balloons'

function Child({name,color}) {
  return (
    <div className='Child'>
      <h3>{name}</h3>
      <Balloons color={color} ></Balloons>
    </div>
  )
}

export default Child