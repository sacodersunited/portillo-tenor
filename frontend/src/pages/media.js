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
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <Layout isFullWidth>
      <SEO title="David Portillo tenor media, videos, pictures, and albums for sale" />
      <BackgroundSection title="Media" fluid={imageData} />
      <Container>
        <h1>Hi from the Media page</h1>
      </Container>
    </Layout>
  )
}
export default Media
