import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {



    const counter = useSelector((state) => {
        return state.counter
    })
    return (
        <main>
            <h1>{counter}</h1>
            <button>increment</button>
            <button>decrement</button>
        </main>
    )
}