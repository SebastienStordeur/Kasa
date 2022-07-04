import React from 'react'
import Banner from "../assets/Background-About.png";
import Accordeon from '../components/Accordeon';
import questions from "../data/questions.json";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-img">
        <img src={Banner} alt="Bg banner" className="about-image-banner"/>
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