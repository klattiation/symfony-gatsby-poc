import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import get from "lodash/get"
import Link from "../../link"
import styles from "./header.module.scss"

const getPathHome = data => get(data, "corePageHome.path")

const getLinks = data => [
  {
    label: "Autor*innen",
    path: get(data, "corePageAuthors.path"),
  },
  {
    label: "Medienübersicht",
    path: get(data, "corePageMedias.path"),
  },
  {
    label: "Einreichen",
    path: get(data, "corePageMediaForm.path"),
  },
]

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      corePageHome {
        path
      }
      corePageAuthors {
        path
      }
      corePageMedias {
        path
      }
      corePageMediaForm {
        path
      }
    }
  `)

  return (
    <header className={styles.header}>
      <h1>
        <Link to={getPathHome(data)}>{"Virtual Academy"}</Link>
      </h1>
      <div>
        {getLinks(data).map(({ label, path }, idx) => (
          <Link to={path} key={idx}>
            {label}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header
