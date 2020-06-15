import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import UseAcclaims from "../hooks/use-all-acclaims"

const Acclaims = () => {
  const allAcclaims = UseAcclaims()

  return (
    <Layout>
      <SEO title="David Portillo tenor acclaims awards recognition" />
      <h1>Hi from the Acclaims page</h1>
      <pre>{JSON.stringify(allAcclaims, null, 2)}</pre>
    </Layout>
  )
}

export default Acclaims
