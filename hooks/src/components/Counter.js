import React , { useState } from "react";

export function Counter(){

    const initailValue = 0
    const [ count , setCount] = useState(initailValue);
    const [name , setName ] = useState("parbhat");

    const handleName = () => {
if(name !== "parbhat"){
                setName(name.toUpperCase())
            }
    }
     
    const handleIncreament = () => {
        setCount(count + 1)
    }
        const handledecreament = (value) => {
        setCount(count + value)
    }

    return (
        <>
        <p>count : {count}</p>
        <p>My name is : {name}</p>
        <button onClick={handleIncreament}>inc</button>
        <button onClick={()=> handledecreament(3)}>dec</button>
        <button onClick={()=> setCount(initailValue)}>reset</button>
        {/* <button onClick={()=> setName(name.toUpperCase())}>Captilize</button> */}
        <button onClick={ handleName}>Captilize</button>
        </>
    )
}