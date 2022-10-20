import React from 'react'
import { Navigate } from 'react-router-dom'
// import { Navigate } from "react-router-dom"

function Errorpage() {

    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate("/")
    // }
  return (

    <Navigate to={"/"} />
    // <div>Errorpage is here
    //     <button onClick={handleClick} >Take me home back</button>
    // </div>
  )
}

export default Errorpage