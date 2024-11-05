import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ImageSlider from "../ImageSlider"
import Button from "../ui/Button"
import HeadText from "../ui/HeadText"
import Subtext from "../ui/Subtext"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const PhotoboxCard = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          name: { in: ["carwbackground", "carwbackground2"] }
          extension: { eq: "png" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const firstImg = data.allFile.edges.find(
    edge => edge.node.relativePath === `carwbackground.png`
  )

  const secondImg = data.allFile.edges.find(
    edge => edge.node.relativePath === `carwbackground2.png`
  )

  return (
    <div className="ClippingCard-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.8rem",
          flexBasis: "100%",
        }}
      >
        <HeadText className="bold-font">{t("photobox.titleHero")}</HeadText>
        <Subtext>{t("photobox.subtextHero")}</Subtext>
        <Button
          type="primary"
          className="p-0"
          style={{ alignSelf: "flex-start" }}
        >
          <Link to="/photobox" className="button-link">
            {t("global.moreInfo")}
          </Link>
        </Button>
      </div>
      <div
        style={{
          flexBasis: "100%",
        }}
        className="d-flex justify-content-end"
      >
        <ImageSlider
          firstImg={firstImg}
          secondImg={secondImg}
          className="image-container"
        />
      </div>
    </div>
  )
}

export default PhotoboxCard
