import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/backgroundSection"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"

const Media = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "media-header-bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        videos: allStrapiVideo {
          nodes {
            id
            active
            title
            url
          }
        }

        merch: allStrapiMerch {
          nodes {
            id
            title
            strapiId
            website
            description
            image {
              childImageSharp {
                fluid {
                  base64
                  originalImg
                  originalName
                }
                fixed {
                  src
                }
              }
            }
          }
        }

        photoalbum: allStrapiPhotoAlbum {
          nodes {
            image {
              name
              url
              formats {
                medium {
                  childImageSharp {
                    fixed {
                      src
                      base64
                    }
                  }
                }
              }
              mime
              size
            }
            title
            strapiId
            description
            id
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  console.log("data", data)
  return (
    <Layout isFullWidth>
      <SEO title="David Portillo tenor media, videos, pictures, and albums for sale" />
      <BackgroundSection title="Media" fluid={imageData} />
      <Container>
        <h1>Hi from the Media page</h1>
        {data.videos.nodes.map(video => {
          return <a href={video.url}>{video.title}</a>
        })}
      </Container>
    </Layout>
  )
}
export default Media
