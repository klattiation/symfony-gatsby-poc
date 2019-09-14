const casual = require("casual").de_DE
const times = require("lodash/times")

module.exports = ({ count = 100 }) =>
  times(count, () => ({
    id: casual.uuid,
    title: casual.title,
  }))
