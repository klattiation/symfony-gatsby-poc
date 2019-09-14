const casual = require("casual").de_DE
const { lowerCase, times } = require("lodash")

module.exports = ({ count = 20 }) =>
  times(count, () => {
    const id = casual.uuid
    const firstName = casual.first_name
    const lastName = casual.last_name
    const title = `Virtual Academy - ${firstName} ${lastName}`

    // prettier-ignore
    return {
      id,
      content: {
        firstName,
        lastName,
        type: casual.boolean ? "person" : "organisation",
        organisationName: casual.company_name,
        position: "Gymnasiallehrer",
        description: casual.description,
        phone: casual.phone,
        email: casual.email,
        website: casual.url,
        instagramId: `https://instagram.com/${lowerCase(firstName)}.${lowerCase(lastName)}`,
        facebookId: `https://facebook.com/${casual.uuid}`,
        imagePath: `images/${id}.jpg`,
        path: `/authors/${lowerCase(firstName)}-${lowerCase(lastName)}`,
      },
      seo: {
        title,
        metaTags: [
          {
            property: "description",
            content: casual.description,
          },
          {
            property: "og:title",
            content: title,
          },
        ]
      },
    }
  })
