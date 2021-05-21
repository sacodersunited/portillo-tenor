import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import Logo from "../images/logo.svg"
import { css } from "@emotion/core"

const Header = ({ siteTitle }) => (
  <Navbar
    bg="dark"
    variant="dark"
    expand="lg"
    sticky="top"
    css={css`
      min-height: 90px;
    `}
  >
    <Container>
      <Link to="/">
        <Navbar.Brand>
          <img
            src={Logo}
            width="340"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Link to="/biography" className="nav-link" activeClassName="active">
            Biography
          </Link>
          <Link to="/acclaims" className="nav-link" activeClassName="active">
            Acclaims
          </Link>
          <Link to="/calendar" className="nav-link" activeClassName="active">
            Calendar
          </Link>
          <Link to="/media" className="nav-link" activeClassName="active">
            Media
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
