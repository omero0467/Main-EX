import React from 'react'

import {BsFillCheckCircleFill,BsFillXCircleFill,BsXCircle} from "react-icons/bs"
import Card from './Card'


function TodoTask({idx,handleClick,item, handleDelete}) {
    


  return (
    <Card>
        {item.completed?<span onClick={()=>{handleClick(item.id,idx)}}>
            <BsFillCheckCircleFill size={30}/>
        </span>:<span onClick={()=>{handleClick(item.id)}}>
            <BsFillXCircleFill size={30}/>
        </span>}
        <span className="close" onClick={()=>{handleDelete(item.id)}}>
        <BsXCircle color='purple' size={30}></BsXCircle>
      </span>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default TodoTask
