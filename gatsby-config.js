module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
    // with gatsby-plugin-theme-ui, the last theme in the config
    // will override the theme-ui context from other themes
    { resolve: `gatsby-theme-blog` },
  ],
  siteMetadata: {
    // Used for the site title and SEO
    title: `About me`,
    // Used to provide alt text for your avatar
    author: `Kevin Evans`,
    // Used for SEO
    description: `About me`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/kwe`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/kwe`,
      },
    ],
  },
}
