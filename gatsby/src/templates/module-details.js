import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { id, content } = data.module
  return (
    <Layout>
      <h2>{content.name}</h2>
      <sub>{id}</sub>
      <p>{content.description}</p>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const query = graphql`
  query ModuleDetails($moduleId: String!) {
    module(id: { eq: $moduleId }) {
      id
      content {
        vimeoId
        subline
        name
        imagePath
        description
        chapters
        authorsDescription
        authors {
          content {
            firstName
            lastName
            imagePath
            organisationName
            type
          }
        }
      }
      seo {
        metaTags {
          content
          property
        }
        title
      }
    }
  }
`
