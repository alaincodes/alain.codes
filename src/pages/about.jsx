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
              I code for <span className="about-highlight">Web & Mobile</span>{" "}
              devices using <span className="about-highlight">JavaScript</span>{" "}
              related tools (React & Node.js most of the time). I work with a
              lot of appetite, honesty and commitment. I like to create{" "}
              <span className="about-highlight">
                beautifully fast websites/apps
              </span>{" "}
              and follow
              <span className="about-highlight"> Accessibility</span>{" "}
              guidelines.
            </p>
            <p className="about-p">
              Outside of programming, you will probably see me reading, watching
              cooking stuff or in front of the stove, I was working as a cook in
              Paris years ago !!
            </p>
          </animated.div>
        </div>
      </section>
    </div>
  )
}

export default About
