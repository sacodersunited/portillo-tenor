import { graphql, useStaticQuery } from "gatsby"

const UseSocial = () => {
  const data = useStaticQuery(graphql`
    query Socials {
      strapiBiography {
        twitter
        facebook
        instagram
      }
    }
  `)

  return data
}

export default UseSocial
