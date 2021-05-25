import { graphql, useStaticQuery } from "gatsby"

const UseCarousel = () => {
  const data = useStaticQuery(graphql`
    query HomeCarousel {
      allStrapiCarousel {
        edges {
          node {
            strapiId
            caption
            image {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiCarousel.edges.map(carouselItem => ({
    id: carouselItem.node.strapiId,
    caption: carouselItem.node.caption,
    image: carouselItem.node.image.localFile.publicURL,
  }))
}

export default UseCarousel
