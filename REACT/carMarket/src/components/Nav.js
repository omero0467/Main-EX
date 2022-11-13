import React from 'react'
import objFuncs from '../utils/carObj.utils'
import {carMarket} from '../carObj'
import NavButton from './NavButton'
import './Nav.css'

function Nav({setCatHeading,myRef}) {


function createButtons (){
    const myArr=objFuncs.getObjElementsName(carMarket)
    return myArr.map((button)=>{
        // button=objFuncs.filterUnderScores(button)
        return <NavButton myRef={myRef} setCatHeading={setCatHeading} name={button}/>
    })
}

  return (
    <div className='NavBar'>
        <h1>Car Market</h1>
        <ul>{createButtons()}</ul>
    </div>
  )
}

export default Nav