import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import CustomContainer from "../layout/Container"
import TextImage from "../ui/TextImage"
import Title from "../ui/Title"
import { useTranslation } from "gatsby-plugin-react-i18next"

const links = [
  {
    title: "global.catchPhoto",
    subtitle: "featuresSection.catchPhotoSubtitle",
    description: "featuresSection.catchPhotoDesc",
    img: "mobile_camera.png",
  },
  {
    title: "global.catchCreator",
    subtitle: "featuresSection.catchCreatorSubtitle",
    description: "featuresSection.catchCreatorDesc",
    img: "targets.png",
  },
  {
    title: "global.catchPanel",
    subtitle: "featuresSection.catchPanelSubtitle",
    description: "featuresSection.catchPanelDesc",
    img: "vin_scan.png",
  },
]

const FeaturesSection = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/avto-photo/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return (
    <CustomContainer>
      <div className="AiSection-container">
        <Title className="small-size">
          {t("featuresSection.title1")} 
          <span className="color-primary color-gradient">
            {t("featuresSection.title2")}
          </span>{" "}
          {t("featuresSection.title3")}
        </Title>
        {links.map((item, index) => {
          const image = data.allFile.edges.find(
            edge => edge.node.relativePath === `avto-photo/${item.img}`
          )

          if (!image) {
            return null
          }

          const imageData = getImage(image.node.childImageSharp.gatsbyImageData)
          return (
            <TextImage
              key={index}
              imageData={imageData}
              item={item}
              index={index}
            />
          )
        })}
      </div>
    </CustomContainer>
  )
}

export default FeaturesSection
