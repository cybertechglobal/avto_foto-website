import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import HeadText from "./HeadText"
import Subtext from "./Subtext"
import { useTranslation } from "gatsby-plugin-react-i18next"

const TextImage = ({ item, imageData, index }) => {
  const { t } = useTranslation()

  return (
    <div className="AiSection-container-card">
      {index % 2 !== 0 && (
        <div className="AiSection-image" style={{ flexBasis: "100%" }}>
          <GatsbyImage
            className="ai-image-container"
            imgClassName="ai-image"
            image={imageData}
            alt={`${item.img}`}
          />
        </div>
      )}
      <div className="AiSection-container-text">
        <HeadText className="AiSection-subtitle">{t(item.subtitle)}</HeadText>
        <div className="border-line"></div>
        <Subtext>{t(item.description)}</Subtext>
      </div>
      {index % 2 === 0 && (
        <div className="AiSection-image" style={{ flexBasis: "100%" }}>
          <GatsbyImage
            className="ai-image-container"
            imgClassName="ai-image"
            image={imageData}
            alt={`${item.img}`}
          />
        </div>
      )}
    </div>
  )
}

export default TextImage
