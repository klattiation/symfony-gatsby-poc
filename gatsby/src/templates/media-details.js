import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { id, content } = data.media
  return (
    <Layout>
      <h2>{content.title}</h2>
      <sub>{id}</sub>
      <p>{content.description}</p>
    </Layout>
  )
}

export const query = graphql`
  query MediaDetails($mediaId: String!) {
    media(id: { eq: $mediaId }) {
      id
      content {
        title
        description
      }
    }
  }
`
