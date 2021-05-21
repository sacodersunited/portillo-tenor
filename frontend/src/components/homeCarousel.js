import React from "react"
import { Carousel } from "react-bootstrap"
import UseCarousel from "../hooks/use-Carousel"
import { css, cx } from "@emotion/react"

const HomeCarousel = () => {
  const carouselPhotos = UseCarousel()
  return (
    <Carousel indicators={false} controls={false}>
      {carouselPhotos &&
        carouselPhotos.map(photo => (
          <Carousel.Item key={photo.id}>
            <img className="d-block w-100" src={photo.image} alt={photo.name} />
            {photo.caption && (
              <Carousel.Caption>
                <p
                  className="display-4"
                  css={css`
                    font-family: "Pacifico";
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
