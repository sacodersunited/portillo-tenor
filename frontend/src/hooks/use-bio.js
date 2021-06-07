import { graphql, useStaticQuery } from "gatsby"

const UseBio = () => {
  const data = useStaticQuery(graphql`
    query BioPage {
      strapiBiography {
        twitter
        facebook
        instagram
        description
        bio_pdf {
          localFile {
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
      }
    }
  `)

  const bioData = {
    twitter: data.strapiBiography.twitter,
    facebook: data.strapiBiography.facebook,
    instagram: data.strapiBiography.instagram,
    description: data.strapiBiography.description,
    bioPdf: data.strapiBiography.bio_pdf.localFile.publicURL,
    bioPic:
      data.strapiBiography.bio_pic.localFile.childImageSharp.gatsbyImageData,
  }

  return bioData
}

export default UseBio
