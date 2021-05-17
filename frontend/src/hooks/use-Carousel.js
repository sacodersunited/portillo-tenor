import { graphql, useStaticQuery } from "gatsby"

const UseCarousel = () => {
  const data = useStaticQuery(graphql`
    query HomeCarousel {
      allStrapiCarousel(filter: { active: { eq: true } }) {
        edges {
          node {
            strapiId
            caption
            active
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
    active: carouselItem.node.active,
    image: carouselItem.node.image.localFile.publicURL,
  }))
}

export default UseCarousel
