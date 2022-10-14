import React , { useState } from "react";

export function TodoList () {
  
    const [items , setItems] = useState([]);
    const [lists , setLists] = useState();

    const addItem = () => {
setItems([...items , lists])
setLists("")
    }

    return (
        <>
          <input type="text" placeholder="add items"  value={lists}
          onChange={(e)=> setLists(e.target.value)} />
          <button onClick={addItem} >Add</button>
          {items.map((item)=> (
            <div>
                <span>{item}</span>
                    <button onClick={() => {
                        let selectedarry = items.find((value)=> value === item)
                        setItems(selectedarry)
                        console.log(selectedarry);
                    }} >Edit</button>
                <button onClick={()=> {
                    let listarray =   items.filter((value) => value !== item);
                  setItems([...listarray])
                }} >Delete</button>
            </div>
          ))}
        </>
    )
}


// import React, { useState } from "react";

// export function TodoList() {
//     const [items, setItems] = useState([]);
//     const [lists, setList] = useState();

//     const addItem = () => {
//         setItems([...items, lists]);
//         setList("")
//     }

//     return (
//         <>
//             <input type="text" value={lists} onChange={(e) => setList(e.target.value)} />
//             <button onClick={addItem}>add</button>
//             {items.map((item) => (
//                 <div>
//                     <span>{item}</span>
//                     <button onClick={() => {
//                         let filteredarray = items.filter((value) => value !== item);
//                         setItems([...filteredarray])
//                     }}
//                     >delete</button>
//                     <button onClick={() => {
//                         let filteredarray = items.filter((value) => value !== item);
//                         setItems([...filteredarray])
//                     }}
//                     >save</button>
//                 </div>
//             ))}
//         </>
//     )
// }