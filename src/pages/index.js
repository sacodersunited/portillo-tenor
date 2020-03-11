import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarousel from "../components/homeCarousel"
import HomeCalendar from "../components/HomeCalendar"
import HomeAcclaims from "../components/HomeAcclaims"

const IndexPage = () => (
  <Layout fullWidth>
    <SEO title="Home" />
    <HomeCarousel />
    <HomeCalendar />
    <HomeAcclaims />
  </Layout>
)

export default IndexPage
