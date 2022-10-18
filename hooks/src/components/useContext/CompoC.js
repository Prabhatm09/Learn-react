import React , { useContext } from 'react'
import { NameContext } from "../../App"

function CompoC() {

    const name = useContext(NameContext)
  return (
    <div>CompoC - {name}</div>
  )
}

export default CompoC