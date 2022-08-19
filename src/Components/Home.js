import React ,{useState} from 'react'
import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';
import {v4 as uuidv4} from "uuid";



const Home = () => {
   const [todos,setTodos]=useState([]);
   const handelAddTodo = (todo)=>{
     setTodos((prevTodos)=>{
      return [...prevTodos,{id: uuidv4(), todo}];
     });
   };
   const handleRemovetodo =(id)=>{
    
    setTodos((prevTodos) => {
      const filterTodos = prevTodos.filter((todo) => todo.id !== id);
      return filterTodos;
    });
   };
  return (
    <div className={style.container}> 
    <h1 style={{color:"white"}}> Todo App</h1>
      <NewTodo  onAddTodo={handelAddTodo} />
        <Todos todos={todos} onRemoveTodo={ handleRemovetodo} />
    </div>
  )
}

export default Home