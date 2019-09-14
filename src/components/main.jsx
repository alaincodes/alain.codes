import React from "react"
import { useSpring, animated } from "react-spring"

const Main = () => {
  const anim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 900 },
  })

  return (
    <>
      <animated.div style={anim}>
        <h1 className="main-h1">
          Hello, I'm Alain{" "}
          <span className="main-highlight">Junior Full Stack Developer</span>,
          living in Paris. I like to code for{" "}
          <span className="main-highlight">Web and Mobile </span>
          devices.
        </h1>
        <h2 className="main-h2">
          I'm available for cool freelance/remote opportunities, hit me up on
          <span>
            {" "}
            <a
              className="main-highlight"
              href="https://twitter.com/alaincodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
          </span>{" "}
          for future projects!
        </h2>
      </animated.div>
    </>
  )
}

export default Main
