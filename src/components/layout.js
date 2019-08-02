import React from "react"

import Header from "./header"
import avatar from "../images/alaintran.jpg"

import "./layout.scss"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <img className="avatar" src={avatar} alt="photography of alain" />
        <h1 className="main-h1">
          Hello, Je suis Alain,{" "}
          <span className="main-highlight">Développeur Front-end Junior</span>.
          Je code des applications{" "}
          <span className="main-highlight">Web et Mobile</span> avec{" "}
          <span className="main-highlight">ReactJS</span>.
        </h1>
        <h2 className="main-h2">
          Je suis disponible pour completer votre équipe ou projet en freelance,
          n'hesitez pas à me contacter sur
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
          ou par Email:
          <span className="main-highlight"> contact@alain.codes</span>
        </h2>
      </main>
    </>
  )
}

export default Layout
