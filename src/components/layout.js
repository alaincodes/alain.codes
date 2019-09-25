import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import avatar from "../images/alaintran.jpg"
import github from "../images/GitHub32px.png"
import twitter from "../images/Twitter.png"
import dribbble from "../images/dribbble.svg"

import "./layout.scss"
import Main from "./main"

const Layout = () => {
  return (
    <>
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <title>Alain Tran - Frontend Developer - ReactJS - NodeJS</title>
        <link rel="canonical" href="https://alain.codes" />
        <meta
          name="description"
          content="Alain Tran, Frontend developer | ReactJS | JavaScript - Learning and experiencing new things everyday."
        />
      </Helmet>
      <Header />
      <main className="main-container">
        <img className="avatar" src={avatar} alt="photography of alain" />
        <span className="socials">
          <a
            className="socials-btn"
            href="https://github.com/alaincodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github logo" />
          </a>
          <a
            className="socials-btn"
            href="https://twitter.com/alaincodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter logo" />
          </a>
          <a
            className="socials-btn"
            href="https://dribbble.com/alaincodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dribbble} alt="dribbble logo" />
          </a>
        </span>

        <Main />
      </main>
    </>
  )
}

export default Layout
