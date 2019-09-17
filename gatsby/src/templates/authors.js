import React from "react"
import { graphql, Link } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"

const getTitle = data => get(data, "corePageAuthors.content.title")
const getAuthors = data =>
  get(data, "corePageAuthors.relationships.authors", [])
const getAuthorName = content =>
  content.type === "person"
    ? `${content.firstName} ${content.lastName}`
    : content.organisationName

export default ({ data }) => (
  <Layout>
    <section>
      <h2>{getTitle(data)}</h2>
      <ul>
        {getAuthors(data).map(({ id, path, content }) => (
          <li key={id}>
            <Link to={path}>
              <p>{getAuthorName(content)}</p>
              <sub>{content.position}</sub>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    corePageAuthors {
      seo {
        title
        metaTags {
          property
          content
        }
      }
      content {
        title
      }
      relationships {
        authors {
          id
          path
          content {
            firstName
            lastName
            organisationName
            type
            position
          }
        }
      }
    }
  }
`
