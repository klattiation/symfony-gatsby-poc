const casual = require("casual").de_DE

module.exports = (count = 100) => {
  casual.define("tag", () => ({
    id: casual.uuid,
    title: casual.title,
  }))
  return Array.from({ length: count }, () => casual.tag)
}
