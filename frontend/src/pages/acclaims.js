import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/backgroundSection"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Col, Row, Card } from "react-bootstrap"
import UsePressFeature from "../hooks/use-PressFeature"
import UseAcclaims from "../hooks/use-Acclaims"
import Image from "gatsby-image"

const PressCard = ({ data }) => {
  return (
    <React.Fragment>
      <Col md={4}>
        <Image fluid={data.image} alt={data.reviewer} />
      </Col>
      <Col md={{ span: 7, offset: 1 }}>
        <Card>
          <Card.Body>
            <Card.Text>{data.snippet}</Card.Text>
            <Card.Link href={data.link} target="_blank">
              -{data.reviewer}
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  )
}

const Acclaims = () => {
  const pressFeatures = UsePressFeature()
  const acclaims = UseAcclaims()

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "acclaim-header-bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <Layout isFullWidth>
      <BackgroundSection title="Acclaims" fluid={imageData} />
      <SEO title="David Portillo tenor acclaims awards recognition" />
      <Container>
        <h2 className="text-center mb-5">Press Features</h2>
        {pressFeatures.map(pressFeature => (
          <Row className="mb-5" key={pressFeature.id}>
            <PressCard data={pressFeature} />
          </Row>
        ))}
        <h2 className="text-center mb-5">Acclaims</h2>
        {/* TODO: Add Acclaims grouped by role */}
        <pre>{JSON.stringify(acclaims, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default Acclaims
