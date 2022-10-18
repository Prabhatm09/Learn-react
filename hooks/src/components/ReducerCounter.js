import React, { useReducer } from "react";


// const initialState = 0;
// const reducer = (state , action ) => {
//     switch(action){
//         case "increament": 
//         return state + 1;

//         case "decrement":
//             return state - 1;

//         case "reset": 
//             return initialState;

//         default:
//             return state;
//     }
// };


// const initialState = {
//     value : 0,
//     // name : prabhat,
// } ;
// const reducer = (state , action ) => {
//     switch(action){
//         case "increament": 
//         return {...state , value:state.value+ 1};

//         case "decrement":
//             return {...state , value:state.value-1};

//         case "reset": 
//             return initialState;

//         default:
//             return state;
//     }
// };

// export function ReducerCounter (){
//     const [ count , dispatch] = useReducer(reducer , initialState);

//     return (
//         <>
//         <h1>count - {count.value}</h1>
//         <button onClick={()=> dispatch("increament")}>increament</button>
//          <button onClick={()=> dispatch("increament"  )}>increament by 5</button>
//         <button onClick={()=> dispatch("decrement")}>decrement</button>
//         <button onClick={()=> dispatch("reset")}>reset</button>
//         </>
//     )
// };

const initialState = {
    value : 0,
    name : "ram",
} ;
const reducer = (state , action ) => {
    switch(action.type){
        case "increament": 
        return {...state , value:state.value+ action.value};

        case "decrement":
            return {...state , value:state.value - action.value};

        case "reset": 
            return initialState;
        case "Update":
            return {...state , name: action.value}
        default:
            return state;
    }
};

export function ReducerCounter (){
    const [ count , dispatch] = useReducer(reducer , initialState);
    const [ counttwo , secondDispatch] = useReducer(reducer , initialState);

    return (
        <>
        <h1>count - {count.value}</h1>
        <h1>counttwo - {counttwo.value}</h1>
        {/* <h1>name - {count.name}</h1> */}
         <button onClick={()=> dispatch({type:"increament" , value:5} )}>increament by 5</button>
        <button onClick={()=> dispatch({type:"decrement" , value:3})}>decrement by 3</button>
        <button onClick={()=> dispatch("reset")}>reset</button>
         <button onClick={()=> secondDispatch({type:"increament" , value:10} )}>increament by 10</button>
        <button onClick={()=> secondDispatch({type:"decrement" , value:13})}>decrement by 13</button>
        <button onClick={()=> secondDispatch("reset")}>reset</button>
        <button onClick={()=> dispatch({type :"Update" , value:"prabhat"})}>change name</button>
        </>
    )
};