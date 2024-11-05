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
    subtitle: "autopilotSection.brandedCollage",
    description: "autopilotSection.brandedCollageDesc",
    img: "collages.png",
  },
  {
    subtitle: "autopilotSection.photoFrame",
    description: "autopilotSection.photoFrameDesc",
    img: "frames.png",
  },
  {
    subtitle: "autopilotSection.licencePlate",
    description: "autopilotSection.licencePlateDesc",
    img: "plates.png",
  },
]

const AutopilotSection = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/branding/" } }) {
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
          {t("autopilotSection.title2")}
        </Title>
        <Subtext className="text-center mb-5">
          {t("autopilotSection.subtitle")}
        </Subtext>
        {links.map((item, index) => {
          const image = data.allFile.edges.find(
            edge => edge.node.relativePath === `branding/${item.img}`
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

export default AutopilotSection
