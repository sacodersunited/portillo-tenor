import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UseBio from "../hooks/use-bio"

const Biography = () => {
  // const bioStrapi = UseBio()
  const { strapiBiography } = UseBio()
  return (
    <Layout>
      <SEO title="David Portillo Tenor biography" />
      <h1>Hi from the Bio page</h1>
      <pre>{JSON.stringify(strapiBiography, null, 2)}</pre>
    </Layout>
  )
}

export default Biography
