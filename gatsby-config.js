module.exports = {
  siteMetadata: {
    title: `Santiago Camelo`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/posts`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/videos`,
        name: 'videos'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-61808521-1',
        anonymize: false
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#007aff`,
        showSpinner: false
      }
    },
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
