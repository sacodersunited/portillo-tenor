import React from "react"
import { css, cx } from "@emotion/react"
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
      <h2
        className="display-4"
        css={css`
          font-family: "Pacifico";
        `}
      >
        {title}
      </h2>
    </BackgroundImage>
  )
}

export default BackgroundSection
