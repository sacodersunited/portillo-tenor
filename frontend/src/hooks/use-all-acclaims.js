import { graphql, useStaticQuery } from "gatsby"

const UseAllAcclaims = () => {
  const data = useStaticQuery(graphql`
    query AllAcclaims {
      allStrapiAcclaim(sort: { fields: acclaim_thumbnail___role }) {
        edges {
          node {
            strapiId
            type
            date
            reviewer
            snippet
            link
            acclaim_thumbnail {
              role
            }
          }
        }
      }
    }
  `)
  return data.allStrapiAcclaim.edges.map(acclaim => ({
    id: acclaim.node.strapiId,
    type: acclaim.node.type,
    date: acclaim.node.date,
    date: acclaim.node.date,
    reviewer: acclaim.node.reviewer,
    snippet: acclaim.node.snippet,
    link: acclaim.node.link,
    role: acclaim.node.acclaim_thumbnail.role,
  }))
}

export default UseAllAcclaims
