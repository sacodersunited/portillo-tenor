import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/backgroundSection"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col, Card } from "react-bootstrap"
import { FaAmazon, FaApple, FaSpotify, FaGlobe } from "react-icons/fa"
import ReactPlayer from "react-player"
import Lightbox from "react-image-lightbox"
import { GatsbyImage } from "gatsby-plugin-image"
import UseBanner from "../hooks/use-Banner"
import { getImage } from "gatsby-plugin-image"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app
import "../css/media.css"
import { css } from "@emotion/react"

function Media({ data }) {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState([])
  const [imagesCaptions, setImagesCaptions] = useState([])
  const [photoIndex, setPhotoIndex] = useState(0)
  const banner = UseBanner()
  const acclaimData = banner.filter(acclaim => acclaim.page === "media")
  const image = getImage(acclaimData[0].image)

  function clickThumbnail(e, arrImages, arrImagesCaptions) {
    e.preventDefault()
    setIsOpen(!isOpen)

    setImages(arrImages)
    setImagesCaptions(arrImagesCaptions)
  }

  const featured = data.photoalbum.nodes.filter(album => album.strapiId === 21)

  return (
    <Layout isFullWidth>
      <SEO title="David Portillo tenor media, videos, pictures, and albums for sale" />
      <BackgroundSection
        image={image}
        Tag="section"
        title={acclaimData[0].title}
      />

      <section className="media">
        <Container align="center">
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
            Videos
          </h2>
          <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
            <Col md={9} className="col-md-offset-2">
              <div className="embed-responsive embed-responsive-16by9">
                <ReactPlayer
                  url={data.featuredVideo.url}
                  width="760"
                  height="427"
                  muted={false}
                  controls={true}
                />
              </div>
            </Col>
          </Row>
          <Row>
            {data.videos.nodes.map((video, index) => {
              // Do not show the featured video again
              if (video.strapiId === 1) {
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
                      muted={false}
                      controls={true}
                      height="0px"
                    />
                  </div>
                </Col>
              )
            })}
          </Row>
          {/* Merch */}
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
            Merchandise
          </h2>
          <Row>
            {data.merch.nodes.map((merch, index) => {
              return (
                <Col
                  md={4}
                  className="text-left"
                  style={{ marginBottom: "10px" }}
                  key={index}
                >
                  <Card
                    style={{
                      width: "20rem",
                      minHeight: "690px",
                      marginBottom: "30px",
                      borderColor: "rgba(0,0,0,.1)!important",
                    }}
                  >
                    <GatsbyImage
                      image={
                        merch.image.localFile.childImageSharp.gatsbyImageData
                      }
                      alt="Biography picture"
                      style={{ minHeight: "327px" }}
                      className="img-responsive center-block"
                    />
                    <Card.Body>
                      <Card.Title style={{ minHeight: "47px" }}>
                        {merch.title}
                      </Card.Title>
                      <Card.Text style={{ minHeight: "260px" }}>
                        {merch.description}
                      </Card.Text>
                      <Row style={{ minHeight: "23.64px" }}>
                        {merch.itunes !== "blank" ? (
                          <Col>
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
                          </Col>
                        ) : null}
                        {merch.website !== "blank" ? (
                          <Col>
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
                          </Col>
                        ) : null}

                        {merch.amazon !== "blank" ? (
                          <Col>
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
                          </Col>
                        ) : null}
                        {merch.spotify !== "blank" ? (
                          <Col>
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
                          </Col>
                        ) : null}
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
          {/* Featured Photo */}
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
            Photo Albums
          </h2>
          <Row>
            <Col md={12} style={{ marginBottom: "10px" }}>
              <GatsbyImage
                image={
                  featured[0].image[0].localFile.childImageSharp.gatsbyImageData
                }
                style={{ borderRadius: "10px", width: "100%" }}
                alt="Featured Photo album image"
              />
            </Col>

            {data.photoalbum.nodes.map((album, index) => {
              const foundThumb = album.image.filter(
                image => image.name.indexOf("thumb") > 0
              )

              const arrImagesCaptions = album.image
                .filter(image => image.name.indexOf("thumb") === -1)
                .map(img => {
                  return img.caption
                })

              const arrImages = album.image
                .filter(image => image.name.indexOf("thumb") === -1)
                .map(img => {
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
                    <GatsbyImage
                      image={
                        foundThumb[0].localFile.childImageSharp.gatsbyImageData
                      }
                      className="center-block img-responsive img-rounded pic-grid"
                      alt={album.title}
                      css={css`
                        max-height: 233px;
                        border-radius: 10px;
                        transition: transform 0.5s ease;
                        &:hover {
                          transform: scale(1.2);
                          cursor: pointer;
                        }
                      `}
                      onClick={e =>
                        clickThumbnail(e, arrImages, arrImagesCaptions)
                      }
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
                imageCaption={imagesCaptions[photoIndex]}
              />
            )}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query {
    videos: allStrapiVideo(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        id
        title
        url
      }
    }

    featuredVideo: strapiVideo(strapiId: { eq: 1 }) {
      strapiId
      title
      url
    }

    merch: allStrapiMerch(sort: { order: DESC, fields: strapiId }) {
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
            childImageSharp {
              gatsbyImageData(
                width: 318
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }

    photoalbum: allStrapiPhotoAlbum {
      nodes {
        image {
          name
          caption
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
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
export default Media
