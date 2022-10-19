import React from "react"
// import { CountClass } from "./components/Counter";
// import { Counter } from "./components/Counter";
// import { StateWithObj } from "./components/StateWithObj";
// import { CountHook } from "./components/CountHook";
// import { StateWithArray }  from "./components/StateWithArray" 
// import  { Titlechangeclass } from "./components/Titlechangeclass"
// import { TitleChangeHook } from "./components/TitleChangeHook"
// import { RefExample } from "./components/RefExample"
// import { LoginForm } from "./components/LoginFrom";
import { TodoList } from "./components/TodoList"
// import { DataFetch } from "./components/DataFetch";
// import { Check } from "./components/Check"
// import React , { useState } from "react";
// import { ReducerCounter } from "./components/ReducerCounter";
// import MemoCounter from "./components/MemoCounter"
// import { Weather } from "./components/Weather";
// import DocTitleOne from "./components/DocTitleOne"
// import DocTitleTwo from "./components/DocTtileTwo"
// import CounterOne from "./components/CustomHooks/CounterOne"
// import CounterTwo from "./components/CustomHooks/CounterTwo"
// import CompoA from "./components/useContext/CompoA"
// import Home from "./components/BrowserRouter/Home"
// import About from "./components/BrowserRouter/About"
// import Contact from "./components/BrowserRouter/Contact"
// import { Route , Routes } from  "react-router-dom"

// export const NameContext = React.createContext();
// export const AgeContext = React.createContext();



export function  App (){

  // const  [valid , setValid] = useState(0);


  // const [name , setName ] = useState("prabhat")
  // const [age , setAge] = useState(12);

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
    <TodoList />
    {/* <DataFetch /> */}
    {/* <ReducerCounter /> */}
    {/* <Weather /> */}
    {/* <MemoCounter /> */}
    {/* <DocTitleOne />
    <DocTitleTwo /> */}
    {/* <CounterOne /> */}
    {/* <CounterTwo /> */}
{/* <Routes>
  <Route element={<Home />}/>
  <Route element={<About />}/>
  <Route element={<Contact />}/>
</Routes> */}
     {/* <NameContext.Provider value={name}> */}
      {/* <AgeContext.Provider value={age}> */}
      {/* <CompoA /> */}
      {/* </AgeContext.Provider> */}
     {/* <CompoA name={name} />  */}
    {/* </NameContext.Provider> */}
    {/* {valid < 10 && <Check />}
    <button onChange={()=> setValid((prev)=>prev+1)}>click ={valid}</button> */}
    
    </>
  )
}