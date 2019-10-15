import React from "react"
import Header from "../components/header"
import "./portfolio.scss"
import bouteille from "../images/bouteille.png"
import startup from "../images/startup.png"
import clout from "../images/clout.png"
import papyrus from "../images/papyrus.png"
import bloggy from "../images/bloggy.png"
import onlyjs from "../images/onlyjs.png"
import { useSpring, animated } from "react-spring"

const Portfolio = () => {
  const anim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 900 },
  })
  return (
    <div>
      <Header />
      <section className="portfolio-container">
        <animated.div style={anim}>
          <h1 className="portfolio-h1">Recent Projects</h1>
          <div className="portfolio-grid">
            <div className="project-container">
              <a
                href="https://onlyjs.netlify.com/"
                target="_blank"
                className="project-btn"
                rel="noopener noreferrer"
              >
                <img className="project-img" src={onlyjs} alt="" />
              </a>

              <div>
                <h2 className="project-h2">Only JavaScript</h2>
                <p className="project-p">JavaScript, CSS</p>
              </div>
            </div>
            <div className="project-container">
              <a
                href="https://lit-bastion-97560.herokuapp.com/"
                target="_blank"
                className="project-btn"
                rel="noopener noreferrer"
              >
                <img className="project-img" src={bloggy} alt="" />
              </a>

              <div>
                <h2 className="project-h2">Papyrus v2</h2>
                <p className="project-p">React, Sass</p>
              </div>
            </div>
            <div className="project-container">
              <a
                href="https://gracious-kowalevski-588c86.netlify.com"
                target="_blank"
                className="project-btn"
                rel="noopener noreferrer"
              >
                <img className="project-img" src={bouteille} alt="" />
              </a>

              <div>
                <h2 className="project-h2">Landing Page</h2>
                <p className="project-p">NextJS, Sass</p>
              </div>
            </div>
            <div className="project-container">
              <a
                href="https://competent-murdock-45eab5.netlify.com/"
                target="_blank"
                className="project-btn"
                rel="noopener noreferrer"
              >
                <img className="project-img" src={startup} alt="" />
              </a>

              <div>
                <h2 className="project-h2">Startup Landing Page</h2>
                <p className="project-p">GatsbyJS, CSS</p>
              </div>
            </div>
            <div className="project-container">
              <a
                href="https://clout.netlify.com/"
                target="_blank"
                className="project-btn"
                rel="noopener noreferrer"
              >
                <img className="project-img" src={clout} alt="" />
              </a>

              <div>
                <h2 className="project-h2">Design Agency</h2>
                <p className="project-p">React, Sass</p>
              </div>
            </div>
            <div className="project-container">
              <a
                href="https://papyrus-project.alaincodes.now.sh/"
                target="_blank"
                className="project-btn"
                rel="noopener noreferrer"
              >
                <img className="project-img" src={papyrus} alt="" />
              </a>

              <div>
                <h2 className="project-h2">Personal Project</h2>
                <p className="project-p">NextJS, Sass</p>
              </div>
            </div>
          </div>
        </animated.div>
      </section>
    </div>
  )
}

export default Portfolio
