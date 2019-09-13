const casual = require("casual").de_DE

module.exports = () => [
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
