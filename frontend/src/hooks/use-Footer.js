import { graphql, useStaticQuery } from "gatsby"

const UseFooter = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      strapiFooter {
        strapiId
        author
        caption
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 1440
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  const footer = {
    id: data.strapiFooter.strapiId,
    author: data.strapiFooter.author,
    caption: data.strapiFooter.caption,
    image: data.strapiFooter.image.localFile.childImageSharp.gatsbyImageData,
  }

  return footer
}
export default UseFooter
