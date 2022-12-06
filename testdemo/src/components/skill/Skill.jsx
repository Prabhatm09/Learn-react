import React, { useState, useEffect } from "react";

export function Skill({ skills }) {
    // skills = ["html" , "css" , "js" , "react"]

    const [isLogedIn, setLogedIn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLogedIn(true)
        }, 500);
    })
    return (
        <>
            <ul>
                {skills?.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
            {isLogedIn ? <button>start learning</button> : <button onClick={() => setLogedIn(true)}>Log in</button>}
        </>

    )
}