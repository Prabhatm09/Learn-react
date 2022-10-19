
import React  from 'react'
import useCounter from './useCounter';

function CounterTwo() {
  const [count , increment , decrement]  =  useCounter(10)
  return (
    <div>
        <h1>count - {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default CounterTwo