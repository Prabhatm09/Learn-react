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
// import React , { useState } from "react";
// import { ReducerCounter } from "./components/ReducerCounter";
// import MemoCounter from "./components/MemoCounter"
// import { Weather } from "./components/Weather";
// import DocTitleOne from "./components/DocTitleOne"
// import DocTitleTwo from "./components/DocTtileTwo"
// import CounterOne from "./components/CustomHooks/CounterOne"
// import CounterTwo from "./components/CustomHooks/CounterTwo"
// import CompoA from "./components/useContext/CompoA"
// import React from "react"
// import Home from "./components/BrowserRouter/Home"
// import About from "./components/BrowserRouter/About"
// import Contact from "./components/BrowserRouter/Contact"
// import Content from "./components/BrowserRouter/Content"
// import Header from "./components/BrowserRouter/Header"
// import Sidebar from "./components/BrowserRouter/Sidebar"
// import Errorpage from "./components/BrowserRouter/Errorpage"
// import { Route , Routes } from  "react-router-dom"
import  Child from "./components/OptimizationTechnique/Childparent"

import { Covid } from "./components/Covid"

// export const NameContext = React.createContext();
// export const AgeContext = React.createContext();



export function App() {

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
      {/* <TodoList /> */}
      {/* <DataFetch /> */}
      {/* <ReducerCounter /> */}
      {/* <Weather /> */}
      {/* <MemoCounter /> */}
      {/* <DocTitleOne />
    <DocTitleTwo /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <Home />
      <About />
      <Contact /> */}
      {/* <Header />
      <Routes>
        <Route path="/contact" element={<Sidebar text="contact"/>}/>
         <Route path="/about" element={<Sidebar text="about"/>}/>
      </Routes>
      <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/about/:id" element={<Content />}/>
  <Route path="/contact" element={<Contact />}/>
  <Route path="*" element={<Errorpage />}/>
</Routes> */}
{/* <Covid /> */}
      {/* <NameContext.Provider value={name}> */}
      {/* <AgeContext.Provider value={age}> */}
      {/* <CompoA /> */}
      {/* </AgeContext.Provider> */}
      {/* <CompoA name={name} />  */}
      {/* </NameContext.Provider> */}
      {/* {valid < 10 && <Check />}
    <button onChange={()=> setValid((prev)=>prev+1)}>click ={valid}</button> */}
    <Child/>
</>
    
  )
}

export default App;