/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require("axios")
const MD5 = require("crypto-js/md5")
const get = require("lodash/get")
const colors = require("colors")

const BACKEND_URL = "http://localhost:3000"

const logError = error => {
  console.log(colors.red("error"))
  console.log(colors.red(error))
}

const logAndThrowError = error => {
  logError(error)
  throw error
}

const logInfo = (...args) => {
  console.log(colors.blue("info"), ...args)
}

const logDebug = (...args) => {
  console.log(colors.magenta("debug"), ...args)
}

const encrypt = value => MD5(JSON.stringify(value)).toString()

const getAllEntities = url =>
  new Promise((resolve, reject) =>
    axios
      .get(url)
      .then(res => get(res, "data.data", []))
      .then(resolve)
      .catch(reject)
  )

exports.sourceNodes = async ({ actions }) => {
  console.log(colors.magenta("### source nodes"))
  const { createNode } = actions
  const [medias, authors] = await Promise.all([
    getAllEntities(`${BACKEND_URL}/medias`),
    getAllEntities(`${BACKEND_URL}/authors`),
  ]).catch(logAndThrowError)

  logInfo(`> fetched medias (${medias.length}) and authors (${authors.length})`)

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

  authors.forEach(author => {
    createNode({
      ...author,
      parent: null,
      children: [],
      internal: {
        type: `Author`,
        contentDigest: encrypt(author),
      },
    })
  })
}
