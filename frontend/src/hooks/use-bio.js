import { graphql, useStaticQuery } from "gatsby"

const UseBio = () => {
  const data = useStaticQuery(graphql`
    query BioPage {
      strapiBiography {
        twitter
        facebook
        instagram
        bio_pdf {
          publicURL
        }
        bio_pic {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
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
