import React, { useState  , useEffect} from "react";


export function TitleChangeHook (){

    const [count , setCount] = useState(0);
    const [name , setName] = useState("")



    const TitleChangeHook = ()=>{
        console.log("in chnage");
        setCount((prev) => prev+1)
    };

    useEffect(()=> {
        console.log("if effect");
        let data = setInterval(TitleChangeHook , 1000)

        return() => {
            console.log("component clearing");
            clearInterval(data)
        }
    } , []);



// useEffect(()=>{

//     //for the first time load(rendering process)
//     //for each re-render process my useeffect  will get called
//     // only if i change any state and props
//     //dom chnages
//     //API- fetch  , setinterval , settimeout , promies

//     // document.title = `${count} time clicked`

//     setInterval(() => {
//         setCount((prev) => prev+1)
//     }, 1000);
// },  [] );
// [] empty array component did mount


// useEffect(()=> {
//     document.title = `${count} times clicked`
// });

// useEffect(()=> {
//     console.log("hooks calling- count change");
//     document.title = `${count} times clicked`
// },[count]);

// useEffect(()=> {
//     console.log("name change");
// }, [name]);
    return (
        <>
        <input 
        type={"text"}
        onChange={(e)=> setName(e.target.value)} />
         <button onClick={() => setCount(count + 1)}>click - {count} hooks</button>    
         </>
    )
}