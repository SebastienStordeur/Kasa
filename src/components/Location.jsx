import React from 'react'
import { Link } from "react-router-dom";
/* import PropTypes from "prop-types";
 */
const LocationCard = ({ location }) => {
    const { title, id, cover } = location;
    return (
        <Link to={`/location/${id}`}>
            <article className="location">
                <img src={cover} alt="Logement" className="location-img" />
                <h2 className="location-title">{title}</h2>
            </article>
        </Link>
    )
}

/* Location.propTypes = {
    location: React.PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        cover: PropTypes.string
    })
} */

export default LocationCard