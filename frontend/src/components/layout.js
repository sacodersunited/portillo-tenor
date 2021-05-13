/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

const Layout = ({ children, isFullWidth = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      {isFullWidth ? (
        <React.Fragment>
          <main>{children}</main>

          <Footer />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Container>
            <main>{children}</main>
          </Container>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
