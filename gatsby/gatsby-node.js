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

const createHomePage = async ({ graphql, actions }) => {
  const { data, error } = await graphql(`
    {
      corePageHome {
        id
        path
      }
    }
  `)

  if (error) {
    logAndThrowError(error)
  }

  logInfo("create page home", data)
  const node = data.corePageHome
  actions.createPage({
    path: node.path,
    component: path.resolve(`./src/templates/home.js`),
    context: {
      id: node.id,
    },
  })
}

const createAuthorsPage = async ({ graphql, actions }) => {
  const { data, error } = await graphql(`
    {
      corePageAuthors {
        id
        path
      }
    }
  `)

  if (error) {
    logAndThrowError(error)
  }

  logInfo("create page authors", data)
  const node = data.corePageAuthors
  actions.createPage({
    path: node.path,
    component: path.resolve(`./src/templates/authors.js`),
    context: {
      id: node.id,
    },
  })
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

const createModuleDetailsPages = async ({ graphql, actions }) => {
  const { data, error } = await graphql(`
    {
      allModule {
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

  logInfo("create module pages:", get(data, "allModule.edges.length"))
  data.allModule.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.path,
      component: path.resolve(`./src/templates/module-details.js`),
      context: {
        moduleId: node.id,
      },
    })
  })
}

exports.createPages = async args => {
  createHomePage(args)
  createAuthorsPage(args)
  createMediaDetailsPages(args)
  createAuthorDetailsPages(args)
  createModuleDetailsPages(args)
}
