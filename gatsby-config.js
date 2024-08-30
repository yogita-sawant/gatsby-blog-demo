// // gatsby-config.js
// module.exports = {
//   siteMetadata: {
//     title: `My Blog`,
//     description: `A blog created with Gatsby and React.`,
//     author: `Your Name`,
//   },
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `posts`,
//         path: `${__dirname}/src/posts/`, // Directory for Markdown files
//       },
//     },
//     `gatsby-transformer-remark`,
//     `gatsby-plugin-styled-components`,
//   ],
// };

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'My New Blog',
    description: 'This is my awesome blog I made from scratch!',
    author: `Your Name`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
  ],
}