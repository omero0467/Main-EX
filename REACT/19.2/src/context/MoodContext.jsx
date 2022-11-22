import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const colorContext =createContext()

function MoodContext({children}) {
  const [mode, setMode] = useState(true)
  const lightStyle ={background: "#D3D3D3", navbackground: "#A9A9A9", btnbackgorund: "#dbdbdb", bordercolor:"#000000",textcolor:"#fff"}
  const darkStyle ={background: "#272727", navbackground: "#000", btnbackgorund: "#464646", bordercolor:"#FFA503",textcolor:"#FFA503"}
  
  function handleClick(){
      setMode((prev)=>!prev)
      if(mode===true){
        dispatch({type: 'dark_mode', payload:darkStyle })
      } else {
        dispatch({type: 'light_mode', payload:lightStyle })
      }
  }

  const [currentStyle, dispatch] = useReducer(reducer, lightStyle)

  function reducer(state,action){
    switch (action.type) {
      case 'light_mode':
        return {...action.payload}
      case 'dark_mode':
        return {...action.payload}
      default:
        return state
    }
  }
  
  
  return (
    <colorContext.Provider value={{
      handleClick,
      currentStyle,
    }}>
      {children}
    </colorContext.Provider>
  )
}

export default MoodContext