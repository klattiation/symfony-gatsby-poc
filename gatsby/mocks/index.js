const { get, set, isEmpty, flatten } = require("lodash")
const compose = require("lodash/fp/compose")
const generateAuthors = require("./authors")
const generateMedias = require("./medias")
const generateModules = require("./modules")
const generateTags = require("./tags")
const generateChapterTypes = require("./chapterTypes")
const generateChaptersPerModule = require("./chapters")
const generatePageHome = require("./pages/home")
const generatePageMedias = require("./pages/medias")
const generatePageAuthors = require("./pages/authors")
const generatePageAbout = require("./pages/about")
const generatePageImprint = require("./pages/imprint")
const generatePagePrivacy = require("./pages/privacy")
const { randomEntries, randomIntBetween } = require("./_utils")

const getId = entity => get(entity, "id")

const extractIds = list => (isEmpty(list) ? [] : list.map(getId))

const makeEntityEnhancer = ({ min, max, pool, path }) => entities =>
  entities.map(src => {
    const count = randomIntBetween(min, max)
    const entries = randomEntries(pool, count)
    return set(src, path, entries)
  })

const makeChapterEnhancer = ({ chaptersPerModule, path }) => entities =>
  entities.map((src, idx) => {
    const entries = extractIds(chaptersPerModule[idx])
    return set(src, path, entries)
  })

const countModules = modulesBase => get(modulesBase, "length", 0)

const wrapWithAttr = attr => obj => ({ [attr]: obj })

const wrapWithData = wrapWithAttr("data")

const addPagination = obj => ({
  ...obj,
  pagination: {
    next: 1,
  },
})

module.exports = () => {
  // generate entities in base format (without relations)
  const mediasBase = generateMedias({ count: 100 })
  const authorsBase = generateAuthors({ count: 20 })
  const modulesBase = generateModules()
  const tagsBase = generateTags({ count: 20 })
  const chapterTypes = generateChapterTypes()
  const chaptersPerModule = generateChaptersPerModule({
    chapterTypes,
    moduleCount: countModules(modulesBase),
  })
  const chaptersBase = flatten(chaptersPerModule)
  const pageHomeBase = generatePageHome()
  const pageMediasBase = generatePageMedias()
  const pageAuthorsBase = generatePageAuthors()
  const pageAboutBase = generatePageAbout()
  const pageImprintBase = generatePageImprint()
  const pagePrivacyBase = generatePagePrivacy()
  const pagesBase = [
    pageHomeBase,
    pageMediasBase,
    pageAuthorsBase,
    pageAboutBase,
    pageImprintBase,
    pagePrivacyBase,
  ]

  // extract ids
  const allAuthorIds = extractIds(authorsBase)
  const allMediaIds = extractIds(mediasBase)
  const allModuleIds = extractIds(modulesBase)
  const allTagIds = extractIds(tagsBase)

  // make enhancer
  const addRandomMediaIds = makeEntityEnhancer({
    min: 0,
    max: 10,
    pool: allMediaIds,
    path: "content.medias",
  })

  const addRandomAuthorIds = makeEntityEnhancer({
    min: 0,
    max: 3,
    pool: allAuthorIds,
    path: "content.authors",
  })

  const addRandomModuleIds = makeEntityEnhancer({
    min: 1,
    max: 3,
    pool: allModuleIds,
    path: "content.modules",
  })

  const addRandomTagIds = makeEntityEnhancer({
    min: 0,
    max: 10,
    pool: allTagIds,
    path: "content.tags",
  })

  const addChapters = makeChapterEnhancer({
    chaptersPerModule,
    path: "content.chapters",
  })

  // add relations and wrap
  return {
    authors: compose(
      addPagination,
      wrapWithData,
      addRandomMediaIds,
      addRandomModuleIds
    )(authorsBase),
    chapters: compose(
      wrapWithData,
      addRandomMediaIds
    )(chaptersBase),
    medias: compose(
      addPagination,
      wrapWithData,
      addRandomAuthorIds,
      addRandomModuleIds,
      addRandomTagIds
    )(mediasBase),
    modules: compose(
      wrapWithData,
      addRandomAuthorIds,
      addChapters
    )(modulesBase),
    pages: wrapWithData(pagesBase),
    tags: wrapWithData(tagsBase),
  }
}
