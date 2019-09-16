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

const createMediaDetailsPages = async ({ graphql, actions }) => {
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
    actions.createPage({
      path: node.path,
      component: path.resolve(`./src/templates/media-details.js`),
      context: {
        mediaId: node.id,
      },
    })
  })
}

const createAuthorDetailsPages = async ({ graphql, actions }) => {
  const { data, error } = await graphql(`
    {
      allAuthor {
        edges {
          node {
            id
            path
            content {
              firstName
              lastName
              position
            }
          }
        }
      }
    }
  `)

  if (error) {
    logAndThrowError(error)
  }

  logInfo("create author pages:", get(data, "allAuthor.edges.length"))
  data.allAuthor.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.path,
      component: path.resolve(`./src/templates/author-details.js`),
      context: {
        authorId: node.id,
      },
    })
  })
}

exports.createPages = async args => {
  createMediaDetailsPages(args)
  createAuthorDetailsPages(args)
}
