const casual = require("casual").de_DE

module.exports = ({ count = 100 }) =>
  Array.from({ length: count }, () => ({
    id: casual.uuid,
    title: casual.title,
  }))
