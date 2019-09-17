const casual = require("casual").de_DE

module.exports = () => [
  {
    id: casual.uuid,
    title: "Hintergrund",
    description: casual.description,
  },
  {
    id: casual.uuid,
    title: "Praxis",
    description: casual.description,
  },
]
