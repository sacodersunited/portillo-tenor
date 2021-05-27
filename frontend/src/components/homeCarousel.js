import React from "react"
import { Carousel } from "react-bootstrap"
import UseCarousel from "../hooks/use-Carousel"
import { css } from "@emotion/react"
import { GatsbyImage } from "gatsby-plugin-image"

const HomeCarousel = () => {
  const carouselPhotos = UseCarousel()

  return (
    <Carousel indicators={false} controls={false}>
      {carouselPhotos &&
        carouselPhotos.map(photo => (
          <Carousel.Item key={photo.id}>
            <GatsbyImage
              className="d-block w-100"
              image={photo.image}
              alt={photo.caption}
            />

            {photo.caption && (
              <Carousel.Caption>
                <p
                  className="display-4"
                  css={css`
                    font-family: "Pacifico";
                    @media only screen and (max-width: 740px) {
                      font-size: 22px;
                    }
                  `}
                >
                  {photo.caption}
                </p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default HomeCarousel
