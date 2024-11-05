import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ImageSlider from "../components/ImageSlider"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import HeadText from "../components/ui/HeadText"
import ExploreMore from "../components/explore-more-section/ExploreMore"
import Subtext from "../components/ui/Subtext"
import Button from "../components/ui/Button"
import ImpressionsSection from "../components/enhancement/ImpressionsSections"
import Seo from "../components/seo"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const Enhandement = ({ data }) => {
  const { t } = useTranslation()

  // const data = useStaticQuery(graphql`
  //   query ($language: String!) {
  //     allFile(
  //       filter: { name: { in: ["tire1", "tire2"] }, extension: { eq: "jpg" } }
  //     ) {
  //       edges {
  //         node {
  //           relativePath
  //           childImageSharp {
  //             gatsbyImageData
  //           }
  //         }
  //       }
  //     }
  //     locales: allLocale(
  //       filter: { ns: { in: ["index"] }, language: { eq: $language } }
  //     ) {
  //       edges {
  //         node {
  //           ns
  //           data
  //           language
  //         }
  //       }
  //     }
  //   }
  // `)

  const firstImg = data.allFile.edges.find(
    edge => edge.node.relativePath === `tire1.jpg`
  )

  const secondImg = data.allFile.edges.find(
    edge => edge.node.relativePath === `tire2.jpg`
  )

  return (
    <Layout>
      <div className="Clipping-container custom-bg">
        <CustomContainer>
          <div className="Clipping-header-container">
            <div className="Clipping-header-container__text">
              <p
                className="tools-headtext m-0"
                style={{ textTransform: "uppercase" }}
              >
                {t("tools.enhancement")}
              </p>
              <div className="border-line"></div>
              <HeadText className="bold-font">
                {t("enhancement.title")}
              </HeadText>
              <Subtext>{t("enhancement.subtext")}</Subtext>
              <Button type="primary" className="p-0">
                <Link to="/contact-us" className="button-link">
                  {t("global.requestDemo")}
                </Link>
              </Button>
            </div>
            <div className="Clipping-header-container__slider">
              <ImageSlider
                sliderStyle={{ maxHeight: "initial" }}
                firstImg={firstImg}
                secondImg={secondImg}
                className="image-clipping-container"
              />
            </div>
          </div>
        </CustomContainer>
      </div>
      <ImpressionsSection />
      <div>
        <div style={{ background: "linear-gradient(90deg, #C03727 0%, #F8A045 100%)" }}>
          <CustomContainer>
            <div className="banner">
              <h4 className="bold-font banner-text">
                {t("enhancement.banner")}
              </h4>
              <p className="m-0">
                <span className="bold-font">{t("global.source")}</span> Deloitte
              </p>
            </div>
          </CustomContainer>
        </div>

        <ExploreMore />
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Улучшение"
    description="Улучшения изображений ИИ для изображений транспортных средств, которые требуют внимания."
  />
)

export default Enhandement

export const data = graphql`
  query ($language: String!) {
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
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
