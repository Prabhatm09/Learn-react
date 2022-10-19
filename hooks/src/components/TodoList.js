import React , { useState } from "react";
import "./Todo.css"
export function TodoList () {
  
    const [inputTask , setInputTask] = useState({});
    const [tasks , setTasks] = useState([]);
    const [updateText , setUpdateText] = useState("")

    const addItem = () => {
setTasks([...tasks , inputTask])
setInputTask({text : "" })
    }

    const makeEditable = (thisTask) => {
      
      // console.log(thisTask);
      console.log("before", tasks);
      let newTasks = [];
      tasks.map((task) =>  {
        let editable = false;
        if(task.id === thisTask.id){
          console.log("inside")
          editable = true
        }
        newTasks.push({
          ...task,
          isEditable: editable
        })
      })
      console.log("after update" , newTasks);
      setTasks(newTasks)
    }
    

    const updatetask = (thisTask) => {
let newTasks = [];
      tasks.map((task) =>  {
        let text = task.text;
        if(task.id === thisTask.id){
          text = updateText
        }
        newTasks.push({
          ...task,
          text: text,
          isEditable : false
        })
      })
      
      setTasks(newTasks)
    }

    return (
        <>
        <div className="todo_container">
          <div className="taskInput">
          <input type="text" placeholder="Add Items..."  className="writeInput" 
          value={inputTask.text}
          onChange={(e)=> setInputTask({
            "id" : Math.floor(Math.random()*1000),
            "text" : e.target.value,
            "isEditable" :  false

          })} /> 
          <button onClick={addItem}  className="addbtn" >Add</button>
          </div>
          <h1>TO DO LIST</h1>
          {tasks.map((task)=> (
            <div className="container" key={task.id}>
                {
            task.isEditable ? 
            <input type="text" className="Input" defaultValue={task['text']} onChange={(event) => setUpdateText(event.target.value)} />
            :
            <p>{task['text']}</p>
          }
          
                <button className="delBtn btn" onClick={()=> {
                    let listarray =   tasks.filter((value) => value !== task);
                  setTasks([...listarray])
                }} ><i class="fa-sharp fa-solid fa-trash"></i></button>
                <button className="editBtn btn"  onClick={(event) => {
                  if(task.isEditable){
                    updatetask(task);
                event.target.style.color = "yellow"    
                  }else if(!task.isEditable){
                    makeEditable(task);
                    event.target.style.color = "green"
                  }
                 }} ><i class="fa-sharp fa-solid fa-pen"></i></button>
            </div>
          ))}
          </div>
        </>
    )
}

