import React from "react";
import PropTypes from "prop-types";

const Rating = ({rating}) => {
    return (
        <div className="star-container">
            {[...Array(5)].map((star, index) => {
                return  <svg key={index} className="star" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={index<rating ? "star-active" : ""} d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#E3E3E3"/>
                        </svg>
            })}
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.string,
}

export default Rating