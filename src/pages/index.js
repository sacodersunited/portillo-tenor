import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarousel from "../components/homeCarousel"
import HomeCalendar from "../components/HomeCalendar"
import HomeAcclaims from "../components/HomeAcclaims"
import HomeMedia from "../components/HomeMedia"

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home" />
    <HomeCarousel />
    <HomeCalendar />
    <HomeAcclaims />
    <HomeMedia />
  </Layout>
)

export default IndexPage
