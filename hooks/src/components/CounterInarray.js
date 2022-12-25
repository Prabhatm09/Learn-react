import "./styles.css";
import React, { useState } from "react";

export default function App() {
    const [count, setCount] = useState([0])

    const handleAppend = () => {
        setCount([...count, count[count.length - 1] + 1])
    }

    const handlePop = () => {
        setCount([...count.slice(0, count.length - 1)])
    }


    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={handleAppend} disabled={count.length === 10}>append</button>
            <button onClick={handlePop} disabled={count.length === 1}>pop</button>
        </div>
    );
}
