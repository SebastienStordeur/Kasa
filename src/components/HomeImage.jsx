import React from 'react'
import ImageHome from "../assets/HomeImage.png";

const HomeImage = () => {
  return (
    <div className="img-home div-banner">
        <img src={ImageHome} alt="Placeholder img" className="home-img banner" />
        <h1 className="title-img">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default HomeImage