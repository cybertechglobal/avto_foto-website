import { StaticImage } from "gatsby-plugin-image"
import {
  faImages,
  faListCheck,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import MoreSolutions from "../components/360/MoreSolutions"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import Button from "../components/ui/Button"
import HeadText from "../components/ui/HeadText"
import Subtext from "../components/ui/Subtext"
import ThreeTextSection from "../components/ui/ThreeTextSection"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import SiteContainer from "../components/layout/SiteContainer"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const data = [
  {
    title: "catchPanel.findImages",
    subtitle: "catchPanel.findImagesDesc",
    icon: faShareNodes,
  },
  {
    title: "catchPanel.100images",
    subtitle: "catchPanel.100imagesDesc",
    icon: faImages,
  },
  {
    title: "catchPanel.keepStaffOnTask",
    subtitle: "catchPanel.keepStaffOnTaskDesc",
    icon: faListCheck,
  },
]

const CatchPanel = () => {
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
                gap: "1.4rem",
                flexBasis: "100%",
              }}
            >
              <HeadText className="bold-font">{t("catchPanel.title")}</HeadText>
              <Subtext>{t("catchPanel.subtext")}</Subtext>
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
                src="../assets/images/ai/panel.png"
                alt="АвтоФото panel"
                width={500}
                placeholder="blurred"
              />
            </div>
          </div>
        </CustomContainer>
        <ThreeTextSection
          data={data}
          title={
            <>
              {t("catchPanel.threeSectionTitle1")}
            </>
          }
          image={
            <>
              <StaticImage
                src="../assets/images/avto_panel.png"
                alt="АвтоФото Panel"
              />
            </>
          }
        />
      </SiteContainer>
      <MoreSolutions backgroundColor="var(--color-dark-secondary)" />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="АвтоФото Панель"
    description="АвтоФото Панель — это практичное веб-приложение, предназначенное для простой организации, улучшения и обмена изображениями где угодно и когда угодно."
  />
)

export default CatchPanel

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
