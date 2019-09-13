const casual = require("casual").de_DE

module.exports = () => ({
  id: "home",
  path: "/",
  seo: {
    title: "Virtual Academy - Home",
    metaTags: [
      {
        property: "description",
        content: casual.description,
      },
      {
        property: "og:title",
        content: "Virtual Academy - Home",
      },
    ],
  },
  content: {
    title: "Entwurf “Fotogrtafie und Weißraum”",
    description:
      "Dominierende Elemente des Entwurfs sind markante Fotos und klare Typografie in übersichtlichen Kompositionen, die an ein Magazin-Layout erinnert. Jedes Thema...",
  },
})
