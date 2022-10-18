import React , {useContext } from 'react'
import CompoC from './CompoC'
import { NameContext } from "../../App"
import { AgeContext } from "../../App"

function CompoB() {
    const name = useContext(NameContext)
    const Age = useContext(AgeContext)
  return (
    <>
    <div>CompoB  - {name} - {Age}</div>
    <CompoC />
    </>
  )
}

export default CompoB