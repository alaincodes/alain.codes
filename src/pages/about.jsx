import React from "react"
import Header from "../components/header"
import "./about.scss"
import TranslateAbout from "../components/translationAbout"

const About = () => {
  return (
    <div>
      <Header />
      <section className="about-container">
        <TranslateAbout />
      </section>
    </div>
  )
}

export default About
