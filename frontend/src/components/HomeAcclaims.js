import React from "react"
import { Container, Carousel } from "react-bootstrap"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "gatsby"
import UseFeaturedAcclaims from "../hooks/use-FeaturedAcclaims"

export default function HomeAcclaims() {
  const acclaims = UseFeaturedAcclaims()

  return (
    <>
      <Container>
        <h2 className="text-center text-uppercase h1">Acclaims</h2>
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
                <p>{acclaim.snippet}</p>
                <p style={{ color: "#e58e1a" }}>{acclaim.reviewer}</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
      <Link className="text-center d-block h4" to="/acclaims">
        View Acclaims
        <FaChevronRight />
      </Link>
    </>
  )
}
