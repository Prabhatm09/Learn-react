// import { CountClass } from "./components/Counter";
// import { Counter } from "./components/Counter";
// import { StateWithObj } from "./components/StateWithObj";
// import { CountHook } from "./components/CountHook";
// import { StateWithArray }  from "./components/StateWithArray" 
// import  { Titlechangeclass } from "./components/Titlechangeclass"
// import { TitleChangeHook } from "./components/TitleChangeHook"
// import { RefExample } from "./components/RefExample"
// import { LoginForm } from "./components/LoginFrom";
// import { TodoList } from "./components/TodoList"
// import { DataFetch } from "./components/DataFetch";
// import { Check } from "./components/Check"
// import React , { useState} from "react";

// import { Weather } from "./components/Weather";

import { ReducerCounter } from "./components/ReducerCounter";





export function  App (){

  // const  [valid , setValid] = useState(0);

  return (
    <>
    {/* <CountClass /> */}
    {/* <CountHook /> */}
    {/* <Counter /> */}
    {/* <StateWithObj /> */}
    {/* <StateWithArray /> */}
    {/* <Titlechangeclass /> */}
    {/* <TitleChangeHook /> */}
    {/* <RefExample /> */}
    {/* <LoginForm /> */}
    {/* <TodoList /> */}
    {/* <DataFetch /> */}
    <ReducerCounter />
    {/* <Weather /> */}
    {/* {valid < 10 && <Check />}
    <button onChange={()=> setValid((prev)=>prev+1)}>click ={valid}</button> */}
    
    </>
  )
}