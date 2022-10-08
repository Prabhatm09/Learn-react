import React, { useReducer } from "react";


const initialState = 0;
const reducer = (state , action ) => {
    switch(action){
        case "increament": 
        return state + 1;

        case "decrement":
            return state - 1;

            case "reset": 
            return initialState;

            default:
            return state;
    }
};

export function ReducerCounter (){
    const [ count , dispatch] = useReducer(reducer , initialState);

    return (
        <>
        <h1>count - {count}</h1>
        <button onClick={()=> dispatch("increament")}>increament</button>
        <button onClick={()=> dispatch("decrement")}>decrement</button>
        <button onClick={()=> dispatch("reset")}>reset</button>
        </>
    )
};