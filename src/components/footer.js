import React from "react"
import { Link } from "gatsby"
import { Navbar, Container, Col, Row } from "react-bootstrap"
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { css } from "@emotion/core"

const Footer = () => (
  <>
    <div
      css={css`
        background-image: url(https://res.cloudinary.com/davidportillo-tenor/image/upload/v1583174212/homepage/subfooter-bg2_iweejs.png);
        min-height: 500px;
        padding-top: 220px;
        margin-top: 96px;
      `}
    >
      <Container className="text-center text-white p-1">
        <h2>Music is the universal language of mankind</h2>
        <h4>- Henry Wadsworth Longfellow</h4>
      </Container>
    </div>
    <Navbar
      bg="dark"
      variant="dark"
      className="pt-5 pb-5 text-white-50"
      css={css`
        a {
          color: #818386;
        }
      `}
    >
      <Container>
        <Row>
          <Col md={3}>
            <Link to="/">
              <h4>David Portillo</h4>
            </Link>
            <p>All Rights Reserved</p>
            <p>
              {" "}
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
          </Col>
          <Col>
            <h4>Links</h4>
            <Link to="/biography" className="text-white nav-link">
              Biography
            </Link>
            <Link to="/acclaims" className="text-white nav-link">
              Acclaims
            </Link>
            <Link to="/calendar" className="text-white nav-link">
              Calendar
            </Link>
            <Link to="/media" className="text-white nav-link">
              Media
            </Link>
          </Col>
          <Col
            md={4}
            css={css`
              line-height: 16px;
            `}
          >
            <h4>Address</h4>
            <address class="site-footer-address site-footer-p">
              <a href="http://imgartists.com/artist/david_portillo">
                IMG Artists, New York
              </a>
              <br /> Pleiades House 7 West 54th St
              <br /> New York, NY 10019 US
              <br /> <a href="tel:+1 212 994 3500">Tel: +1 212 994 3500</a>
              <br />
              <br /> Contact
              <br />
              <a href="mailto:ssnook@imgartists.com">
                Sam Snook, General Management
              </a>
              <br />
              <a href="tel:+1 212 994 3500">Tel: +1 212 994 3500</a>
              <br />
              <br />
              <a href="mailto:rjaroff@imgartists.com">
                Romana Jaroff, US Concert/Recital Booking
              </a>
              <br />
              <a href="tel:+1 212 994 3518 ">Tel: +1 212 994 3518 </a>
            </address>

            <address class="site-footer-address site-footer-p">
              <a href="http://www.harrisonparrott.com/artist/profile/david-portillo">
                Harrison Parrott, London
              </a>
              <br /> The Ark, 201 Talgarth Road
              <br /> London, UK W6 8BJ
              <br />
              <a href="tel:++44 (0) 20 7229 9166">Tel: +44 (0) 20 7229 9166</a>
              <br />
              <br /> Contact
              <br />
              <a href="mailto:ian.stones@harrisonparrott.co.uk">
                Ian Stones, General Management
              </a>
              <br />
              <a href="tel:+44 (0)20 3725 9104">Tel: +44 (0) 20 3725 9104</a>
              <br />
              <br />
              <a href="mailto:alice.jones@harrisonparrott.co.uk">
                Alice Jones, Associate
              </a>
              <br />
              <a href="tel:+44 (0)20 3725 9181">Tel: +44 (0) 20 3725 9181</a>
            </address>
          </Col>
          <Col>
            <h4>Connect</h4>
            <a href="https://www.facebook.com/davidportillotenor">
              <FaFacebookSquare
                size={36}
                css={css`
                  :hover {
                    color: white;
                  }
                `}
              />
            </a>
            <a href="https://twitter.com/elportillo">
              <FaTwitterSquare
                size={36}
                css={css`
                  margin-left: 10px;
                  &:hover {
                    color: white;
                  }
                `}
              />
            </a>
            <a href="https://www.instagram.com/porttenor/">
              <FaInstagram
                size={36}
                css={css`
                  margin-left: 10px;
                  &:hover {
                    color: white;
                  }
                `}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </Navbar>
    <Navbar bg="dark" variant="dark">
      <a href="https://sacodersunited.com" className="navbar-brand">
        ©sacodersunited
      </a>
    </Navbar>
  </>
)
export default Footer
