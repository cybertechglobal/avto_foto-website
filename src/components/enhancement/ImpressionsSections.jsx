import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import React from "react"
import CustomContainer from "../layout/Container"
import Subtext from "../ui/Subtext"
import TextImage from "../ui/TextImage"
import Title from "../ui/Title"
import { useTranslation } from "gatsby-plugin-react-i18next"

const links = [
  {
    subtitle: "impressionsSections.paintPolishing",
    description: "impressionsSections.paintPolishingDesc",
    img: "polishing.png",
  },
  {
    subtitle: "impressionsSections.rimPolishing",
    description: "impressionsSections.rimPolishingDesc",
    img: "tires.png",
  },
  {
    subtitle: "impressionsSections.reflections",
    description: "impressionsSections.reflectionsDesc",
    img: "reflections.png",
  },
  {
    subtitle: "impressionsSections.vinPresets",
    description: "impressionsSections.vinPresetsDesc",
    img: "vin_scan.png",
  },
]

const ImpressionsSection = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/enhancement/" } }) {
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
        <Title className="mb-4">
          {t("impressionsSections.title1")} 
        </Title>
        <Subtext className="text-center mb-5">
          {t("impressionsSections.subtitle")}
        </Subtext>

        {links.map((item, index) => {
          const image = data.allFile.edges.find(
            edge => edge.node.relativePath === `enhancement/${item.img}`
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

export default ImpressionsSection
