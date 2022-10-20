import React from 'react'
import { useParams } from "react-router-dom"

function Content() {
    const {id} = useParams() 
  return (
    <div>this is Content page - {id}</div>
  )
}

export default Content