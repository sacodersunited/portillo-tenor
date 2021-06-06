import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/backgroundSection"
import { Container, Col, Row, Card } from "react-bootstrap"
import UsePressFeature from "../hooks/use-PressFeature"
import UseAcclaims from "../hooks/use-Acclaims"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import UseBanner from "../hooks/use-Banner"
import { getImage } from "gatsby-plugin-image"
import { Slide } from "react-reveal"

const AcclaimThumbnail = styled.div`
  background-image: url(${props => props.imgsrc || null});
  border-radius: 0 !important;
  min-height: 240px;
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
`

const PressCard = ({ data }) => (
  <React.Fragment>
    <Col md={4}>
      <img
        className="rounded mx-auto d-block"
        src={data.image}
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
      <Slide right>
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
      </Slide>
    </Col>
  </React.Fragment>
)

const Acclaims = () => {
  const banner = UseBanner()
  const pressFeatures = UsePressFeature()
  const {
    allStrapiAcclaim: { group },
  } = UseAcclaims()

  const acclaimData = banner.filter(acclaim => acclaim.page === "acclaims")
  const image = getImage(acclaimData[0].image)

  return (
    <Layout isFullWidth>
      <SEO title="David Portillo tenor acclaims awards recognition" />
      <BackgroundSection
        image={image}
        Tag="section"
        title={acclaimData[0].title}
      />
      <Container>
        <h2
          className="text-center text-uppercase h1"
          css={css`
            color: #2c3e50;
            font-family: "Merriweather", serif;
            font-size: 36px;
            font-weight: 400;
            line-height: 60px;
            text-transform: uppercase;
            margin-top: 0;
            margin-bottom: 48px;
          `}
        >
          Press Features
        </h2>
        {pressFeatures.map(pressFeature => (
          <article className="mb-5" key={pressFeature.id}>
            <Row key={pressFeature.id}>
              <PressCard data={pressFeature} />
            </Row>
          </article>
        ))}
        <h2
          className="text-center text-uppercase h1"
          css={css`
            color: #2c3e50;
            font-family: "Merriweather", serif;
            font-size: 36px;
            font-weight: 400;
            line-height: 60px;
            text-transform: uppercase;
            margin-top: 0;
            margin-bottom: 48px;
          `}
        >
          Acclaims
        </h2>
        <div className="section acclaims">
          {group.map(role => (
            // this level for role + thumbnail
            <Row className="mb-5" key={role.id}>
              <Col md={4}>
                <AcclaimThumbnail
                  imgsrc={
                    role.nodes[0]["acclaim_thumbnail"].thumbnail.localFile
                      .publicURL
                  }
                  className="mx-auto d-block mb-5"
                  alt={role.nodes[0]["acclaim_thumbnail"].role}
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
                </AcclaimThumbnail>
              </Col>
              <Col md={{ span: 6, offset: 1 }}>
                {role.nodes.map(review => (
                  // this level for reviews
                  <Slide key={review.id} right>
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
                  </Slide>
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
