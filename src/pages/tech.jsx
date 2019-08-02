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
        <p className="tech-footer">
          Alain Tran 2019 - Built with GatsbyJS <br />
          <a
            href="https://twitter.com/alaincodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          - contact@alain.codes
        </p>
      </section>
    </div>
  )
}

export default Tech
