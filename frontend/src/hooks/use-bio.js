import { graphql, useStaticQuery } from "gatsby"

const UseBio = () => {
  const data = useStaticQuery(graphql`
    query BioPage {
      strapiBiography {
        twitter
        facebook
        instagram
        bio_pdf {
          localFile{
            publicURL
          }
        }
        bio_pic {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 700
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        description
      }
    }
  `)

  return data
}

export default UseBio
