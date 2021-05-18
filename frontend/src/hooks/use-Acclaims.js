import { graphql, useStaticQuery } from "gatsby"

const UseAcclaims = () => {
  const data = useStaticQuery(graphql`
    query acclaimsByRole {
      allStrapiAcclaim(
        sort: { fields: date, order: DESC }
        filter: { type: { eq: "acclaim" } }
      ) {
        group(field: acclaim_thumbnail___role) {
          nodes {
            strapiId
            reviewer
            snippet
            link
            date
            type
            acclaim_thumbnail {
              role
              thumbnail {
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  `)

  return data
}
export default UseAcclaims
