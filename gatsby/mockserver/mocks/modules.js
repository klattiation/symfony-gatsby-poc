const casual = require("casual").de_DE

module.exports = () => [
  {
    id: casual.uuid,
    content: {
      title: "Demokratie",
      subline: "Radikalisiert euch",
      description: casual.description,
      imagePath: "/images/modul-demokratie.jpg",
      vimeoId: casual.uuid,
      authorsDescription: casual.description,
    },
    path: "/modul/demokratie",
    seo: {
      title: "Virtual Academy - Demokratie",
      metaTags: [
        {
          property: "description",
          content: casual.description,
        },
        {
          property: "og:title",
          content: "Virtual Academy - Demokratie",
        },
      ],
    },
  },
  {
    id: casual.uuid,
    content: {
      title: "Religionen",
      subline: "Subline zu Religionen",
      description: casual.description,
      imagePath: "/images/modul-religionen.jpg",
      vimeoId: casual.uuid,
      authorsDescription: casual.description,
    },
    path: "/modul/religionen",
    seo: {
      title: "Virtual Academy - Religionen",
      metaTags: [
        {
          property: "description",
          content: casual.description,
        },
        {
          property: "og:title",
          content: "Virtual Academy - Relgionen",
        },
      ],
    },
  },
  {
    id: casual.uuid,
    content: {
      title: "Rassismus",
      subline: "Subline zu Rassismus",
      description: casual.description,
      imagePath: "/images/modul-rassismus.jpg",
      vimeoId: casual.uuid,
      authorsDescription: casual.description,
    },
    path: "/modul/rassismus",
    seo: {
      title: "Virtual Academy - Rassismus",
      metaTags: [
        {
          property: "description",
          content: casual.description,
        },
        {
          property: "og:title",
          content: "Virtual Academy - Rassismus",
        },
      ],
    },
  },
  {
    id: casual.uuid,
    content: {
      title: "Rassismus",
      subline: "Subline zu Diversität",
      description: casual.description,
      imagePath: "/images/modul-diversitaet.jpg",
      vimeoId: casual.uuid,
      authorsDescription: casual.description,
    },
    path: "/modul/diversitaet",
    seo: {
      title: "Virtual Academy - Diversität",
      metaTags: [
        {
          property: "description",
          content: casual.description,
        },
        {
          property: "og:title",
          content: "Virtual Academy - Diversität",
        },
      ],
    },
  },
]
