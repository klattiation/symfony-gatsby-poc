const casual = require("casual").de_DE

module.exports = () => ({
  id: "media-form",
  path: "/einreichen",
  seo: {
    title: "AdB Virtual Academy - Media anlegen",
    metaTags: [
      {
        property: "description",
        content: "Ein neues Media in der AdB Virtual Academy einreichen.",
      },
    ],
  },
  content: {
    title: "Media anlegen",
    description: casual.description,
  },
})
