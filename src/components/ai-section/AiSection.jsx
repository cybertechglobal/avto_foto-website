import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import CustomContainer from "../layout/Container"
import HeadText from "../ui/HeadText"
import Subtext from "../ui/Subtext"
import Title from "../ui/Title"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const links = [
  {
    title: "global.catchPhoto",
    subtitle: "aiSection.catchSubtitle",
    description: "aiSection.catchDesc",
    link: "/avto-photo",
    img: "mobiles.png",
  },
  {
    title: "global.catchCreator",
    subtitle: "aiSection.creatorSubtitle",
    description: "aiSection.creatorDesc",
    link: "/avto-creator",
    img: "configurator.png",
  },
  {
    title: "global.catchPanel",
    subtitle: "aiSection.panelSubtitle",
    description: "aiSection.panelDesc",
    link: "/avto-panel",
    img: "panel.png",
  },
  {
    title: "global.catchConnect",
    subtitle: "aiSection.connectSubtitle",
    description: "aiSection.connectDesc",
    link: "/avto-connect",
    img: "dms.png",
  },
]

const AiSection = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/ai/" } }) {
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
        <Title>
          {t("aiSection.title1")} 
          <span className="color-primary color-gradient"> {t("aiSection.title2")} </span>
          {t("aiSection.title3")}<span className="color-primary color-gradient"> {t("aiSection.title4")} </span>
        </Title>
        {links.map((item, index) => {
          const image = data.allFile.edges.find(
            edge => edge.node.relativePath === `ai/${item.img}`
          )

          if (!image) {
            return null
          }

          const imageData = getImage(image.node.childImageSharp.gatsbyImageData)
          return (
            <div key={index} className="AiSection-container-card">
              {index % 2 === 0 && (
                <div className="AiSection-image" style={{ flexBasis: "100%" }}>
                  <GatsbyImage
                    className="ai-image-container"
                    imgClassName="ai-image"
                    image={imageData}
                    alt={item.img}
                  />
                </div>
              )}
              <div className="AiSection-container-text">
                <p style={{ textTransform: "uppercase" }}>{t(item.title)}</p>
                <div className="border-line"></div>
                <HeadText className="AiSection-subtitle">
                  {t(item.subtitle)}
                </HeadText>
                <Subtext>{t(item.description)}</Subtext>
                <div className="d-inline-flex">
                  <Link to={item.link} className="link-text color-primary">
                    {t("global.moreInfo")}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
              {index % 2 !== 0 && (
                <div className="AiSection-image" style={{ flexBasis: "100%" }}>
                  <GatsbyImage
                    className="ai-image-container"
                    imgClassName="ai-image"
                    image={imageData}
                    alt={item.img}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </CustomContainer>
  )
}

export default AiSection
