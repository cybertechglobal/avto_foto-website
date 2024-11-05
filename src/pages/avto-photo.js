import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import MoreSolutions from "../components/360/MoreSolutions"
import FeaturesSection from "../components/catch-photo/FeaturesSection"
import HowCatchWorks from "../components/catch-photo/HowCatchWorks"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import SiteContainer from "../components/layout/SiteContainer"
import Seo from "../components/seo"
import Button from "../components/ui/Button"
import HeadText from "../components/ui/HeadText"
import Subtext from "../components/ui/Subtext"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const CatchPhoto = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SiteContainer>
        <CustomContainer>
          <div className="AiSection-container-card">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.8rem",
                flexBasis: "100%",
              }}
            >
              <HeadText className="bold-font">{t("catchPhoto.title")}</HeadText>
              <Subtext>{t("catchPhoto.subtext")}</Subtext>
              <Button
                type="primary"
                className="p-0"
                style={{ alignSelf: "flex-start" }}
              >
                <Link to="/contact-us" className="button-link">
                  {t("global.requestDemo")}
                </Link>
              </Button>
            </div>
            <div style={{ flexBasis: "100%", width: "100%", textAlign: "end" }}>
              <StaticImage
                className="hero-image-container"
                src="../assets/images/ai/mobiles.png"
                alt="АвтоФото"
                placeholder="blurred"
              />
            </div>
          </div>
        </CustomContainer>
      </SiteContainer>
      <div style={{ background: "linear-gradient(90deg, #C03727 0%, #F8A045 100%)" }}>
        <CustomContainer>
          <div className="banner">
            <h4 className="bold-font banner-text">{t("catchPhoto.banner")}</h4>
            <p>
              <span className="bold-font">{t("catchPhoto.bannerSource1")}</span>{" "}
              {t("catchPhoto.bannerSource2")}
            </p>
          </div>
        </CustomContainer>
      </div>
      <SiteContainer>
        <FeaturesSection />
      </SiteContainer>
      <HowCatchWorks />
      <SiteContainer>
        <MoreSolutions />
      </SiteContainer>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="АвтоФото"
    description="АвтоФото оснащен функциями, упрощающими и ускоряющими продажу автомобилей. Фотосъемка «наведи и снимай», оптимизированный рабочий процесс, автоматическое распознавание VIN"
  />
)

export default CatchPhoto

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
