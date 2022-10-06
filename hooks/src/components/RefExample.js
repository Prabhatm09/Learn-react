import React , { useState , useEffect , useRef } from "react";

export function RefExample  () {
const [ name , setName] = useState("");

//const countObj = userRef(0)
const inputRef = useRef();


// useEffect(()=> {
//     countObj.current += 1;
//     console.log(inputRef.current);
//     inputRef.current.value = "prabhat";
//     inputRef.current.focus();
//     inputRef.current.style.border ="2px solid red";
//     console.log(countObj.current);
// }, [name])

return (
    <div>
        <input type="text" ref={inputRef} value={name} 
        onFocus={()=>{
            inputRef.current.style.outline =0;
            inputRef.current.style.border ="2px solid red";
        }}
        onChange={(e)=> setName(e.target.value)}/>

        <input 
        type="text" 
        // ref={inputRef} 
        value={name} 
        onChange={(e)=> setName(e.target.value)}/>
<p>this is  {name}</p>
<button onClick={()=> (inputRef.current.value = "aman")}>click</button>
{/* <p>rendered {countObj.current} times</p> */}
    </div>

)

}