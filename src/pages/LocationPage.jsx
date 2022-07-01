import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Carousel from "../components/LocationPageComponents/Carousel";
import locations from "../data/data.json";
import Tag from "../components/LocationPageComponents/Tag";
import Accordeon from '../components/Accordeon';

const LocationPage = () => {
  const { id } = useParams();
  const [currentLocation, setCurrentLocation] = useState();

  const getLocation = () => {
    for(let location of locations) {
      if(location.id === id) return setCurrentLocation(location)
    };
  };

  useEffect(() => {
    getLocation()
  }, [id]);

  console.log(currentLocation)

  return (
    <div>
      <Carousel pictures={currentLocation.pictures}/>
      <div className="location-basic-infos">
        <div className="location-infos">
          <h1>{currentLocation.title}</h1>
          <h3 className="location-basic-infos-location">{currentLocation.location}</h3>
        </div>
        <div className="host-infos">
          <div className="host-box">
            <h2>{currentLocation.host.name}</h2>
            <img src={currentLocation.host.picture} alt={currentLocation.host.name} className="host-img"/>
          </div>
          
        </div>
      </div>
      <div className="tag-container">
        {currentLocation.tags.map(tag => {
          return <Tag value={tag}/> 
        })}
      </div>
      <div className="more-infos">
        <Accordeon question={{title: "description", reply: currentLocation.description }} />
        <Accordeon question={{title: "Équipements", reply: currentLocation.equipments }} />
      </div>

    </div>
  )
}

export default LocationPage