module.exports = {
  siteMetadata: {
    title: `Servicios Funerarios Rafael Paz`,
    description: `Servicios Funerarios de primer nivel`,
    author: `@roberjacobo`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto,`, `Helvetica Neue`, `sans-serif`],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Asset91.png`, // This path is relative to the root of the site.
      },
      },
  ],
}
