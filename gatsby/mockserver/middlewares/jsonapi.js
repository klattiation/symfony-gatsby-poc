const compose = require("lodash/fp/compose")
const isArray = require("lodash/isArray")

const ATTR_DATA = "data"

const wrapWithAttr = attr => obj => ({ [attr]: obj })

const wrapWithData = wrapWithAttr(ATTR_DATA)

const addPagination = page => data => ({
  ...data,
  pagination: {
    next: +page + 1,
    prev: +page > 1 ? +page - 1 : undefined,
  },
})

const makePaginationEnhancer = page => body =>
  isArray(body[ATTR_DATA]) && page ? addPagination(page)(body) : body

module.exports = (req, res, next) => {
  const addPaginationOnDemand = makePaginationEnhancer(req.query._page)
  const enhanceBody = compose(
    JSON.stringify,
    addPaginationOnDemand,
    wrapWithData,
    JSON.parse
  )

  const { send } = res
  res.send = function(body) {
    send.call(this, enhanceBody(body))
  }
  next()
}
