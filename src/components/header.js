import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "./header.scss"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <nav className="nav-bar">
      <h3 className="nav-title">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h3>
      <ul className="nav-links">
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/tech/">Tech</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
