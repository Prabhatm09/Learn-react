import React from 'react'
import {  NavLink } from "react-router-dom"
import "../../App.css"

function Header() {
  return (
    <div>
        <ul>
            <li>
                <NavLink className={({isActive}) => (isActive ? "active-link" : "") } to="/" end > Home</NavLink>
            </li>
            <li>
                <NavLink  className={({isActive}) => (isActive ? "active-link" : "") } to="/about" >About</NavLink>
            </li>
            <li>
                <NavLink> Services</NavLink>
            </li>
            <li>
                <NavLink  className={({isActive}) => (isActive ? "active-link" : "") } to="contact">Contact</NavLink>
            </li>
        
        </ul>

    </div>
  )
}

export default Header