import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UseBio from "../hooks/use-bio"
import Image from "gatsby-image"
import { Container, Row, Col, Button } from "react-bootstrap"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"
import ReactMarkdown from "react-markdown"

const Biography = () => {
  const { strapiBiography } = UseBio()
  return (
    <Layout>
      <SEO title="David Portillo Tenor biography" />
      {/* <pre>{JSON.stringify(strapiBiography, null, 2)}</pre> */}
      <Container>
        <Row>
          <Col md={8}>
            <Image
              fluid={strapiBiography.bio_pic.childImageSharp.fluid}
              alt="Biography picture"
            />
          </Col>
          <Col md={4}>
            <h2 className="text-center bio-name">David Portillo</h2>
            <hr className="bio-hr" />
            <h4 className="text-center bio-role">tenor</h4>
            <Row>
              <Col>
                <a href={strapiBiography.facebook}>
                  <FaFacebookSquare size={46} />
                </a>
              </Col>
              <Col>
                <a href={strapiBiography.twitter}>
                  <FaTwitterSquare size={46} />
                </a>
              </Col>
              <Col>
                <a href={strapiBiography.instagram}>
                  <FaInstagramSquare size={46} />
                </a>
              </Col>
            </Row>
            <a href={strapiBiography.bio_pdf.publicURL}>
              <Button className="mt-5" variant="outline-primary" block>
                download biography
              </Button>
            </a>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={{ span: 8, offset: 2 }}>
            <h1 className="text-center">BIOGRAPHY</h1>
            <ReactMarkdown source={strapiBiography.description} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Biography
