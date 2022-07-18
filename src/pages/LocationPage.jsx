import React, {Fragment} from 'react'
import { useParams } from 'react-router-dom';
import locations from "../data/data.json";
import { Carousel, Infos } from "../components/LocationPageComponents"
import { Accordeon } from '../components';
import Page404 from './Page404';

const LocationPage = () => {
  const { id } = useParams();
  const location = locations.find(location => location.id === id)

  if(!location) {
    return <Page404 />
  }

    return (
      <Fragment>
        <Carousel pictures={location.pictures} key={"Carousel"}/>
        <Infos currentLocation={location}/>
        <div className="more-infos">
          <Accordeon content={{title: "Description", reply: location.description }} />
          <Accordeon content={{title: "Équipements", equipments: location.equipments }} />
        </div>
      </Fragment>
    )
}

export default LocationPage