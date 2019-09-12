const casual = require("casual").de_DE

const pages = [
  {
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
  },
  {
    id: "medias-overview",
    path: "/medias",
    seo: {
      title: "AdB Virtual Academy - Mediaübersicht",
      metaTags: [
        {
          property: "description",
          content: "This is the home of the Adb Virtual Academy.",
        },
      ],
    },
    content: {
      authorsPreview: [],
      modulesPreview: [],
      tags: [],
      title: "Mediaübersicht",
    },
  },
  {
    id: "authors-overview",
    path: "/autoren",
    seo: {
      title: "AdB Virtual Academy - Autorenübersicht",
      metaTags: [
        {
          property: "description",
          content: "Autorenübersicht der Adb Virtual Academy.",
        },
      ],
    },
    content: {
      title: "Autorenübersicht",
    },
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

module.exports = () => pages
