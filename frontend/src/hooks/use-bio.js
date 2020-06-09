import { graphql, useStaticQuery } from "gatsby"

const UseBio = () => {
  const data = useStaticQuery(graphql`
    query BioPage {
      strapiBiography {
        strapiId
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
  // .strapiBiography.map(bio => ({
  //   id: bio.strapiId,
  //   twitter: bio.twitter,
  //   facebook: bio.facebook,
  //   instagram: bio.instagram,
  //   bioPdf: bio.bio_pdf.publicURL,
  //   descr: bio.description,
  // }))
}

export default UseBio
