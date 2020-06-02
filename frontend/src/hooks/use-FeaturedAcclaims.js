import { graphql, useStaticQuery } from "gatsby"

const UseFeaturedAcclaims = () => {
  const data = useStaticQuery(graphql`
    query homepageAcclaims {
      allStrapiAcclaim(filter: { featured: { eq: true } }) {
        edges {
          node {
            strapiId
            featured
            reviewer
            snippet
            link
          }
        }
      }
    }
  `)

  return data.allStrapiAcclaim.edges.map(acclaim => ({
    id: acclaim.node.strapiId,
    featured: acclaim.node.featured,
    reviewer: acclaim.node.reviewer,
    snippet: acclaim.node.snippet,
    link: acclaim.node.link,
  }))
}

export default UseFeaturedAcclaims
