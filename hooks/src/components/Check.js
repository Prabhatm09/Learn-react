import React from "react";
import { useEffect } from "react";
import { useState } from "react";

 export function Check (){
    const [count , setCount] = useState(0);

    const change = async () => {
         console.log("in change");
         setCount(count + 1)
    };

    useEffect(()=> {
        console.log("in effect");
        let data = setInterval(change , 500);

        return ()=> {
            clearInterval(data);
        };
    }, [ count]);

    return <div>{count}</div>
}