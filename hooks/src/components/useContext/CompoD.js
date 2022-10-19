import React, { useContext } from 'react'
import {NameContext } from "../../App"

function CompoD() {

     const XYZ = useContext(NameContext)
  return (
    <div> compoD - {XYZ} </div>
  )
}

export default CompoD