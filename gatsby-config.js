require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `John Rickard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156553026-1",
        head: true,
        anonymize: true,
        respectDNT: false,
      },
    },
  ],
}
