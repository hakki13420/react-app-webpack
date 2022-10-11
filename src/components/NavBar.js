import React from 'react'
import {Link} from "react-router-dom"
import "./styles/navbar.css"

export default function NavBar() {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}
