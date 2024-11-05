import { graphql } from "gatsby"
import React from "react"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import HeadText from "../components/ui/HeadText"
import ExploreMore from "../components/explore-more-section/ExploreMore"
import Subtext from "../components/ui/Subtext"
import Title from "../components/ui/Title"
import Carousel from "../components/ui/Carousel"
import Button from "../components/ui/Button"
import { StaticImage } from "gatsby-plugin-image"
import Timeline from "../components/ui/Timeline"
import Seo from "../components/seo"
import { useMediaQuery } from "react-responsive"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const Data = [
  {
    img: (
      <StaticImage
        className="image-container"
        src="../assets/images/3in1/hyndai.png"
        alt="branding photo"
      />
    ),
    text: "Hyundai  3 в 1",
  },
  {
    img: (
      <StaticImage
        className="image-container"
        src="../assets/images/3in1/mercedes.png"
        alt="branding photo"
      />
    ),
    text: "Mercedes-Benz 3 в 1",
  },
  {
    img: (
      <StaticImage
        className="image-container"
        src="../assets/images/3in1/renault.png"
        alt="branding photo"
      />
    ),
    text: "Renault 3 в 1",
  },
]

const Page3in1 = () => {
  const { t } = useTranslation()

  const isMedium = useMediaQuery({ query: `(max-width: 991px)` })

  const steps = [
    {
      number: 1,
      left: (
        <div className="timeline-text">
          <p>{t("howCatchWorks.photographVehicle")}</p>
          <span>{t("3in1.photographVehicleDesc")}</span>
        </div>
      ),
      right: (
        <div className="timeline-image">
          <StaticImage
            src="../assets/images/3in1/photograph.png"
            alt="vin photo"
          />
        </div>
      ),
    },
    {
      number: 2,
      right: (
        <div className="timeline-text">
          <p>{t("howCatchWorks.selectImage")}</p>
          <span>{t("3in1.selectImageDesc")}</span>
        </div>
      ),
      left: (
        <div className="timeline-image">
          <StaticImage
            src="../assets/images/3in1/processing.png"
            alt="photograph photo"
          />
        </div>
      ),
    },
    {
      number: 3,
      left: (
        <div className="timeline-text">
          <p>{t("3in1.distributePhotos")}</p>
          <span>{t("3in1.distributePhotosDesc")}</span>
        </div>
      ),
      right: (
        <div className="timeline-image">
          <StaticImage
            src="../assets/images/3in1/distribute.png"
            alt="image processing photo"
          />
        </div>
      ),
    },
  ]

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
                {t("tools.3in1")}
              </p>
              <div className="border-line"></div>
              <HeadText className="bold-font">{t("3in1.title")}</HeadText>
              <Subtext>{t("3in1.subtext")}</Subtext>
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
              src="../assets/images/3in1/hyndai.png"
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
      <CustomContainer style={{ background: "var(--color-dark-secondary)" }}>
        <div className="HowCatchWorks-container">
          <Title>
            <span className="color-primary color-gradient">{t("3in1.timelineTitle1")} </span>{" "}
            {t("3in1.timelineTitle2")}
          </Title>
          <Timeline steps={steps} />
        </div>
      </CustomContainer>
      <ExploreMore />
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="3 in 1"
    description="Take one shot of the vehicle and get three distinct photos, all at the same high quality. Easily showcase the vehicle, headlights and wheels."
  />
)

// export const Head = () => (
//   <Seo
//     title="metadata.3in1Title"
//     description="metadata.3in1Desc"
//   />
// )

export default Page3in1

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
