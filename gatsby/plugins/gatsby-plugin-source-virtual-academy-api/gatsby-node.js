/**
 * Fetch resources from the REST API and store them as nodes within
 * the internal Gatsby store.
 */

const axios = require("axios")
const compose = require("lodash/fp/compose")
const get = require("lodash/get")
const colors = require("colors")
const pkg = require("./package.json")
const { createContentDigest } = require("gatsby-core-utils")

const BACKEND_URL = "http://localhost:9001/api"
const MOCKSERVER_URL = "http://localhost:3000"

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

const fetchResources = url =>
  new Promise((resolve, reject) =>
    axios
      .get(url)
      .then(res => get(res, "data.data", []))
      .then(resolve)
      .catch(reject)
  )

/**
 * Replaces a field that represents a relation to another field(s)
 * with a "___NODE" field, that Gatsby can use as to link these nodes
 * using foreign-keys.
 *
 * @see https://www.gatsbyjs.org/docs/creating-a-source-plugin/#option-2-foreign-key-relationships
 **/
const resolveRelation = relField => entity => {
  const result = { ...entity }
  const relation = result[relField]
  result[relField] = undefined
  return {
    ...result,
    [`${relField}___NODE`]: relation,
  }
}

const nodeFactory = createNode => ({
  nodeType,
  relationFields = [],
}) => resource => {
  createNode({
    ...resource,
    content: {
      ...compose(relationFields.map(resolveRelation))(resource.content),
    },
    parent: null,
    children: [],
    internal: {
      type: nodeType,
      contentDigest: createContentDigest(resource),
    },
  })
}

exports.sourceNodes = async ({ actions }) => {
  logInfo(`${pkg.name}: sourceNodes`)

  const { createNode } = actions
  const [
    authors,
    chapters,
    chapterTypes,
    medias,
    modules,
    tags,
    pageHome,
    pageMedias,
    pageAuthors,
    pageAbout,
    pageImprint,
    pagePrivacy,
  ] = await Promise.all([
    fetchResources(`${MOCKSERVER_URL}/authors`),
    fetchResources(`${MOCKSERVER_URL}/chapters`),
    fetchResources(`${MOCKSERVER_URL}/chapter-types`),
    fetchResources(`${MOCKSERVER_URL}/medias`),
    fetchResources(`${MOCKSERVER_URL}/modules`),
    fetchResources(`${MOCKSERVER_URL}/tags`),
    fetchResources(`${MOCKSERVER_URL}/pages/home`),
    fetchResources(`${MOCKSERVER_URL}/pages/medias`),
    fetchResources(`${MOCKSERVER_URL}/pages/authors`),
    fetchResources(`${MOCKSERVER_URL}/pages/about`),
    fetchResources(`${MOCKSERVER_URL}/pages/imprint`),
    fetchResources(`${MOCKSERVER_URL}/pages/privacy`),
  ]).catch(logAndThrowError)

  logInfo(`> fetched resources`)
  logInfo(`> - authors: ${authors.length}`)
  logInfo(`> - chapters: ${chapters.length}`)
  logInfo(`> - chapterTypes: ${chapterTypes.length}`)
  logInfo(`> - medias: ${medias.length}`)
  logInfo(`> - modules: ${modules.length}`)
  logInfo(`> - tags: ${tags.length}`)

  const makeNodeCreator = nodeFactory(createNode)

  authors.forEach(
    makeNodeCreator({
      nodeType: "Author",
      relationFields: ["modules", "medias"],
    })
  )

  chapters.forEach(
    makeNodeCreator({
      nodeType: "Chapter",
    })
  )

  chapterTypes.forEach(
    makeNodeCreator({
      nodeType: "ChapterType",
    })
  )

  medias.forEach(
    makeNodeCreator({
      nodeType: "Media",
      relationFields: ["authors", "tags", "modules"],
    })
  )

  modules.forEach(
    makeNodeCreator({
      nodeType: "Module",
      relationFields: ["authors"],
    })
  )

  tags.forEach(
    makeNodeCreator({
      nodeType: "Tag",
    })
  )

  makeNodeCreator({
    nodeType: "CorePageHome",
    relationFields: ["modules", "medias"],
  })(pageHome)

  makeNodeCreator({
    nodeType: "CorePageMedias",
    relationFields: ["authors", "tags", "modules", "medias"],
  })(pageMedias)

  makeNodeCreator({
    nodeType: "CorePageAuthors",
    relationFields: ["authors"],
  })(pageAuthors)

  makeNodeCreator({
    nodeType: "CorePageAbout",
  })(pageAbout)

  makeNodeCreator({
    nodeType: "CorePageImprint",
  })(pageImprint)

  makeNodeCreator({
    nodeType: "CorePagePrivacy",
  })(pagePrivacy)

  logInfo(`> successfully created nodes from resources`)
}
