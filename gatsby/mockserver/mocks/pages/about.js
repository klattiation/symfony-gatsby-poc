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
    teamTitle: "Team",
    teamList: [
      {
        name: casual.full_name,
        imagePath: "/images/team-member-1.jpg",
      },
      {
        name: casual.full_name,
        imagePath: "/images/team-member-2.jpg",
      },
      {
        name: casual.full_name,
        imagePath: "/images/team-member-3.jpg",
      },
      {
        name: casual.full_name,
        imagePath: "/images/team-member-4.jpg",
      },
    ],
    contactTitle: "Kontakt",
    contactLabelName: "Name",
    contactLabelCompany: "Unternehmen / Organisation",
    contactLabelEmail: "E-Mail Adresse",
    contactLabelMessage: "Nachricht",
    contactLabelSubmit: "Absenden",
  },
})
