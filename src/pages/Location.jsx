import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Carousel from "../components/LocationPageComponents/Carousel";
import locations from "../data/data.json";
import Tag from "../components/LocationPageComponents/Tag";

const Location = () => {
  const { id } = useParams();
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    for(let location of locations) {
      if(location.id === id) setCurrentLocation(location)
    }
  }, [id]);

  console.log(currentLocation)
 /*  const {title} = currentLocation */


  return (
    <div>
      
      <Carousel pictures={currentLocation.pictures}/>
      <p>{currentLocation.id}</p>
      <div className="location-basic-infos">
        <h1>{currentLocation.title}</h1>
        <h3>{currentLocation.location}</h3>
      </div>
      {currentLocation.tags.map(tag => {
        console.log(tag)
        return <Tag value={tag}/> 
      })}

      {/* <h3>{currentLocation.host}</h3> */}
      {/* <h1>{currentLocation.title}</h1> */}
      
    </div>
  )
}

export default Location