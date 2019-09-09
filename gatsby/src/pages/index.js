import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>All my series</h1>
    <ul>
      {data.allSeries.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.url}>{node.name}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allSeries {
      edges {
        node {
          id
          name
          url
        }
      }
    }
  }
`
