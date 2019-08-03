import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <head>
          <title>Alain Tran | ReactJS | Front-end Developer</title>
        </head>
        <link rel="canonical" href="https://www.alain.codes" />
        <meta name="description" content="Helmet application" />
      </Helmet>
    </Layout>
  )
}

export default IndexPage
