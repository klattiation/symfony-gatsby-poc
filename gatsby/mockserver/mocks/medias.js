const casual = require("casual").de_DE
const { kebabCase, times } = require("lodash")

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
