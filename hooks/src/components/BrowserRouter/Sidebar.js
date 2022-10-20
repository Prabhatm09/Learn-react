import React from 'react'
import {  Link } from "react-router-dom"
function Sidebar
({text}) {
  return (
    <>
    <div>
        <h1>Sidebar</h1>
        {
            text === "contact" ? (
                <h1>Contact me on : prabhat@.com</h1> 
            ) : ( 
                <>
                <p>
      <Link to="/about/1">Content 1</Link>
      <Link to="/about/2">Content 2</Link>
    </p>
    </>
            )
        }
        
    </div>
    </>
  )
}

export default Sidebar
