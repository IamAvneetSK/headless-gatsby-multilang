module.exports = {
  siteMetadata: {
    siteUrl: "https://techmilestone.gatsbyjs.io",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "7c0ff61d7d794bed5569a906d6fc95",
      },
    },
  ],
};
