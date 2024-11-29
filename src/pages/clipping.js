import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ImageSlider from "../components/ImageSlider"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import HeadText from "../components/ui/HeadText"
import ExploreMore from "../components/explore-more-section/ExploreMore"
import Subtext from "../components/ui/Subtext"
import Button from "../components/ui/Button"
import Exterior from "../components/clipping/Exterior"
import Interior from "../components/clipping/Interior"
import Seo from "../components/seo"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const Clipping = ({ data }) => {
  const { t } = useTranslation()

  // const data = useStaticQuery(graphql`
  //   query ($language: String!) {
  //     allFile(
  //       filter: {
  //         name: { in: ["catchcar", "carwbackground"] }
  //         extension: { eq: "jpg" }
  //       }
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
    edge => edge.node.relativePath === `avtocar.jpg`
  )

  const secondImg = data.allFile.edges.find(
    edge => edge.node.relativePath === `carwbackground.jpg`
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
                {t("tools.clipping")}
              </p>
              <div className="border-line"></div>
              <HeadText className="bold-font">{t("clipping.title")}</HeadText>
              <Subtext>{t("clipping.subtext")}</Subtext>
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
      <div>
        <Exterior />
        <div style={{ background: "linear-gradient(90deg, #C03727 0%, #F8A045 100%)" }}>
          <CustomContainer>
            <div className="banner">
              <h4 className="bold-font banner-text">{t("clipping.banner")}</h4>
              <p className="m-0">
                <span className="bold-font">{t("global.source")}</span>{" "}
                {t("clipping.source")}
              </p>
            </div>
          </CustomContainer>
        </div>
        <Interior />
        <ExploreMore />
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="СЕГМЕНТАЦИЯ"
    description="Пиксельное удаление фона за считанные секунды! Откройте безграничные возможности и раскройте потенциал продаж своих фотографий автомобилей."
  />
)

export default Clipping

export const data = graphql`
  query ($language: String!) {
    allFile(
      filter: {
        name: { in: ["avtocar", "carwbackground"] }
        extension: { eq: "jpg" }
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
