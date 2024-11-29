import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import HeadText from "../components/ui/HeadText"
import ExploreMore from "../components/explore-more-section/ExploreMore"
import Subtext from "../components/ui/Subtext"
import Title from "../components/ui/Title"
import PercentageCircle from "../components/ui/PercentageCircle"
import {
  faBookOpen,
  faEarListen,
  faEye,
} from "@fortawesome/free-solid-svg-icons"
import Button from "../components/ui/Button"
import Carousel from "../components/ui/Carousel"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import ThreeDBackgrounds from "../components/photobox/ThreeDBackgrounds"
import TwoDBackgrounds from "../components/photobox/TwoDBackgrounds"
import { useMediaQuery } from "react-responsive"
import ImageSlider from "../components/ImageSlider"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const Data = [
  {
    img: (
      <StaticImage
        className="image-container"
        src="../assets/images/photobox/2d.png"
        alt="branding photo"
      />
    ),
    text: "2D фотобокс",
  },
  {
    img: (
      <StaticImage
        className="image-container"
        src="../assets/images/photobox/3d60.png"
        alt="branding photo"
      />
    ),
    text: "3D фотобокс (60°)",
  },
  {
    img: (
      <StaticImage
        className="image-container"
        src="../assets/images/photobox/3d45.png"
        alt="branding photo"
      />
    ),
    text: "3D фотобокс (45°)",
  },
]

const Photobox = ({ data }) => {
  const { t } = useTranslation()

  const isMedium = useMediaQuery({ query: `(max-width: 991px)` })

  const firstImg = data.allFile.edges.find(
    edge => edge.node.relativePath === `carwbackground.jpg`
  )

  const secondImg = data.allFile.edges.find(
    edge => edge.node.relativePath === `carwbackground2.jpg`
  )

  return (
    <Layout>
      <div className="Photobox-container">
        <CustomContainer>
          <div className="Clipping-header-container">
            <div className="Clipping-header-container__text">
              <p
                className="tools-headtext m-0"
                style={{ textTransform: "uppercase" }}
              >
                {t("tools.photobox")}
              </p>
              <div className="border-line"></div>
              <HeadText className="bold-font">{t("photobox.title")}</HeadText>
              <Subtext>{t("photobox.subtext")}</Subtext>
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
        <div
          style={{ marginBottom: "3em" }}
          className="container-md custom-padding"
        >
          <div className="image-container">
            <ImageSlider
              firstImg={firstImg}
              secondImg={secondImg}
              className="image-container"
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
      {/*<div style={{ background: "var(--color-dark-secondary)" }}>
        <CustomContainer>
          <div style={{ padding: "80px 0" }}>
            <div className="PowerOfCatch-text-container">
              <Title>
                {t("photobox.bespoke1")}{" "}
                <span className="color-primary color-gradient">{t("photobox.bespoke2")}</span>
              </Title>
              <Subtext>{t("photobox.bespokeSubtext")}</Subtext>

              <div className="buttons-container">
                <Button type="primary" className="p-0">
                  <a
                    className="button-link"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdXS54AKfqImLdDWzo323Ihy8ysrPWjEtWQ9hKXXG8U3bkS_Q/viewform?fbzx=5425615245619491595&pli=1"
                  >
                    {t("photobox.onlineForm")}
                  </a>
                </Button>
                <Button type="default" className="p-0">
                  <a
                    href="/Background_Questionnaire.docx"
                    className="button-link"
                    download
                  >
                    {t("photobox.downloadForm")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>*/}
      <ThreeDBackgrounds />
      <div style={{ background: "var(--color-dark-secondary)" }}>
        <CustomContainer>
          <div
            style={{ padding: "80px 0" }}
            className="PowerOfCatch-text-container"
          >
            <div className="circles-container">
              <div>
                <HeadText className="AiSection-subtitle smaller-font mb-3">
                  {t("photobox.visionTitle")}
                </HeadText>
                <Subtext>{t("photobox.visionSubtitle")}</Subtext>
              </div>
              <div className="Photobox-circles">
                <PercentageCircle
                  percentage="10"
                  icon={faEarListen}
                  headText="10%"
                  subText={t("photobox.hear")}
                />
                <PercentageCircle
                  percentage="20"
                  icon={faBookOpen}
                  headText="20%"
                  subText={t("photobox.read")}
                />
                <PercentageCircle
                  percentage="65"
                  icon={faEye}
                  headText="65%"
                  subText={t("photobox.see")}
                />
              </div>
            </div>
          </div>
        </CustomContainer>
      </div>
      <TwoDBackgrounds />
      <ExploreMore />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Фотобокс"
    description="Выбирайте фотореалистичные 2D- и 3D-фоны студийного качества, разработанные специально для автосалонов."
  />
)

export default Photobox

export const data = graphql`
  query ($language: String!) {
    allFile(
      filter: {
        name: { in: ["carwbackground", "carwbackground2"] }
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
