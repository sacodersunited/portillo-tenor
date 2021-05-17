import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/backgroundSection"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Col, Row, Card } from "react-bootstrap"
import UsePressFeature from "../hooks/use-PressFeature"
import UseAcclaims from "../hooks/use-Acclaims"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/core"

const PressCard = ({ data }) => (
  <React.Fragment>
    <Col md={4}>
      <Image
        className="rounded mx-auto d-block"
        fluid={data.image}
        alt={data.reviewer}
        css={css`
          min-height: 240px;
          width: 354px;
          position: relative;
          margin-bottom: 24px;
        `}
      />
    </Col>
    <Col md={{ span: 6, offset: 1 }}>
      <Card>
        <Card.Body>
          <Card.Text className="text-secondary font-italic">
            {data.snippet}
          </Card.Text>
          <Card.Link href={data.link} target="_blank">
            -{data.reviewer}
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  </React.Fragment>
)

const Acclaims = () => {
  const pressFeatures = UsePressFeature()
  const {
    allStrapiAcclaim: { group },
  } = UseAcclaims()

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
      <SEO title="David Portillo tenor acclaims awards recognition" />
      <BackgroundSection title="Acclaims" fluid={imageData} />
      <Container>
        <h2 className="text-center mb-5">Press Features</h2>
        {pressFeatures.map(pressFeature => (
          <article className="mb-5">
            <Row key={pressFeature.id}>
              <PressCard data={pressFeature} />
            </Row>
          </article>
        ))}
        <h2 className="text-center mb-5">Acclaims</h2>
        <div className="section acclaims">
          {group.map(role => (
            // this level for role + thumbnail
            <Row className="mb-5">
              <Col md={4}>
                <BackgroundImage
                  className="mx-auto d-block mb-5"
                  fluid={
                    role.nodes[0]["acclaim_thumbnail"].thumbnail.childImageSharp
                      .fluid
                  }
                  alt={role.nodes[0]["acclaim_thumbnail"].role}
                  css={css`
                    background-position: center center;
                    background-repeat: none;
                    background-size: cover;
                    color: whitesmoke;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 24px;
                    min-height: 240px;
                    width: 354px;
                    position: relative;
                  `}
                >
                  <div
                    className="role-bg"
                    css={css`
                      position: absolute;
                      bottom: 0;
                      background: rgba(0, 0, 0, 0.8);
                      width: 100%;
                      color: #e1dfd3;
                    `}
                  >
                    <h4 className="text-center">
                      {role.nodes[0]["acclaim_thumbnail"].role}
                    </h4>
                  </div>
                </BackgroundImage>
              </Col>
              <Col md={{ span: 6, offset: 1 }}>
                {role.nodes.map(review => (
                  // this level for reviews
                  <Card>
                    <Card.Body>
                      <Card.Text className="text-secondary font-italic">
                        {review.snippet}
                      </Card.Text>
                      <Card.Link href={review.link} target="_blank">
                        -{review.reviewer}
                      </Card.Link>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export default Acclaims
