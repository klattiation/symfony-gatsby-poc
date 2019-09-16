import React from "react"
import { graphql, Link } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"

const getModules = data => get(data, "corePageHome.content.modules", [])
const getMedias = data => get(data, "corePageHome.content.medias", [])
const getTitle = data => get(data, "corePageHome.content.title")
const getDescription = data => get(data, "corePageHome.content.description")
const getMediasTitle = data => get(data, "corePageHome.content.mediasTitle")

export default ({ data }) => (
  <Layout>
    <section>
      <ul>
        {getModules(data).map(({ id, path, content }) => (
          <li key={id}>
            <Link to={path}>
              <h3>{content.name}</h3>
              <p>{content.subline}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2>{getTitle(data)}</h2>
      <p>{getDescription(data)}</p>
    </section>
    <section>
      <h2>{getMediasTitle(data)}</h2>
      <ul>
        {getMedias(data).map(({ id, path, content }) => (
          <li key={id}>
            <h3>{content.title}</h3>
            <p>{content.subline}</p>
            <Link to={path}>{"Mehr erfahren"}</Link>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    corePageHome {
      content {
        title
        description
        mediasTitle
        medias {
          id
          path
          content {
            title
            subline
            imagePath
            description
          }
        }
        modules {
          id
          path
          content {
            name
            subline
            imagePath
          }
        }
      }
      path
    }
  }
`
