import React from "react"
import { Container } from "react-bootstrap"
import { Row, Col, ResponsiveEmbed } from "react-bootstrap"
import { Link } from "gatsby"
import { FaChevronRight } from "react-icons/fa"
import { css, cx } from "@emotion/react"

export default function HomeMedia() {
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
            <iframe
              title="vimeo video of David Portillo tenor"
              className="embed-responsive-item"
              src="https://player.vimeo.com/video/154792661?title=0&byline=0&portrait=0"
              width="760"
              height="427"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            ></iframe>
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
