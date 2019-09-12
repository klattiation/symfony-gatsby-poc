const casual = require("casual").de_DE

const modules = [
  {
    id: casual.uuid,
    content: {
      name: "Demokratie",
      subline: "Radikalisiert euch",
      description: casual.description,
      vimeoId: casual.uuid,
      authorsDescription: casual.description,
      authorsPreview: [],
      chaptersPreview: [],
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
    name: "Religion",
    subline: "Radikalisiert euch",
    description: casual.description,
    vimeoId: casual.uuid,
    authorsDescription: casual.description,
    authorsPreview: [],
    chaptersPreview: [],
    path: "/modul/religion",
    seo: {
      title: "Virtual Academy - Religion",
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
]

module.exports = () => ({
  modules,
})
