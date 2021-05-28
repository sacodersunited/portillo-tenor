import { graphql, useStaticQuery } from "gatsby"

const UseCarousel = () => {
  const data = useStaticQuery(graphql`
    query HomeCarousel {
      allStrapiCarousel {
        nodes {
          strapiId
          caption
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1440
                  quality: 100
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  return data.allStrapiCarousel.nodes.map(carouselItem => ({
    id: carouselItem.strapiId,
    caption: carouselItem.caption,
    image: carouselItem.image.localFile.childImageSharp.gatsbyImageData,
  }))
}

export default UseCarousel
