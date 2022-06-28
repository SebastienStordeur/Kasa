import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to="/" className={nav => nav.isActive ? "nav-active nav-link" : "nav-link" }>Accueil</NavLink>
        <NavLink to="/about" className={nav => nav.isActive ? "nav-active nav-link" : "nav-link" }>À propos</NavLink>
    </nav>
  )
}

export default Navbar