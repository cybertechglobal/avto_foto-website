import {
  faCheckDouble,
  faGears,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import MoreSolutions from "../components/360/MoreSolutions"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import SiteContainer from "../components/layout/SiteContainer"
import Seo from "../components/seo"
import Button from "../components/ui/Button"
import HeadText from "../components/ui/HeadText"
import Subtext from "../components/ui/Subtext"
import ThreeTextSection from "../components/ui/ThreeTextSection"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const data = [
  {
    title: "catchConnect.powerfulConnections",
    subtitle: "catchConnect.powerfulConnectionsSubtitle",
    icon: faGears,
  },
  {
    title: "catchConnect.automate",
    subtitle: "catchConnect.automateSubtitle",
    icon: faRightLeft,
  },
  {
    title: "catchConnect.rightImage",
    subtitle: "catchConnect.rightImageSubtitle",
    icon: faCheckDouble,
  },
]

const CatchConnect = () => {
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
                {t("catchConnect.title")}
              </HeadText>
              <Subtext>
                АвтоФото Интеграция позволяет подключаться к ведущим
                <span style={{whiteSpace: 'nowrap'}}> IT-системам,</span> цифровым торговым площадкам, DMS для быстрой и
                простой передачи данных.
              </Subtext>
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
                src="../assets/images/ai/dms.png"
                alt="АвтоФото dms"
                placeholder="blurred"
              />
            </div>
          </div>
        </CustomContainer>
        <ThreeTextSection
          data={data}
          title={
            <>
              {t("catchConnect.threeSectionTitle1")}
              <span className="color-primary color-gradient">
                {" "}
                {t("catchConnect.threeSectionTitle2")}
              </span>
            </>
          }
          subtitle="catchConnect.threeSectionSubtitle"
          image={
            <>
              <StaticImage
                src="../assets/images/avto_connect.png"
                alt="Avto Connect image"
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
    title="АвтоФото Соединение"
    description="Автоматически передает изображения транспортных средств, улучшенные искусственным интеллектом, в вашу систему управления дилерами (DMS) и на цифровые автомобильные рынки."
  />
)

export default CatchConnect

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
