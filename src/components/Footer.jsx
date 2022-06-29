import React from 'react'
import FooterLogo from "../assets/Footer_Logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
        <img src={FooterLogo} alt="Logo Kasa" className="footer-logo"/>
        <p className="rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer