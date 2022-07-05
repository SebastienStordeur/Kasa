import React from 'react'
import { KasaLogo } from "../assets";
import { Navbar } from "../components";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-container">
        <img src={KasaLogo} alt="Kasa Logo" className="kasa-logo"/>
        <Navbar />
      </div>
    </header>
  )
}

export default Header