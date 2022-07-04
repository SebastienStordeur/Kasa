import React, {useState} from 'react'
import stars from "../../assets/Star.svg"

const Rating = ({rating}) => {
    const [ratings, setRatings] = useState(rating)
    console.log(ratings)
    return (
        <div className="star-container">
            {[...Array(5)].map((star, index) => {
                return  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={star[index] ? "star-active" : "star"} d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#E3E3E3"/>
                        </svg>
            })}
        </div>
    )
}

export default Rating