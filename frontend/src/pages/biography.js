import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UseBio from "../hooks/use-bio"
import { Container, Row, Col, Button } from "react-bootstrap"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"
import ReactMarkdown from "react-markdown"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

const Biography = () => {
  const bio = UseBio()

  return (
    <Layout>
      <SEO title="David Portillo Tenor biography" />

      <Container>
        <Row>
          <Col md={8}>
            <GatsbyImage image={bio.bioPic} alt="Biography picture" />
          </Col>
          <Col md={4}>
            <h2
              className="text-center bio-name"
              css={css`
                color: #666;
                font-family: "Open Sans", sans-serif;
                line-height: 64px;
                font-size: 42px;
                font-weight: 300;
                margin-top: 94px;
                text-transform: capitalize;
              `}
            >
              David Portillo
            </h2>
            <hr
              className="bio-hr mt-0 mb-0"
              css={css`
                width: 87px;
                border: 1px solid #e58e1a;
              `}
            />
            <h4
              className="text-center bio-role "
              css={css`
                color: #666;
                font-family: "Open Sans", sans-serif;
                line-height: 64px;
                font-size: 36px;
                font-weight: 600;
                font-style: italic;
              `}
            >
              tenor
            </h4>
            <Row className="text-center">
              <Col>
                <a href={bio.facebook}>
                  <FaFacebookSquare size={46} />
                </a>
              </Col>
              <Col>
                <a href={bio.twitter}>
                  <FaTwitterSquare size={46} />
                </a>
              </Col>
              <Col>
                <a href={bio.instagram}>
                  <FaInstagramSquare size={46} />
                </a>
              </Col>
            </Row>
            <a
              href={bio.bioPdf}
              className="mt-5 btn btn-outline-secondary btn-lg btn-block text-uppercase"
            >
              download biography
            </a>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={{ span: 8, offset: 2 }}>
            <h2
              className="text-center text-uppercase mt-3 mb-5"
              css={css`
                color: #2c3e50;
                font-family: "Merriweather", serif;
                line-height: 29px;
                font-size: 32px;
                font-weight: 400;
                text-transform: uppercase;
              `}
            >
              biography
            </h2>
            <ReactMarkdown children={bio.description} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Biography
