import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import avatar from "../images/alaintran.jpg"

import "./layout.scss"
import Translate from "./translation"

const Layout = () => {
  return (
    <>
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <title>Alain Tran | ReactJS | Front-end Developer</title>
        <link rel="canonical" href="https://alain.codes" />
        <meta
          name="description"
          content="Alain Tran, Front-end developer | ReactJS | JavaScript - Learning and experiencing new things everyday."
        />
      </Helmet>
      <Header />
      <main className="main-container">
        <img className="avatar" src={avatar} alt="photography of alain" />
        <Translate />
      </main>
    </>
  )
}

export default Layout
