const casual = require("casual").de_DE

module.exports = () => ({
  id: "imprint",
  path: "/impressum",
  seo: {
    title: "AdB Virtual Academy - Impressum",
    metaTags: [
      {
        property: "description",
        content: "Impressum der Adb Virtual Academy.",
      },
    ],
  },
  content: {
    title: "Impressum",
    description: casual.description,
  },
})
