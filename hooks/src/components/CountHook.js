import React, { useState } from 'react'

export function CountHook(){
    const [count , setCount] = useState(0);

return (
    <>
    <p>count - {count}</p>
    <button onClick={()=> setCount(count + 1)}>Add</button>
    </>
)
}
