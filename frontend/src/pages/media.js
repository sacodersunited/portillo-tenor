import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/backgroundSection"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col, Card } from "react-bootstrap"
import { FaAmazon, FaApple, FaSpotify, FaGlobe } from "react-icons/fa"
import ReactPlayer from "react-player"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app
import "../css/media.css"

function Media() {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState([])
  const [photoIndex, setPhotoIndex] = useState(0)

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "media-header-bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
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
              localFile {
                publicURL
              }
            }
          }
        }

        photoalbum: allStrapiPhotoAlbum {
          nodes {
            image {
              name
              localFile {
                publicURL
              }
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

  function clickThumbnail(e, arrImages) {
    e.preventDefault()
    setIsOpen(!isOpen)

    setImages(arrImages)
  }

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  const featured = data.photoalbum.nodes.filter(album => album.strapiId === 21)

  return (
    <Layout isFullWidth>
      <SEO title="David Portillo tenor media, videos, pictures, and albums for sale" />
      <BackgroundSection title="Media" fluid={imageData} />

      <section className="media">
        <Container align="center">
          <Row style={{ justifyContent: "center" }}>
            <Col md={9} className="col-md-offset-2">
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
                <Col md={4} style={{ marginBottom: "30px" }} key={index}>
                  <div
                    className="embed-responsive embed-responsive-16by9"
                    style={{ maxHeight: "326px" }}
                  >
                    <ReactPlayer
                      url={video.url}
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
            {/* Merch */}
            {data.merch.nodes.map((merch, index) => {
              return (
                <Col
                  md={4}
                  className="text-left"
                  style={{ marginBottom: "10px" }}
                  key={index}
                >
                  <Card
                    border="primary"
                    style={{
                      width: "20rem",
                      minHeight: "690px",
                      marginBottom: "30px",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={merch.image.localFile.publicURL}
                      style={{ minHeight: "327px" }}
                      className="img-responsive center-block"
                    />
                    <Card.Body>
                      <Card.Title>{merch.title}</Card.Title>
                      <Card.Text>{merch.description}</Card.Text>
                      <Row>
                        <Col md={6}>
                          {merch.itunes !== "blank" ? (
                            <a
                              href={merch.itunes}
                              style={{ fontSize: "smaller" }}
                            >
                              <FaApple
                                size={16}
                                style={{ paddingRight: "5px" }}
                              />
                              Itunes
                            </a>
                          ) : null}
                        </Col>
                        <Col md={6}>
                          {merch.website !== "blank" ? (
                            <a
                              href={merch.website}
                              style={{ fontSize: "smaller" }}
                            >
                              <FaGlobe
                                size={16}
                                style={{ paddingRight: "5px" }}
                              />
                              Website
                            </a>
                          ) : null}
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
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
                        <Col md={6}>
                          {merch.spotify !== "blank" ? (
                            <a
                              href={merch.spotify}
                              style={{ fontSize: "smaller" }}
                            >
                              <FaSpotify
                                size={16}
                                style={{ paddingRight: "5px" }}
                              />
                              Spotify
                            </a>
                          ) : null}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
          <Row>
            {/* Featured Photo */}
            <Col md={12} style={{ marginBottom: "10px" }}>
              <img
                src={featured[0].image[0].localFile.publicURL}
                alt="photo album cover"
                style={{ borderRadius: "10px", width: "100%" }}
              ></img>
            </Col>

            {data.photoalbum.nodes.map((album, index) => {
              const foundThumb = album.image.filter(
                image => image.name.indexOf("thumb") > 0
              )
              const arrImages = album.image.map(img => {
                return img.localFile.publicURL
              })

              if (
                album.image === null ||
                album.image === undefined ||
                album.image.length == 0 ||
                album.title === "featured"
              ) {
                return null
              } else if (foundThumb.length > 0) {
                return (
                  <Col
                    md={4}
                    style={{ marginBottom: "10px", marginTop: "10px" }}
                    key={index}
                  >
                    <img
                      src={foundThumb[0].localFile.publicURL}
                      alt={album.title}
                      className="center-block img-responsive img-rounded pic-grid"
                      style={{
                        maxHeight: "233px",
                        borderRadius: "10px",
                      }}
                      onClick={e => clickThumbnail(e, arrImages)}
                    />
                    <h4
                      className="text-center image-title"
                      style={{ fontSize: "medium" }}
                    >
                      {album.title}
                    </h4>
                  </Col>
                )
              }
            })}

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + images.length - 1) % images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            )}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
export default Media
