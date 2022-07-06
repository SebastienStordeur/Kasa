import React, {useState} from 'react'
import { ChevronLeft, ChevronRight } from '../../assets'
import PropTypes from "prop-types";

const Carousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const showPreviousPhoto = () => {
    if(index === 0) setIndex(pictures.length-1)
    else setIndex(index-1);
  }

  const showNextPhoto = () => {
    if(index === pictures.length-1) setIndex(0)
    else setIndex(index+1)
  }

  return (
    <div className="carousel">
      <button className="previous-btn carousel-btn" onClick={showPreviousPhoto}>
        <img src={ChevronLeft} alt="Previous" />
      </button>
      <img src={pictures[index]} alt="Logement" className="carousel-img"/>
      <button className="next-btn carousel-btn" onClick={showNextPhoto}>
        <img src={ChevronRight} alt="Next" />
      </button>
    </div>
  )
}

Carousel.propTypes = {
  pictures: PropTypes.array,
}

export default Carousel