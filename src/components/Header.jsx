import React from 'react'
import Logo from "../assets/KasaLogo.png"
import Navbar from './Navbar'

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-container">
        <img src={Logo} alt="Kasa Logo" className="kasa-logo"/>
        <Navbar />
      </div>
    </header>
  )
}

export default Header