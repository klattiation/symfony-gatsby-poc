import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import get from "lodash/get"

const linkStyle = {
  color: `white`,
  textDecoration: `none`,
  marginRight: `10px`,
}

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

const Footer = ({ siteTitle }) => {
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
    <footer
      style={{
        background: `rebeccapurple`,
        marginTop: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        {getLinks(data).map(({ label, path }, idx) => (
          <Link to={path} style={linkStyle} key={idx}>
            {label}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer
