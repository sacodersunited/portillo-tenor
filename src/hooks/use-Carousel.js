import { graphql, useStaticQuery } from "gatsby"

const UseCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allCloudinaryMedia(limit: 10, filter: { tags: { eq: "carousel" } }) {
        edges {
          node {
            id
            secure_url
          }
        }
      }
    }
  `)

  return data.allCloudinaryMedia.edges.map(carouselItem => ({
    id: carouselItem.node.id,
    secureUrl: carouselItem.node.secure_url,
  }))
}

export default UseCarousel
