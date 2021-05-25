import { graphql, useStaticQuery } from "gatsby"

const UseBanner = () => {
  const data = useStaticQuery(graphql`
    query Banner {
      allStrapiBanner {
        nodes {
          strapiId
          title
          page
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 1440
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

  return data.allStrapiBanner.nodes.map(banner => ({
    id: banner.strapiId,
    title: banner.title,
    page: banner.page,
    image: banner.image.localFile.childImageSharp.gatsbyImageData,
  }))
}
export default UseBanner
