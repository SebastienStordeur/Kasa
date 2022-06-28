import React from 'react'
import Logo from "../assets/KasaLogo.png"
import Navbar from './Navbar'

const Header = () => {
  return (
    <header id="header" className="header">
        <img src={Logo} alt="Kasa Logo" className="kasa-logo"/>
        <Navbar />
    </header>
  )
}

export default Header