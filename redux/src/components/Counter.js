import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {

    // useSelector -- its take on the global state ,
    // and select the counter from it
    const dispatch = useDispatch();

    const counter = useSelector((state) => {
        return state.counter
    })

    const handleIncrement = () => {
        dispatch({ "type": "increment", "payload": { "step": 5 } })
    }

    const handledecrement = () => {
        dispatch({ "type": "decrement", "payload": { "step": 5 } })
    }

    return (
        <main>
            <h1>{counter}</h1>
            <button onClick={handleIncrement} >increment</button>
            <button onClick={handledecrement}> decrement</button>
        </main>
    )
}