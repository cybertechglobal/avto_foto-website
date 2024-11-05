import { graphql } from "gatsby"
import React from "react"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import HeadText from "../components/ui/HeadText"
import ExploreMore from "../components/explore-more-section/ExploreMore"
import Subtext from "../components/ui/Subtext"
import Carousel from "../components/ui/Carousel"
import Button from "../components/ui/Button"
import { StaticImage } from "gatsby-plugin-image"
import AutopilotSection from "../components/branding/AutopilotSections"
import Seo from "../components/seo"
import { useMediaQuery } from "react-responsive"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const Data = [
  {
    img: (
      <StaticImage
        className="image-container"
        src="../assets/images/branding/branding_big.png"
        alt="branding photo"
      />
    ),
    text: "branding.collage",
  },
  {
    img: (
      <StaticImage
        className="image-container"
        src="../assets/images/branding/frame.png"
        alt="branding photo"
      />
    ),
    text: "branding.frame",
  },
  {
    img: (
      <StaticImage
        className="image-container"
        src="../assets/images/branding/plates_slider.png"
        alt="branding photo"
      />
    ),
    text: "branding.licencePlate",
  },
]

const Branding = () => {
  const { t } = useTranslation()

  const isMedium = useMediaQuery({ query: `(max-width: 991px)` })

  return (
    <Layout>
      <div className="Clipping-container">
        <CustomContainer>
          <div className="Clipping-header-container">
            <div className="Clipping-header-container__text">
              <p
                className="tools-headtext m-0"
                style={{ textTransform: "uppercase" }}
              >
                {t("tools.branding")}
              </p>
              <div className="border-line"></div>
              <HeadText className="bold-font">{t("branding.title")}</HeadText>
              <Subtext>{t("branding.subtext")}</Subtext>
              <Button type="primary" className="p-0">
                <Link to="/contact-us" className="button-link">
                  {t("global.requestDemo")}
                </Link>
              </Button>
            </div>
          </div>
        </CustomContainer>
      </div>
      {isMedium ? (
        <div className="container-md custom-padding">
          <div className="image-container">
            <StaticImage
              className="image-container"
              src="../assets/images/features/branding_big.png"
              alt="branding photo"
              layout="fullWidth"
            />
          </div>
        </div>
      ) : (
        <div style={{ background: "linear-gradient(90deg, #C03727 0%, #F8A045 100%)" }}>
          <div className="w-100 carousel-containere">
            <Carousel Data={Data} />
          </div>
        </div>
      )}
      <AutopilotSection />
      <ExploreMore />
    </Layout>
  )
}
export const Head = () => (
  <Seo
    title="Брендинг"
    description="Мощный брендинг на автопилоте. АвтоФото автоматически создает фирменные коллажи, рамки для фотографий или накладки на номерные знаки."
  />
)

export default Branding

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
