import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import avatar from "../images/alaintran.jpg"
import github from "../images/GitHub32px.png"
import twitter from "../images/Twitter.png"

import "./layout.scss"
import Translate from "./translation"

const Layout = () => {
  return (
    <>
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <title>Alain Tran - Full Stack Developer - ReactJS - NodeJS</title>
        <link rel="canonical" href="https://alain.codes" />
        <meta
          name="description"
          content="Alain Tran, Full Stack developer | ReactJS | JavaScript - Learning and experiencing new things everyday."
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
            <img src={github} alt="" />
          </a>
          <a
            className="socials-btn"
            href="https://twitter.com/alaincodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="" />
          </a>
        </span>

        <Translate />
      </main>
    </>
  )
}

export default Layout
