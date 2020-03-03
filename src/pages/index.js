import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarousel from "../components/homeCarousel"

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home" />
    <HomeCarousel />
  </Layout>
)

export default IndexPage
