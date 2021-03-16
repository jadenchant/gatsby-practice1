/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Practice 1`,
        short_name: `Gatsby Practice`,
        description: "Practice Portfolio and Contact Form using Gatsby",
        lang: "en",
        start_url: `/`,
        background_color: `#363c45`,
        theme_color: `#3e90cc`,
        display: `standalone`,
        icon: "./static/icon-v2.png",
      },
    },
  ],
};
