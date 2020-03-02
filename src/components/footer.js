import React from "react"
import { Navbar, Container, Col, Row } from "react-bootstrap"
import { Link } from "gatsby"
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { css } from "@emotion/core"

const Footer = () => (
  <>
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
          <Col md={4}>
            <h4>David Portillo Tenor</h4>
            <p>All Rights Reserved</p>
            <p>
              {" "}
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
          </Col>
          <Col
            md={5}
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
          <Col md={3}>
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
