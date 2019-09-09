import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { name, id } = data.series
  return (
    <Layout>
      <h2>
        {name} ({id})
      </h2>
      <Link to="/">{"Back"}</Link>
    </Layout>
  )
}

export const query = graphql`
  query SeriesDetails($seriesId: String!) {
    series(id: { eq: $seriesId }) {
      id
      name
    }
  }
`
