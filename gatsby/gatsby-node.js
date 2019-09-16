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

const createMediasPage = async ({ graphql, actions }) => {
  const { data, error } = await graphql(`
    {
      corePageMedias {
        id
        path
      }
    }
  `)

  if (error) {
    logAndThrowError(error)
  }

  logInfo("create page medias", data)
  const node = data.corePageMedias
  actions.createPage({
    path: node.path,
    component: path.resolve(`./src/templates/medias.js`),
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

const createImprintPage = async ({ graphql, actions }) => {
  const { data, error } = await graphql(`
    {
      corePageImprint {
        id
        path
      }
    }
  `)

  if (error) {
    logAndThrowError(error)
  }

  logInfo("create page imprint", data)
  const node = data.corePageImprint
  actions.createPage({
    path: node.path,
    component: path.resolve(`./src/templates/imprint.js`),
    context: {
      id: node.id,
    },
  })
}

const createPrivacyPage = async ({ graphql, actions }) => {
  const { data, error } = await graphql(`
    {
      corePagePrivacy {
        id
        path
      }
    }
  `)

  if (error) {
    logAndThrowError(error)
  }

  logInfo("create page privacy", data)
  const node = data.corePagePrivacy
  actions.createPage({
    path: node.path,
    component: path.resolve(`./src/templates/privacy.js`),
    context: {
      id: node.id,
    },
  })
}

const createAboutPage = async ({ graphql, actions }) => {
  const { data, error } = await graphql(`
    {
      corePageAbout {
        id
        path
      }
    }
  `)

  if (error) {
    logAndThrowError(error)
  }

  logInfo("create page about", data)
  const node = data.corePageAbout
  actions.createPage({
    path: node.path,
    component: path.resolve(`./src/templates/about.js`),
    context: {
      id: node.id,
    },
  })
}

exports.createPages = async args => {
  createHomePage(args)
  createAuthorsPage(args)
  createMediasPage(args)
  createMediaDetailsPages(args)
  createAuthorDetailsPages(args)
  createModuleDetailsPages(args)
  createImprintPage(args)
  createPrivacyPage(args)
  createAboutPage(args)
}
