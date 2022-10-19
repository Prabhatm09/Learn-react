import React, {  useState } from 'react'
import useUpdateTitile  from './CustomHooks/useUpdateTtile';

function DocTitleOne() {
    const [count , setCount] = useState(0);
    useUpdateTitile(count)

 
  return (
    <div>
        <button onClick={()=> setCount((prev) => prev+ 1)}>count - {count}</button>
        
    </div>
  )
}

export default DocTitleOne