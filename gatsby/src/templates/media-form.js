import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"

const getTitle = data => get(data, "corePageMediaForm.content.title")
const getDescription = data =>
  get(data, "corePageMediaForm.content.description")

export default ({ data }) => (
  <Layout>
    <section>
      <h2>{getTitle(data)}</h2>
      <p>{getDescription(data)}</p>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    corePageMediaForm {
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
        description
      }
    }
  }
`
