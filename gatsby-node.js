const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsThought {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      result.data.allDatoCmsThought.edges.map(({ node: thought }) => {
        createPage({
          path: `thoughts/${thought.slug}`,
          component: path.resolve(`./src/templates/thought.js`),
          context: {
            slug: thought.slug,
          },
        })
      })
      resolve()
    })
  })
}
