import React from 'react'
import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { colorContext } from '../context/MoodContext';

function Nav() {
    const {currentStyle,handleClick} = useContext(colorContext)

  return (
    <div className='Navbar' style={{background:currentStyle.navbackground,color: currentStyle.textcolor}}>
        <ul className='links'>
            <NavLink style={{color: currentStyle.bordercolor, textDecoration: "none", padding:"5px 10px"}} activeClassName='active' to={'/about'}>About</NavLink>
            <NavLink style={{color: currentStyle.bordercolor, textDecoration: "none", padding:"5px 10px"}} activeClassName='active' to={'/'}>Home</NavLink>
        </ul>

        <div onClick={handleClick} style={{borderColor:currentStyle.bordercolor, background:currentStyle.btnbackgorund}} className='mood_btn'>shift mood</div>
    </div>
  )
}

export default Nav