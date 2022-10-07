import React , { useState } from "react";

export function TodoList (){
    const  [ items, setItems] = useState(["apple" , "banana"]);
    const [ fruit , setFruit] = useState("tomato");

    const addItem = () => {
        setItems([...items , fruit]);
        setFruit("")
    }

    return (
        <>
        <input type="text"  value={fruit} onChange={(e) => setFruit(e.target.value)} /> 
        <button onClick={addItem}>add</button>
        {items.map((item)=> (
            <div>
            <span>{item}</span>
            <button onClick={()=> {
                let filteredarray = items.filter((value) => value !== item);
                setItems([...filteredarray])
            }}
            >delete</button>
            </div>
        ))}
        </>
    )
}