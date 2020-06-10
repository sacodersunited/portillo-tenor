import { graphql, useStaticQuery } from "gatsby"

const UseCarousel = () => {
  const data = useStaticQuery(graphql`
    query HomeCarousel {
      allStrapiCarousels(filter: { active: { eq: true } }) {
        edges {
          node {
            strapiId
            caption
            active
            image {
              childImageSharp {
                fluid(maxWidth: 1440, maxHeight: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiCarousels.edges.map(carouselItem => ({
    id: carouselItem.node.strapiId,
    caption: carouselItem.node.caption,
    active: carouselItem.node.active,
    image: carouselItem.node.image.childImageSharp.fluid,
  }))
}

export default UseCarousel
