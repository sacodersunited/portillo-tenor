import React from "react"
import { Container } from "react-bootstrap"
import { Row, Col, ResponsiveEmbed } from "react-bootstrap"
import { Link } from "gatsby"
import { FaChevronRight } from "react-icons/fa"
import { css } from "@emotion/react"
import { graphql, useStaticQuery } from "gatsby"
import ReactPlayer from "react-player"

export default function HomeMedia() {
  const data = useStaticQuery(
    graphql`
      {
        strapiVideo(strapiId: { eq: 1 }) {
          strapiId
          title
          url
        }
      }
    `
  )

  return (
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
        Media
      </h2>
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <ResponsiveEmbed aspectRatio="16by9">
            <ReactPlayer
              url={data.strapiVideo.url}
              width="760"
              height="427"
              muted={false}
              controls={true}
            />
          </ResponsiveEmbed>
        </Col>
      </Row>
      <Link className="text-center d-block h4 mt-5" to="/media">
        View Media
        <FaChevronRight />
      </Link>
    </Container>
  )
}
