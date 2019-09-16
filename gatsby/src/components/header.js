import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import get from "lodash/get"

const linkStyle = {
  color: `white`,
  textDecoration: `none`,
  marginRight: `10px`,
}

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

const Header = ({ siteTitle }) => {
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
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to={getPathHome(data)} style={linkStyle}>
            {siteTitle}
          </Link>
        </h1>
        <div>
          {getLinks(data).map(({ label, path }, idx) => (
            <Link to={path} style={linkStyle} key={idx}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
