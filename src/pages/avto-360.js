import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import MoreSolutions from "../components/360/MoreSolutions"
import SmartSolution from "../components/360/SmartSolution"
import VideoSection from "../components/360/VideoSection"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import Button from "../components/ui/Button"
import HeadText from "../components/ui/HeadText"
import Subtext from "../components/ui/Subtext"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import gif from "../assets/images/BMW.gif"

const Catch360 = () => {
  const { t } = useTranslation()

  return (
    <Layout>
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
            <HeadText className="bold-font">{t("catch360.title")}</HeadText>
            <Subtext>{t("catch360.subtext")}</Subtext>

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
          <div style={{ flexBasis: "100%", textAlign: "end", width: "100%" }}>
            <div className="catch360-image-container">
              {/* <div className="dark-backdrop">
                <StaticImage
                  src="../assets/images/360-degree.svg"
                  alt="360 degree rotate"
                />
              </div>
              <StaticImage
                // imgClassName="image-before slider-image"
                imgStyle={{ objectFit: "cover" }}
                style={{ maxHeight: "296px" }}
                height={336}
                src="../assets/images/features/avto360.png"
                alt="Catch360 photo"
                layout="fullWidth"
              /> */}
              <div className="gif-360">
                <img src={gif} alt="АвтоФото 360 platform" />
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
      <SmartSolution />
      <VideoSection />
      <MoreSolutions />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Панорама 360°"
    description="Превратите статические изображения в интерактивный, цельный обзор на 360°, благодаря которому ваши автомобили обязательно попадут в список покупателей."
  />
)

export default Catch360

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
