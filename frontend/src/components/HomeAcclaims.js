import React from "react"
import { Container, Carousel } from "react-bootstrap"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "gatsby"
import UseFeaturedAcclaims from "../hooks/use-FeaturedAcclaims"
import { css, cx } from "@emotion/react"

export default function HomeAcclaims() {
  const acclaims = UseFeaturedAcclaims()

  return (
    <React.Fragment>
      <Container>
        {/* <h2
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
        </h2> */}
      </Container>
      <Carousel indicators={true} controls={false}>
        {acclaims.map(acclaim => (
          <Carousel.Item
            key={acclaim.id}
            style={{
              minHeight: "260px",
              padding: "48px 0",
              backgroundColor: "#262B2E",
            }}
          >
            <a href={acclaim.link} target="_blank" rel="noreferrer">
              <Carousel.Caption>
                <p
                  css={css`
                    color: white;
                    font-size: 24px;
                    display: flex;
                    align-items: center;
                    font-style: italic;
                  `}
                >
                  {acclaim.snippet}
                </p>
                <p style={{ color: "#e58e1a" }}>- {acclaim.reviewer}</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
      <Link className="text-center d-block h4 mt-5 mb-5" to="/acclaims">
        View Acclaims
        <FaChevronRight />
      </Link>
    </React.Fragment>
  )
}
