import  {useEffect} from 'react'

function UseUpdateTtile(count) {

       useEffect(()=> {
        document.title = `count - ${count}`
    } , [count])
}

export default UseUpdateTtile
