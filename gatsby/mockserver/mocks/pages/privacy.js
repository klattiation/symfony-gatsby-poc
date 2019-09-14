const casual = require("casual").de_DE

module.exports = () => ({
  id: "privacy",
  path: "/datenschutz",
  seo: {
    title: "AdB Virtual Academy - Datenschutz",
    metaTags: [
      {
        property: "description",
        content: "Datenschutzerklärung der Adb Virtual Academy.",
      },
    ],
  },
  content: {
    title: "Datenschutz",
    description: casual.description,
  },
})
