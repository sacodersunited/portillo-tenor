import { graphql, useStaticQuery } from "gatsby"

const UsePressFeature = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiAcclaim(
        sort: { fields: date, order: DESC }
        filter: { type: { eq: "press_feature" } }
      ) {
        nodes {
          strapiId
          reviewer
          snippet
          link
          date
          type
          acclaim_thumbnail {
            thumbnail {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `)
  return data.allStrapiAcclaim.nodes.map(acclaim => ({
    id: acclaim.strapiId,
    reviewer: acclaim.reviewer,
    snippet: acclaim.snippet,
    link: acclaim.link,
    date: acclaim.date,
    type: acclaim.type,
    image: acclaim.acclaim_thumbnail.thumbnail.localFile.publicURL,
  }))
}

export default UsePressFeature
