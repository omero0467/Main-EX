import React from 'react'
import TodoTask from './TodoTask'



function TodoList({handleClick,todosArr, handleDelete}) {
  return (
    <>
    {todosArr.map((todo,idx,arr)=>{
      return  <TodoTask key={idx+'el'} idx={idx} handleClick={handleClick} handleDelete={handleDelete} item={todo}/>
    })}
    </>
  )
}

export default TodoList