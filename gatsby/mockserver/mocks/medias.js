const casual = require("casual").de_DE
const { kebabCase, times } = require("lodash")
const { randomEntry, randomSizedArray } = require("rendum")

module.exports = ({ count = 100 }) =>
  times(count, () => {
    const id = casual.uuid
    const title = casual.title
    const seoTitle = `Virtual Academy - ${title}`
    const description = casual.description
    return {
      id,
      content: {
        title,
        description,
        subline: casual.short_description,
        imagePath: `/images/${id}.jpg`,
        date: casual.date("YYYY-MM-DD"),
        documents: randomSizedArray({ min: 0, max: 10 })(() => {
          const mimeType = randomEntry([
            "pdf",
            "ppt",
            "doc",
            "xls",
            "mp4",
            "jpg",
            "png",
          ])
          const id = casual.uuid
          return {
            id,
            name: casual.title,
            path: `/dokumente/${id}.${mimeType}`,
            mimeType,
          }
        }),
      },
      path: `/medias/${kebabCase(title)}`,
      seo: {
        title: seoTitle,
        metaTags: [
          {
            property: "description",
            content: description,
          },
          {
            property: "og:title",
            content: seoTitle,
          },
        ],
      },
    }
  })
