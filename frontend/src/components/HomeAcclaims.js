import React from "react"
import { Carousel } from "react-bootstrap"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "gatsby"
import UseFeaturedAcclaims from "../hooks/use-FeaturedAcclaims"
import { css } from "@emotion/react"

export default function HomeAcclaims() {
  const acclaims = UseFeaturedAcclaims()

  return (
    <React.Fragment>
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
                    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
                      font-size: 18px;
                    }
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
