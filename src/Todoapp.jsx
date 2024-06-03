import React from 'react'
import styles from './Todoapp.module.css'
import { useState } from 'react'

const Todoapp = () => {
    const[Input,setInput]=useState("")
    const[Todo,setTodo]=useState([]);

   function addTodo(){
       setTodo((Todo)=>{
        const updatedTodo=[...Todo,Input]
        setInput("")
        return(
            updatedTodo
        )
       })
    }

    function Delete(i){
      const newList= [...Todo];
      newList.splice(i,1);
       
      setTodo(newList);
    }

    function EdiT(e){
         let xyz= e.target.previousElementSibling
         e.target.previousElementSibling.previousElementSibling.innerHTML= xyz.value;

    }
    
  return (
    <>
    <div className={styles.main_container}>
    <div className={styles.todo_heading}><h1>Things To Do...</h1></div>
    <div className={styles.todo_container}>
        <input type="text" value={Input} onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={addTodo}>Add Task</button></div>
    
    <div className={styles.todo_append_div}>
     {Todo.map((data,i)=>{
        
        return(
           <div key={i} className={styles.append_div}>
            <div className={styles.data_div}>{data}</div> 
           <input type="text"  />
           <button onClick={EdiT}>Edit Task</button>
          
           <button onClick={(i)=>{Delete(i)}}>Remove</button>
           </div>
        )
        
      
     })}
      
    </div>
    </div>
    </>
  )
}

export default Todoapp;