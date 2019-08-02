module.exports = {
  siteMetadata: {
    title: `Alain Tran - Junior ReactJS Developer - Front-end`,
    description: `This is my personal website!`,
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
        name: `alain-personal-website`,
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
