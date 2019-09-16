import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { firstName, lastName, position } = data.author.content
  return (
    <Layout>
      <section>
        <h2>
          {firstName} {lastName}
        </h2>
        <sub>{position}</sub>
      </section>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const query = graphql`
  query AuthorDetails($authorId: String!) {
    author(id: { eq: $authorId }) {
      id
      content {
        firstName
        lastName
        position
      }
    }
  }
`
