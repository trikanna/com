module.exports = {
  siteMetadata: {
    title: `Santiago Camelo`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Santiago Camelo',
        short_name: 'trikanna.com',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#007aff',
        display: 'minimal-ui'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
