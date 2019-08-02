import React from "react"
import Header from "../components/header"
import "./tech.scss"

const Tech = () => {
  return (
    <div>
      <Header />
      <section className="tech-container">
        <h1 className="tech-h1">Technologies</h1>
        <ul className="tech-ul">
          <li>HTML</li>
          <li>CSS/Sass</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>GraphQL</li>
        </ul>
      </section>
    </div>
  )
}

export default Tech
