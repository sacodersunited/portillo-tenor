import React from "react"
import { Carousel } from "react-bootstrap"
import UseCarousel from "../hooks/use-Carousel"
import Img from "gatsby-image"

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
                <p className="display-4">{photo.caption}</p>
              </Carousel.Caption>
            )}
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default HomeCarousel
