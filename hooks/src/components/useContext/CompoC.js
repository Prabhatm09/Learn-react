import React , { useContext } from 'react'
import { NameContext } from "../../App"
import CompoD from "./CompoD"

function CompoC() {

    const name = useContext(NameContext)
  return (
    <>
    <div>CompoC - {name}</div>
    <CompoD />
    
    </>
  )
}

export default CompoC