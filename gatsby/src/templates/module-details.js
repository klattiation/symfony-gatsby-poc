import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { content } = data.module
  return (
    <Layout>
      <h2>{content.title}</h2>
      <h3>{content.subline}</h3>
      <p>{content.description}</p>
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
        title
        imagePath
        description
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
