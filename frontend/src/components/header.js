import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import Logo from "../images/logo.svg"
import { css } from "@emotion/react"
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa"
import UseSocial from "../hooks/use-Social"

const Header = ({ siteTitle }) => {
  const social = UseSocial()

  return (
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
              css={css`
                @media only screen and (min-width: 320px) {
                  width: 220px;
                }
              `}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
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
          <Nav>
            <Nav.Link href={social.strapiBiography.facebook}>
              <FaFacebookSquare
                size={32}
                css={css`
                  :hover {
                    color: white;
                  }
                `}
              />
            </Nav.Link>
            <Nav.Link href={social.strapiBiography.twitter}>
              <FaTwitterSquare
                size={32}
                css={css`
                  margin-left: 10px;
                  &:hover {
                    color: white;
                  }
                `}
              />
            </Nav.Link>
            <Nav.Link href={social.strapiBiography.instagram}>
              <FaInstagram
                size={32}
                css={css`
                  margin-left: 10px;
                  &:hover {
                    color: white;
                  }
                `}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
