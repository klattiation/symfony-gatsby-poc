import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"

const getTitle = data => get(data, "corePagePrivacy.content.title")
const getDescription = data => get(data, "corePagePrivacy.content.description")

export default ({ data }) => (
  <Layout>
    <h1>{getTitle(data)}</h1>
    <p>{getDescription(data)}</p>
  </Layout>
)

export const query = graphql`
  query {
    corePagePrivacy {
      content {
        title
        description
      }
    }
  }
`
