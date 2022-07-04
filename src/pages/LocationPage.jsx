import React, {useState, useEffect, Fragment} from 'react'
import { useParams } from 'react-router-dom';
import Carousel from "../components/LocationPageComponents/Carousel";
import locations from "../data/data.json";
import Accordeon from '../components/Accordeon';
import Infos from '../components/LocationPageComponents/Infos';

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

    return (
      <Fragment>
        <Carousel pictures={currentLocation.pictures} key={"Carousel"}/>
        <Infos currentLocation={currentLocation}/>
  
        <div className="more-infos">
          <Accordeon content={{title: "Description", reply: currentLocation.description }} />
          <Accordeon content={{title: "Équipements", equipments: currentLocation.equipments }} />
        </div>
  
      </Fragment>
    )


}

export default LocationPage