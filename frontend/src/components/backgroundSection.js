import React from "react"
import { css } from "@emotion/react"
import { BgImage } from "gbimage-bridge"
import Pulse from "react-reveal/Pulse"

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
        @media only screen and (max-width: 740px) {
          min-height: 200px;
          display: grid;
          justify-content: center;
          align-items: center;
          margin-top: 0;
        }
      `}
      preserveStackingContext
    >
      <h2
        className="display-4"
        css={css`
          font-family: "Merriweather";
          @media only screen and (max-width: 740px) {
            font-size: 36px;
          }
        `}
      >
        <Pulse>{title}</Pulse>
      </h2>
    </BgImage>
  )
}

export default BackgroundSection
