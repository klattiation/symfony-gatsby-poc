const casual = require("casual").de_DE

module.exports = () => ({
  id: "about",
  path: "/ueber-uns",
  seo: {
    title: "AdB Virtual Academy - Über uns",
    metaTags: [
      {
        property: "description",
        content: "Das ist die Adb Virtual Academy.",
      },
    ],
  },
  content: {
    title: "Über uns",
    description: casual.description,
    team: [
      {
        name: "Max Mustermann",
        imagePath: "/images/max-mustermann.jpg",
      },
      {
        name: "Max Mustermann",
        imagePath: "/images/max-mustermann.jpg",
      },
      {
        name: "Max Mustermann",
        imagePath: "/images/max-mustermann.jpg",
      },
    ],
  },
})
