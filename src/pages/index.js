import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Helmet>
      <Layout>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <title>Alain Tran | ReactJS | Front-end Developer</title>
        <link rel="canonical" href="https://www.alain.codes" />
        <meta
          name="description"
          content="Alain Tran, Front-end developer, ReactJS, JavaScript"
        />
      </Layout>
    </Helmet>
  )
}

export default IndexPage
