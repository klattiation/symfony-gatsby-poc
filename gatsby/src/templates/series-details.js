import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { name, imageUrl, id } = data.series
  return (
    <Layout>
      <h2>
        {name} ({id})
      </h2>
      <div>
        <img src={imageUrl} />
      </div>
      <Link to="/">{"Back"}</Link>
    </Layout>
  )
}

export const query = graphql`
  query SeriesDetails($seriesId: String!) {
    series(id: { eq: $seriesId }) {
      id
      name
      imageUrl
    }
  }
`
