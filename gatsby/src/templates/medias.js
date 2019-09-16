import React from "react"
import { graphql, Link } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"

const getTitle = data => get(data, "corePageMedias.content.title")
const getMedias = data => get(data, "corePageMedias.content.medias", [])

export default ({ data }) => (
  <Layout>
    <section>
      <h2>{getTitle(data)}</h2>
      <ul>
        {getMedias(data).map(({ id, path, content }) => (
          <li key={id}>
            <Link to={path}>
              <h3>{content.title}</h3>
              <p>{content.subline}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    corePageMedias {
      seo {
        title
        metaTags {
          property
          content
        }
      }
      path
      content {
        title
        tagsTitle
        tags {
          title
          id
        }
        sortLabelDate
        sortLabelAlpha
        sortLabel
        sort
        order
        modules {
          id
          content {
            name
          }
        }
        medias {
          path
          id
          content {
            title
            subline
            imagePath
          }
        }
        authors {
          id
          content {
            lastName
            type
            firstName
            organisationName
          }
        }
      }
    }
  }
`
