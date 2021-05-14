import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/backgroundSection"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { FaAmazon, FaApple, FaSpotify, FaGlobe } from "react-icons/fa"
import ReactPlayer from "react-player"
import "../css/media.css"

const Media = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "media-header-bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        videos: allStrapiVideo {
          nodes {
            id
            active
            title
            url
          }
        }

        merch: allStrapiMerch {
          nodes {
            id
            title
            strapiId
            website
            amazon
            itunes
            spotify
            description
            image {
              childImageSharp {
                fluid {
                  base64
                  originalImg
                  originalName
                }
                fixed {
                  src
                }
              }
            }
          }
        }

        photoalbum: allStrapiPhotoAlbum {
          nodes {
            image {
              name
              url
              formats {
                medium {
                  childImageSharp {
                    fixed {
                      src
                      base64
                    }
                  }
                }
              }
              mime
              size
            }
            title
            strapiId
            description
            id
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  console.log("data", data.merch.nodes)
  return (
    <Layout isFullWidth>
      <SEO title="David Portillo tenor media, videos, pictures, and albums for sale" />
      <BackgroundSection title="Media" fluid={imageData} />

      <section className="media">
        <Container align="center">
          <Row style={{ justifyContent: "center" }}>
            <Col
              md={9}
              className="col-md-offset-2"
              // style={{ marginBottom: "30px" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <ReactPlayer
                  url={data.videos.nodes[0].url}
                  width="760"
                  height="427"
                  muted={true}
                  controls={true}
                />
              </div>
            </Col>
          </Row>
          <Row>
            {data.videos.nodes.map((video, index) => {
              if (index === 0) {
                return null
              }
              return (
                <Col md={4} style={{ marginBottom: "30px" }}>
                  <div
                    className="embed-responsive embed-responsive-16by9"
                    style={{ height: "326px" }}
                  >
                    <ReactPlayer
                      url={video.url}
                      height="326"
                      controls
                      muted={true}
                      controls={true}
                    />
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            {/* <Col md={4} style={{ marginBottom: "30px" }}> */}

            {data.merch.nodes.map((merch, index) => {
              return (
                <Col
                  md={4}
                  className="text-left"
                  style={{ marginBottom: "10px" }}
                >
                  <img
                    src={merch.image.childImageSharp.fluid.originalImg}
                    style={{ minHeight: "327px" }}
                    className="img-responsive center-block"
                  />
                  <h5 className="text-left">{merch.title}</h5>
                  <section className="media-meta text-left">
                    <p>{merch.description}</p>
                  </section>
                  <Row>
                    <Col md={3}>
                      {merch.itunes !== "blank" ? (
                        <a href={merch.itunes} style={{ fontSize: "smaller" }}>
                          <FaApple size={16} style={{ paddingRight: "5px" }} />
                          Itunes
                        </a>
                      ) : null}
                    </Col>
                    <Col md={4}>
                      {merch.website !== "blank" ? (
                        <a href={merch.website} style={{ fontSize: "smaller" }}>
                          <FaGlobe size={16} style={{ paddingRight: "5px" }} />
                          Website
                        </a>
                      ) : null}
                    </Col>
                    <Col md={4}>
                      {merch.amazon !== "blank" ? (
                        <React.Fragment>
                          <a
                            href={merch.amazon}
                            style={{ fontSize: "smaller" }}
                          >
                            <FaAmazon
                              size={16}
                              style={{ paddingRight: "5px" }}
                            />
                            Amazon
                          </a>
                        </React.Fragment>
                      ) : null}
                    </Col>
                    <Col md={3}>
                      {merch.spotify !== "blank" ? (
                        <a href={merch.spotify} style={{ fontSize: "smaller" }}>
                          <FaSpotify
                            size={16}
                            style={{ paddingRight: "5px" }}
                          />
                          Spotify
                        </a>
                      ) : null}
                    </Col>
                  </Row>
                </Col>
              )
            })}
            {/* </Col> */}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
export default Media
