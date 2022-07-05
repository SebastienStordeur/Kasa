import React from 'react'
import { AboutImage } from '../assets';
import { Accordeon } from '../components';
import questions from "../data/questions.json";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-img">
        <img src={AboutImage} alt="Bg banner" className="about-image-banner"/>
      </div>
      <section className="about-section">
        <div className="about-container">
          {questions.map(question => {
            return <Accordeon content={question} key={question.id} />
          })}
        </div>
      </section>
    </div>
  )
}

export default About