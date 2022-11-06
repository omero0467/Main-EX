import React from 'react'
import Child from './Child'

const kids= [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
    ]

function Mother({children}) {
    // children.map((child,i)=>{
    //     return <Child kids={kids[i]}></Child>
    // })

    const childrenArr= kids.map((kid)=>{
        return <Child color={kid.color} name={kid.name}></Child>
    }) 
  return (
    <div className='Mother'>
        <h1>A Tale Of Five Balloons</h1>
        {childrenArr}
    </div>
  )
}

export default Mother