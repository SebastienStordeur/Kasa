import React from 'react'
import Banner from "../assets/Background-About.png";
import Accordeon from '../components/Accordeon';
import questions from "../data/questions.json";

const About = () => {
  return (
    <div>
      <img src={Banner} alt="Bg banner" className="about-img banner"/>
      <section className="about-section">
        {questions.map(question => {
          return <Accordeon question={question} key={question.id} />
        })}
      </section>
    </div>
  )
}

export default About