import React from 'react'
import { useState,useEffect } from 'react';
import './App.css';
import Todos from './Todos';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { v4 as uuidv4 } from "uuid";
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('tasks'))?JSON.parse(localStorage.getItem('tasks')):Todos)
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
     setTodos(tasks);
    }
  }, []);

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(todos));
}, [todos]);


function handleClick(id,idx){
  let finished = todos.find((item)=>{
    return item.id === id
  })

  console.log(!finished.completed);

  finished.completed=!finished.completed
  
  setTodos(prev=> prev.map((item)=>{
     return item.id===id?finished:item
  }))
}

function addTodo (newFeedback){
  newFeedback.id= uuidv4()
  setTodos(prev=>[ newFeedback, ...prev])
}


function deleteTodo (id){
  if(window.confirm('Are you sure?')){
    setTodos(todos.filter((item)=>item.id!==id))
  }
}

  return (
    <div className='App'>
      <Header text={'Todos App'}></Header>
      <TodoForm handleAdd={addTodo}></TodoForm>
      <TodoList todosArr={todos} handleClick={handleClick} handleDelete={deleteTodo}></TodoList>
    </div>
  )
}

export default App