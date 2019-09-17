const casual = require("casual").de_DE
const { kebabCase, toLower, times } = require("lodash")
const { randomEntry } = require("rendum")

const mimeTypePool = ["pdf", "ppt", "doc", "xls", "mp4", "jpg", "png"]
const randomMimeType = () => randomEntry(mimeTypePool)

module.exports = ({ count }) =>
  times(count, () => {
    const title = casual.title
    const mimeType = randomMimeType()
    return {
      id: casual.uuid,
      path: `/dokumente/${kebabCase(toLower(title))}.${mimeType}`,
      content: {
        title,
        mimeType,
      },
    }
  })
