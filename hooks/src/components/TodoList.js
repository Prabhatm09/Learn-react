import React, { useState } from "react";

export function TodoList() {
    const [items, setItems] = useState([]);
    const [lists, setList] = useState();

    const addItem = () => {
        setItems([...items, lists]);
        setList("")
    }

    return (
        <>
            <input type="text" value={lists} onChange={(e) => setList(e.target.value)} />
            <button onClick={addItem}>add</button>
            {items.map((item) => (
                <div>
                    <span>{item}</span>
                    <button onClick={() => {
                        let filteredarray = items.filter((value) => value !== item);
                        setItems([...filteredarray])
                    }}
                    >delete</button>
                    <button onClick={() => {
                        let filteredarray = items.filter((value) => value !== item);
                        setItems([...filteredarray])
                    }}
                    >save</button>
                </div>
            ))}
        </>
    )
}