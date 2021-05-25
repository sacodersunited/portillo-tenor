import React from "react"
import { css } from "@emotion/react"
import { BgImage } from "gbimage-bridge"

const BackgroundSection = ({ className, title, image }) => {
  return (
    <BgImage
      image={image}
      Tag="section"
      className={className}
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
      preserveStackingContext
    >
      <h2
        className="display-4"
        css={css`
          font-family: "Pacifico";
        `}
      >
        {title}
      </h2>
    </BgImage>
  )
}

export default BackgroundSection
