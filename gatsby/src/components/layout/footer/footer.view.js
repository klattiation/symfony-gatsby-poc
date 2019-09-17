import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import get from "lodash/get"
import Link from "../../link"
import styles from "./footer.module.scss"

const getLinks = data => [
  {
    label: "Impressum",
    path: get(data, "corePageImprint.path"),
  },
  {
    label: "Datenschutz",
    path: get(data, "corePagePrivacy.path"),
  },
  {
    label: "Kontakt",
    path: get(data, "corePageAbout.path"),
  },
]

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      corePageImprint {
        path
      }
      corePagePrivacy {
        path
      }
      corePageAbout {
        path
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      {getLinks(data).map(({ label, path }, idx) => (
        <Link to={path} key={idx}>
          {label}
        </Link>
      ))}
    </footer>
  )
}

export default Footer
