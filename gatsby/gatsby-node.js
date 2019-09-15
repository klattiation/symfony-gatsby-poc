/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require("axios")
const MD5 = require("crypto-js/md5")
const path = require("path")
const get = require("lodash/get")
const colors = require("colors")

const BACKEND_URL = "http://localhost:3000"

const logError = error => {
  console.log(colors.red("error"))
  console.log(colors.red(error))
}

const logInfo = (...args) => {
  console.log(colors.blue("info"), ...args)
}

const logDebug = (...args) => {
  console.log(colors.magenta("debug"), ...args)
}

const encrypt = value => MD5(JSON.stringify(value)).toString()

const getAllMedias = ({ createNode }) =>
  new Promise((resolve, reject) =>
    axios
      .get(`${BACKEND_URL}/medias`)
      .then(res => get(res, "data.data", []))
      .then(medias => {
        logInfo("resolve medias:", medias.length)
        medias.forEach(media => {
          createNode({
            ...media,
            parent: null,
            children: [],
            internal: {
              type: `Media`,
              contentDigest: encrypt(media),
            },
          })
        })
        resolve()
      })
      .catch(error => {
        logError(error)
        reject()
      })
  )

exports.sourceNodes = async ({ actions }) => {
  return Promise.all([getAllMedias(actions)])
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
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
      .then(({ data }) => {
        logInfo("create medias pages:", data.allMedia.edges.length)
        data.allMedia.edges.forEach(({ node }) => {
          createPage({
            path: node.path,
            component: path.resolve(`./src/templates/media-details.js`),
            context: {
              mediaId: node.id,
            },
          })
        })
        resolve()
      })
      .catch(error => {
        logError(error)
        reject()
      })
  })
}
