import React from 'react'
import Tag from './Tag'
import Rating from './Rating'

const Infos = ({currentLocation}) => {
    
    return (
    <div className="location-basic-infos">
        <div className="location-infos">
            <h1>{currentLocation.title}</h1>
            <h3 className="location-infos-location">{currentLocation.location}</h3>
        </div>
        <div className="tag-container">
            {currentLocation.tags.map(tag => {
            return <Tag value={tag}/> 
            })}
        </div>
        <div className="host-infos">
            <div className="ratings">
                <Rating rating={currentLocation.rating}/>
            </div>
            <div className="host-box">
                <h2>{currentLocation.host.name}</h2>
                <img src={currentLocation.host.picture} alt={currentLocation.host.name} className="host-img"/>
            </div>
        </div>
    </div>
  )
}

export default Infos