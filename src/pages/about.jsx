import React from "react"
import Header from "../components/header"
import "./about.scss"

const About = () => {
  return (
    <div>
      <Header />
      <section className="about-container">
        <h1 className="about-h1">About</h1>
        <p className="about-p">
          Je développe des applications{" "}
          <span className="about-highlight">Web et Mobile</span> avec{" "}
          <span className="about-highlight">ReactJS</span>. Je travaille avec
          beaucoup d'appétit, d'honnêté et d'engagement. J'attache beaucoup
          d'importance aux <span className="about-highlight">design UI/UX</span>
          , à l'<span className="about-highlight">Accessibilité</span> et aux{" "}
          <span className="about-highlight">Performances</span>.
        </p>
        <p className="about-p">
          Anciennement cuisinier à Paris, quand je ne code pas, vous me
          trouverez certainement entrain de regarder ou de lire des
          livres/vidéos de cuisine ou simplement derrière les fourneaux.
        </p>
      </section>
    </div>
  )
}

export default About
