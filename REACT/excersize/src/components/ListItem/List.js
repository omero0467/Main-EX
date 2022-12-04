import React, { useContext, } from 'react'
import ListItem from './ListItem'
import { MainContext } from '../../context/GlobalContext'


function List() {
    const {toRender,dataFromJSON,dispatch} = useContext(MainContext)



  return (
  <>
  <button onClick={()=>{dispatch({type:'ascending'})}}>sort ascending</button>
  <button onClick={()=>{dispatch({type: 'descending'})}}>sort descending</button>
  {console.log(toRender)}
    {dataFromJSON&&toRender.map((item)=><ListItem itemData={item}/>)}
  </>
  )
}

export default List