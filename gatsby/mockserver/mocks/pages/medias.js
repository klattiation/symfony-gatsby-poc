module.exports = () => ({
  id: "medias",
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
    title: "Mediaübersicht",
    tagsTitle: "Tags",
    sortLabel: "Sortieren",
    sortLabelAlpha: "A-Z",
    sortLabelDate: "Datum",
    sort: "title", // enum: "title" || "date"
    order: "asc", // enum: "asc" || "desc"
  },
})
