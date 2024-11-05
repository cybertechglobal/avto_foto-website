import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ImageSlider from "../ImageSlider"
import Button from "../ui/Button"
import HeadText from "../ui/HeadText"
import Subtext from "../ui/Subtext"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const Enhancement = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { name: { in: ["tire1", "tire2"] }, extension: { eq: "jpg" } }
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
    edge => edge.node.relativePath === `tire1.jpg`
  )

  const secondImg = data.allFile.edges.find(
    edge => edge.node.relativePath === `tire2.jpg`
  )

  return (
    <div className="ClippingCard-container" ks>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.8rem",
          flexBasis: "100%",
        }}
      >
        <HeadText className="bold-font">{t("enhancement.title")}</HeadText>
        <Subtext>{t("enhancement.subtext")}</Subtext>
        <Button
          type="primary"
          className="p-0"
          style={{ alignSelf: "flex-start" }}
        >
          <Link to="/enhancement" className="button-link">
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

export default Enhancement
