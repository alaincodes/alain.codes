import React from "react"
import Header from "../components/header"
import "./about.scss"
import { useSpring, animated } from "react-spring"

const About = () => {
  const anim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 900 },
  })

  return (
    <div>
      <Header />
      <section className="about-container">
        <div>
          <animated.div style={anim}>
            <h1 className="about-h1">About</h1>
            <p className="about-p">
              I code for <span className="about-highlight">Desktop & Mobile</span>{" "}
              devices using <span className="about-highlight">Sass & JavaScript</span>{" "}
              related tools. I work with a
              lot of appetite, honesty and commitment.
            </p>
          </animated.div>
        </div>
      </section>
    </div>
  )
}

export default About
