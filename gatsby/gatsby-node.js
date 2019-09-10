/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require("axios")
const MD5 = require("crypto-js/md5")
const path = require("path")

const BACKEND_URL = "http://localhost:9001/api"

const encrypt = value => MD5(JSON.stringify(value)).toString()

const getSeries = () => axios.get(`${BACKEND_URL}/shows`)

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  return new Promise((resolve, reject) => {
    getSeries()
      .then(({ data }) => {
        console.log("> Resolve series", JSON.stringify(data, null, 2))
        data.forEach(show => {
          createNode({
            ...show,
            parent: null,
            children: [],
            internal: {
              type: `Series`,
              contentDigest: encrypt(show),
            },
          })
        })
        resolve()
      })
      .catch(error => {
        console.log("\nError")
        console.log(error)
        reject()
      })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allSeries {
          edges {
            node {
              id
              url
            }
          }
        }
      }
    `)
      .then(({ data }) => {
        console.log("> Create series pages", JSON.stringify(data, null, 2))
        data.allSeries.edges.forEach(({ node }) => {
          createPage({
            path: node.url,
            component: path.resolve(`./src/templates/series-details.js`),
            context: {
              seriesId: node.id,
            },
          })
        })
        resolve()
      })
      .catch(error => {
        console.log("\nError")
        console.log(error)
        reject()
      })
  })
}
