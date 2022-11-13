import React from 'react'
import objFuncs from '../utils/carObj.utils'


function NavButton({myRef,name,setCatHeading}) {

  function clickHandler(e){
    setCatHeading((prev)=>{
    return prev = name
    })
}

  return (
    <button onClick={clickHandler} className='NavButton'>
        {objFuncs.filterUnderScores(name)}
    </button>
  )
}

export default NavButton