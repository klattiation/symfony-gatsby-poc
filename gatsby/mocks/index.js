const authors = require("./authors.js")
const medias = require("./medias.js")
const modules = require("./modules.js")
const pages = require("./pages.js")
const tags = require("./tags.js")

module.exports = () => {
  const data = {
    authors: authors(20),
    medias: medias(100),
    modules: modules(),
    pages: pages(),
    tags: tags(20),
  }
  return data
}
