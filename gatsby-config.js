module.exports = {
  siteMetadata: {
    title: `Alain Tran`,
    description: `Alain Tran, Frontend Developer, JavaScript, ReactJS, Sass, Nodejs.`,
    author: `@alaincodes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alaintran`,
        short_name: `alaincodes`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#f2f2f2`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
