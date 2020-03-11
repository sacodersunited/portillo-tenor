import React from "react"
import { Container, Carousel } from "react-bootstrap"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "gatsby"

export default function HomeAcclaims() {
  return (
    <section className="acclaims">
      <Container>
        <h2 className="text-center text-uppercase h1">Acclaims</h2>
      </Container>
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1400x200"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1400x200"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1400x200"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Link className="text-center d-block h4" to="/acclaims">
        View Acclaims
        <FaChevronRight />
      </Link>
    </section>
  )
}
