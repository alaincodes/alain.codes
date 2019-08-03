import React from "react"

import Header from "./header"
import avatar from "../images/alaintran.jpg"

import "./layout.scss"
import Translate from "./translation"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <img className="avatar" src={avatar} alt="photography of alain" />
        <Translate />
      </main>
    </>
  )
}

export default Layout
