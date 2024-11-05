import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import HeadText from "../components/ui/HeadText"
import Subtext from "../components/ui/Subtext"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

const AboutUs = () => {
  const { t } = useTranslation()

  const playerOptions = {
    height: "390",
    width: "640",
  }

  return (
    <Layout>
      <CustomContainer>
        <div className="AiSection-container-card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.7rem",
              flexBasis: "100%",
            }}
          >
            <HeadText className="bold-font">{t("aboutUs.title")}</HeadText>
            <Subtext>{t("aboutUs.subtitle1")}</Subtext>
            <Subtext>{t("aboutUs.subtitle2")}</Subtext>
            <Subtext>{t("aboutUs.subtitle3")}</Subtext>
            <Subtext>{t("aboutUs.subtitle4")}</Subtext>
            <Subtext>{t("aboutUs.subtitle5")}</Subtext>
          </div>
          <div style={{ flexBasis: "100%", width: "100%", textAlign: "end" }}>
            <StaticImage
              src="../assets/images/about-us.png"
              alt="About us image"
              placeholder="blurred"
            />
          </div>
        </div>
      </CustomContainer>
      <div style={{ background: "var(--color-dark-secondary" }}>
        <CustomContainer>
          <div className="VideoSection-container">
            <div className="VideoSection-container-card">
              <div
                className="yt-video"
                style={{ flexBasis: "100%", width: "100%" }}
              >
                <div className="video_container">
                  <div className="video_wrapper">
                    <iframe
                      title="YouTube Video Player"
                      width={playerOptions.width}
                      height={playerOptions.height}
                      src="https://www.youtube.com/embed/jRG6VvCYmao"
                      frameBorder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div
                className="VideoSection-container-text"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                  flexBasis: "100%",
                }}
              >
                <HeadText>
                  {t("aboutUs.videoTitle1")}
                  <span className="color-primary color-gradient">
                    {" "}
                    {t("aboutUs.videoTitle2")}
                  </span>
                </HeadText>
                <Subtext>{t("aboutUs.videoSubtitle")}</Subtext>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="О нас"
    description="АвтоФото дает возможность наиболее прогрессивным автомобильным дилерским центрам повысить уровень мерчандайзинга своих автомобилей."
  />
)

export default AboutUs

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
