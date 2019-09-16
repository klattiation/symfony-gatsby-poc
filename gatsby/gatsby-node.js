/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const get = require("lodash/get")
const colors = require("colors")

const logInfo = (...args) => {
  console.log(colors.blue("info"), ...args)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data, error } = await graphql(`
    {
      allMedia {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  if (error) {
    logAndThrowError(error)
  }

  logInfo("create medias pages:", get(data, "allMedia.edges.length"))
  data.allMedia.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: path.resolve(`./src/templates/media-details.js`),
      context: {
        mediaId: node.id,
      },
    })
  })
}
