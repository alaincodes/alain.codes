import React from "react"
import Header from "../components/header"
import "./tech.scss"
import { useSpring, animated } from "react-spring"

const Tech = () => {
  const anim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 900 },
  })
  return (
    <div>
      <Header />
      <section className="tech-container">
        <animated.div style={anim}>
          <h1 className="tech-h1">Technologies</h1>
          <ul className="tech-ul">
            <li>HTML</li>
            <li>CSS/Sass</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>GraphQL</li>
            <li>Jest</li>
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
        </animated.div>
      </section>
    </div>
  )
}

export default Tech
