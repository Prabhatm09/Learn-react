import React, { useState} from 'react'

function useCounter(init =  0) {

     const [count , setCount] = useState(init);

     const increment = () => {
    setCount ((prev)=> prev+ 1)
}

const decrement = () => {
    setCount ((prev)=> prev -  1)
}


  return [count , increment , decrement]
}

export default useCounter