const casual = require("casual").de_DE

const chapterTypes = [
  {
    id: casual.uuid,
    name: "Hintergrund",
    description: casual.description,
  },
  {
    id: casual.uuid,
    name: "Praxis",
    description: casual.description,
  },
]

module.exports = () => chapterTypes
