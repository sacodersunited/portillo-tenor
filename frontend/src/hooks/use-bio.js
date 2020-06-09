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
        description
      }
    }
  `)

  return data
}

export default UseBio
