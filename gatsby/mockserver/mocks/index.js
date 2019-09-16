const {
  curry,
  get,
  set,
  isArray,
  isEmpty,
  isNumber,
  flatten,
} = require("lodash")
const { randomEntries, randomInt } = require("rendum")
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

const getId = entity => get(entity, "id")

const extractIds = list => (isEmpty(list) ? [] : list.map(getId))

const enhanceRandomEntity = (pool, path, countOrRange) => entity => {
  const count = isNumber(countOrRange) ? countOrRange : randomInt(countOrRange)
  const entities = count === "all" ? pool : randomEntries(pool, count)
  return set(entity, path, entities)
}

const makeEntityEnhancer = curry((pool, path, countOrRange, entityOrList) => {
  const enhance = enhanceRandomEntity(pool, path, countOrRange)
  return isArray(entityOrList)
    ? entityOrList.map(enhance)
    : enhance(entityOrList)
})

const makeChapterEnhancer = ({ chaptersPerModule, path }) => entities =>
  entities.map((chapter, idx) => {
    const entries = extractIds(chaptersPerModule[idx])
    return set(chapter, path, entries)
  })

const countModules = modulesBase => get(modulesBase, "length", 0)

module.exports = () => {
  // generate entities in base format (without any relations)
  const allMediasBase = generateMedias({ count: 100 })
  const allAuthorsBase = generateAuthors({ count: 20 })
  const allModulesBase = generateModules()
  const allTagsBase = generateTags({ count: 20 })
  const allChapterTypes = generateChapterTypes()
  const chaptersPerModule = generateChaptersPerModule({
    chapterTypes: allChapterTypes,
    moduleCount: countModules(allModulesBase),
  })
  const allChaptersBase = flatten(chaptersPerModule)
  const pageHomeBase = generatePageHome()
  const pageMediasBase = generatePageMedias()
  const pageAuthorsBase = generatePageAuthors()
  const pageAboutBase = generatePageAbout()
  const pageImprintBase = generatePageImprint()
  const pagePrivacyBase = generatePagePrivacy()

  // extract ids
  const allAuthorIds = extractIds(allAuthorsBase)
  const allMediaIds = extractIds(allMediasBase)
  const allModuleIds = extractIds(allModulesBase)
  const allTagIds = extractIds(allTagsBase)
  const allChapterTypeIds = extractIds(allChapterTypes)

  // make enhancers to add relations
  const addRandomMediaIds = makeEntityEnhancer(allMediaIds, "content.medias")
  const addRandomAuthorIds = makeEntityEnhancer(allAuthorIds, "content.authors")
  const addRandomModuleIds = makeEntityEnhancer(allModuleIds, "content.modules")
  const addRandomTagIds = makeEntityEnhancer(allTagIds, "content.tags")
  const addAllTagIds = addRandomTagIds("all")
  const addAllModuleIds = addRandomModuleIds("all")
  const addAllAuthorIds = addRandomAuthorIds("all")
  const addAllChapterTypeIds = makeEntityEnhancer(
    allChapterTypeIds,
    "content.chapterTypes",
    "all"
  )
  const addChapters = makeChapterEnhancer({
    chaptersPerModule,
    path: "content.chapters",
  })

  // add relations and export resources
  // (data wrapper and pagination object are added in the jsonapi middleware)
  return {
    authors: compose(
      addRandomMediaIds({ min: 1, max: 10 }),
      addRandomModuleIds({ min: 1, max: 3 })
    )(allAuthorsBase),

    chapters: addRandomMediaIds({ min: 0, max: 10 })(allChaptersBase),

    "chapter-types": allChapterTypes,

    medias: compose(
      addRandomAuthorIds({ min: 1, max: 3 }),
      addRandomModuleIds({ min: 1, max: 3 }),
      addRandomTagIds({ min: 0, max: 10 })
    )(allMediasBase),

    modules: compose(
      addRandomAuthorIds({ min: 0, max: 3 }),
      addChapters
    )(allModulesBase),

    pages: [
      compose(
        addAllModuleIds,
        addRandomMediaIds(8)
      )(pageHomeBase),
      compose(
        addAllTagIds,
        addAllAuthorIds,
        addAllModuleIds,
        addAllChapterTypeIds,
        addRandomMediaIds(28)
      )(pageMediasBase),
      addRandomAuthorIds(28, pageAuthorsBase),
      pageAboutBase,
      pageImprintBase,
      pagePrivacyBase,
    ],

    tags: allTagsBase,
  }
}
