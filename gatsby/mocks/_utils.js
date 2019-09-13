const isNil = require("lodash/isNil")

const shuffle = arr => [...arr].sort(() => 0.5 - Math.random())

const randomIndex = arr =>
  arr.length ? Math.floor(Math.random() * arr.length) : undefined

const randomRange = (min, max) => min + Math.random() * (max - min)

const randomIntBetween = (min, max) => Math.round(randomRange(min, max))

const randomEntry = arr => (arr.length ? arr[randomIndex(arr)] : undefined)

const randomEntries = (arr, n) => {
  if (!arr || !arr.length) {
    return
  }
  if (isNil(n)) {
    return shuffle(arr).slice(0, randomIntBetween(1, arr.length - 1))
  }
  if (n >= arr.length) {
    return shuffle(arr).slice(0, arr.length - 1)
  }
  return shuffle(arr).slice(0, n)
}

const randomSizedArray = ({ min = 0, max = 100 }) => creator =>
  Array.from({ length: randomIntBetween(min, max) }, (...args) => creator(args))

module.exports = {
  randomIndex,
  randomEntry,
  randomEntries,
  randomRange,
  randomIntBetween,
  randomSizedArray,
}
