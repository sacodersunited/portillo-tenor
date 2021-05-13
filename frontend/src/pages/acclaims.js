import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/backgroundSection"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"

const Acclaims = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "acclaim-header-bg.png" }) {
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
      <BackgroundSection title="Acclaims" fluid={imageData} />
      <SEO title="David Portillo tenor acclaims awards recognition" />
      <Container>
        <h1>Hi from the Acclaims page</h1>
      </Container>
    </Layout>
  )
}

export default Acclaims
