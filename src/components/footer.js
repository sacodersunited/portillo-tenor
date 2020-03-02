import React from "react"
import { Navbar, Container, Col, Row } from "react-bootstrap"
import { Link } from "gatsby"
import { FaFacebookF } from "react-icons/fa"
import { css } from "@emotion/core"

const Footer = () => (
  <>
    <Navbar
      bg="primary"
      variant="dark"
      className="pt-5 pb-5"
      css={css`
        background-color: #2f124d !important;
      `}
    >
      <Container>
        <Row>
          <Col md={4}>
            <Link to="/">
              <Navbar.Brand>Threads of Love</Navbar.Brand>
            </Link>
            <p className="text-white">
              {" "}
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org" className="text-white">
                Gatsby
              </a>
            </p>
          </Col>
          <Col md={2} className="text-white">
            <Link className="text-white nav-link" to="/about">
              About Us
            </Link>
            <Link className="text-white nav-link" to="/get-involved">
              Volunteer
            </Link>
            <Link className="text-white nav-link" to="/donate">
              Donate
            </Link>
          </Col>
          <Col md={2} className="text-white">
            <a className="text-white nav-link" href="https://facebook.com">
              <FaFacebookF /> Facebook
            </a>
          </Col>
          <Col md={4} className="text-white">
            <address>
              2477 N Loop 1604 East, San Antonio, TX 78232 <br />
              c/o Linda Coward
            </address>

            <a href="mailto:threadsoflove@gmail.com" className="text-white">
              tolatcbc@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </Navbar>
    <nav
      className="navbar navbar-expand navbar-dark bg-primary"
      css={css`
        background-color: #2f124d !important;
      `}
    >
      <a href="https://sacodersunited.com" className="navbar-brand">
        ©sacodersunited
      </a>
    </nav>
  </>
)
export default Footer
