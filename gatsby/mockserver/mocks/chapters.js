const casual = require("casual").de_DE
const times = require("lodash/times")

const generateChaptersPerModule = chapterTypes => [
  {
    id: casual.uuid,
    type: chapterTypes[0].id,
  },
  {
    id: casual.uuid,
    type: chapterTypes[1].id,
  },
]

module.exports = ({ moduleCount, chapterTypes }) =>
  times(moduleCount, () => generateChaptersPerModule(chapterTypes))
