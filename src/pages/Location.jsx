import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Carousel from "../components/LocationPageComponents/Carousel";
import locations from "../data/data.json";
import Tag from "../components/LocationPageComponents/Tag";

const Location = () => {
  const { id } = useParams();
  const [currentLocation, setCurrentLocation] = useState();

  const getLocation = (id) => {
    for(let location of locations) {
      if(location.id === id) return setCurrentLocation(location)
    }
  }

  useEffect(() => {
    getLocation(id);
  }, [id]);

  console.log(currentLocation)
 /*  const {title} = currentLocation */


  return (
    <div>
      
      <Carousel pictures={currentLocation.pictures}/>
      <div className="location-basic-infos">
        <h1>{currentLocation.title}</h1>
        <h3 className="location-basic-infos-location">{currentLocation.location}</h3>
      </div>
      <div className="tag-container">
        {currentLocation.tags.map(tag => {
          return <Tag value={tag}/> 
        })}
      </div>


      {/* <h3>{currentLocation.host}</h3> */}
      {/* <h1>{currentLocation.title}</h1> */}
      
    </div>
  )
}

export default Location