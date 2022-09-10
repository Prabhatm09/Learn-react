// import logo from './logo.svg';
import './App.css';
// import { WelcomeFn } from "./components/WelcomeFn";
// import { WelcomeClass } from "./components/WelcomeClass"
import { Toggle } from "./components/Toggle"

//named export
 export function App() {
  return (
    <div>
      <Toggle  name="toggle"/>
   {/* <h1 className='head'>Hey friend i m start learning react today</h1>
   <p id='para'>lorem ispus hey bro what are u doing</p> */}
   {/* <WelcomeFn /> */}
   {/* <WelcomeClass name="sameer" age="14" place="lucknow"  district="UP"/>
   <WelcomeClass name="amar"  age="17"/>
   <WelcomeClass name="anjali" age="87" /> */}
   </div>
  );
}

// export function App2(){
//   return (
//     <h2>App2</h2>  //write one component in one js file in rare case u can use
//   )
// }

// export default App;
