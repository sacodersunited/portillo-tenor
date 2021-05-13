import React from "react"
import { css } from "@emotion/core"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, fluid, title }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={fluid}
      backgroundColor={`#040e18`}
      css={css`
        width: 100%;
        background-position: center center;
        background-repeat: none;
        background-size: cover;
        min-height: 380px;
        color: whitesmoke;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 48px;
      `}
    >
      <h2>{title.toUpperCase()}</h2>
    </BackgroundImage>
  )
}

export default BackgroundSection
