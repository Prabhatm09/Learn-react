import React from 'react'
import "./greet.css"

export function Greet({ name }) {
    return (
        <>
            {/* <h1 className='title' >hello {name}</h1> */}
            <h1 className='title' >{name ? `hello ${name}` : `Guest`}</h1>
        </>
    )
}
