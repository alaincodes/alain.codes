import { Link } from "gatsby"
import React from "react"
import "./header.scss"

const Header = () => (
  <nav className="nav-bar">
    <h3 className="nav-title">
      <Link to="/">Alain Tran</Link>
    </h3>
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/portfolio/">Portfolio</Link>
      </li>
      <li>
        <Link to="/tech/">Tech</Link>
      </li>
    </ul>
  </nav>
)

export default Header
