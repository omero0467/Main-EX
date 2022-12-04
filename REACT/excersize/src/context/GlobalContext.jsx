import React, { useReducer, useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import axios from "axios";
import dataFile from '../assets/data.json'


export const MainContext = createContext()








function GlobalContext({children}) {

    const [dataFromJSON, setData] = useState([])
    useEffect(()=>{
        function getData (){
            const data = JSON.parse(JSON.stringify(dataFile))
            console.log(data);
            setData(data)
            return data
        }
        setTimeout(()=>{
            getData()
        },3000)
    },[])


    const [toRender, dispatch] = useReducer(renderListBy, dataFromJSON)

    function renderListBy (state,action) {
      console.log(dataFromJSON);
      if(state===[]){
        
      }
      switch (action.type) {
        case 'ascending':
          return sortAtoB(
            state.map((item)=>item.name)
            )
        case 'descending':
          return sortBtoA(
            state.map((item)=>item.name)
          );
      
        default:
          return state
      }      
    }
    
    
    
    function sortAtoB(arr){
        return arr&&arr.sort()
    }

    function sortBtoA(arr){
        return arr&&arr.sort((a,b)=>{return b>a})
    }


    

  return (
    <MainContext.Provider value={{
        dataFromJSON,
        sortAtoB,
        sortBtoA,
        dispatch,
        toRender
    }}>
        {children}
    </MainContext.Provider>
  )
}

export default GlobalContext