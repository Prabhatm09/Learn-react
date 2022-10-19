
import React   from 'react'
import useCounter from './useCounter';

function CounterOne() {
const [count , increment , decrement]  =  useCounter()
  return (
    <div>
        <h1>count - {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterOne