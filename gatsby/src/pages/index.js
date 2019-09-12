import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>All medias</h1>
    <ul>
      {data.allMedia.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.path}>{node.content.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMedia {
      edges {
        node {
          id
          content {
            title
          }
          path
        }
      }
    }
  }
`
