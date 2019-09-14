const casual = require("casual").de_DE

// prettier-ignore
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
    description: "Dominierende Elemente des Entwurfs sind markante Fotos und klare Typografie in übersichtlichen Kompositionen, die an ein Magazin-Layout erinnert. Jedes Thema wird von einem zentralen Foto mit subtiler Bildsprache und leichter Farbverfremdung verkörpert sowie von einem zugehörigen Claim untermauert. Die Farbigkeit ist schlicht und akuemtuiert. Als wichtiges grafisches Element kommen Linien zum Einsatz, die Inalte strukturieren. Der großzügige Weißraum schafft hilfreiche Übersichtlichkeit und selbstbewusste Klarheit.",
    mediasTitle: "Neue Mediabeiträge",
  },
})
