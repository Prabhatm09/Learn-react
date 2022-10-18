import React, { useState  , useMemo} from 'react'

function MemoCounter() {

    const [ counterOne , setCountOne] = useState(0);
    const [ counterTwo , setCountTwo] = useState(0);

 const increamentOne = () => {
    setCountOne((prev)=> prev+1)
 }

 const increamentTwo = () => {
    setCountTwo((prev)=> prev+1)
 }

 //useMemo is to return any thing and useEffect is use to store tha data
const isEven  =  useMemo(()=> {
    let i =0;
    while(i < 300000000)  i++
return counterOne %2 === 0
 } , [counterOne])



  return (
    <>
    <div>
        <button onClick={increamentOne}>CounterOne - {counterOne}</button> -{" "}
        {isEven ? <span>Even</span> : <span>Odd</span>}
        </div>
        <div>
        <button onClick={increamentTwo}>counterTwo - {counterTwo}</button>
        </div> 
    </>
  )
}

export default MemoCounter