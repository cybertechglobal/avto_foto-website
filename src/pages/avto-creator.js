import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import MoreSolutions from "../components/360/MoreSolutions"
import BackdropsSection from "../components/catch-creator/BackdropsSection"
import ExamplesBackdrops from "../components/catch-creator/ExamplesBackdrops"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import Button from "../components/ui/Button"
import HeadText from "../components/ui/HeadText"
import Subtext from "../components/ui/Subtext"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import SiteContainer from "../components/layout/SiteContainer"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const CatchCreator = () => {
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
              <HeadText className="bold-font">
                {t("catchCreator.title")}
              </HeadText>
              <Subtext>{t("catchCreator.subtext")}</Subtext>
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
                src="../assets/images/ai/configurator.png"
                alt="АвтоФото configurator"
                placeholder="blurred"
              />
            </div>
          </div>
        </CustomContainer>
      </SiteContainer>
      <SiteContainer>
        <BackdropsSection />
      </SiteContainer>
      <ExamplesBackdrops />
      <SiteContainer>
        <MoreSolutions />
      </SiteContainer>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="АвтоФото Создатель"
    description="Создавайте 2D- и 3D-фоны, которые улучшат изображения ваших автомобилей до профессионального студийного качества, сделают их более привлекательными и эффективными."
  />
)

export default CatchCreator

export const query = graphql`
  query ($language: String!) {
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
