import React from "react"
import { Carousel } from "react-bootstrap"
import UseCarousel from "../hooks/use-Carousel"

const HomeCarousel = () => {
  const carouselPhotos = UseCarousel()
  return (
    <Carousel indicators={false} controls={false}>
      {carouselPhotos.map(photo => (
        <Carousel.Item key={photo.id}>
          <img className="d-block w-100" src={photo.secureUrl} alt={photo.id} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default HomeCarousel
