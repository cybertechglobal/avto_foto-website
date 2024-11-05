import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useRef, useState } from "react"
import CustomContainer from "../layout/Container"
import Branding from "./Branding"
import Catch360 from "./Catch360"
import ClippingCard from "./ClippingCard"
import Enhancement from "./Enhancement"
import PhotoboxCard from "./PhotoboxCard"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "gatsby-plugin-react-i18next"

const coverImages = ["global.catch360", "tools.enhancement", "tools.branding", "tools.photobox"]

const HeroSection = () => {
  const { t } = useTranslation()

  const [selectedCard, setSelectedCard] = useState(0)
  const heroRef = useRef(null)

  const handleCardClick = cardIndex => {
    setSelectedCard(cardIndex)

    const heroSection = document.getElementById("hero-container")
    if (heroSection) {
      const heroPosition =
        heroSection.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: heroPosition - 60,
        behavior: "smooth", // You can use 'auto' for instant scrolling
      })
    }
  }

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/features/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 232)
            }
          }
        }
      }
    }
  `)

  const features = [
    {
      name: "tools.clipping",
      img: "herocar.png",
    },
    {
      name: "tools.photobox",
      img: "halfbg.png",
    },
    {
      name: "global.catch360",
      img: "catch360.png",
    },
    {
      name: "tools.enhancement",
      img: "enhancement.png",
    },
    {
      name: "tools.branding",
      img: "branding.png",
    },
  ]

  const heroContent = [
    <ClippingCard />,
    <PhotoboxCard />,
    <Catch360 />,
    <Enhancement />,
    <Branding />,
  ]

  const scrollableDivRef = useRef(null)
  const [reachedEnd, setReachedEnd] = useState(false)

  const handleScroll = () => {
    const div = scrollableDivRef.current

    if (div) {
      const isEnd = div.scrollLeft + div.clientWidth >= div.scrollWidth
      setReachedEnd(isEnd)
    }
  }

  return (
    <CustomContainer>
      <div id="hero-container" ref={heroRef} className="HeroSection-container">
        {/* Big Hero Section */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedCard} // Ensure each card change is treated as a new element
            className="hero"
            style={{ marginBottom: "2.3rem" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }} // Animation when element is removed
            transition={{ duration: 0.5 }}
          >
            {heroContent[selectedCard]}
          </motion.div>
        </AnimatePresence>

        <p className="explore-features">Возможности АвтоФото</p>
        {/* Small Cards */}
        <div style={{ position: "relative" }}>
          {/* <div className={reachedEnd ? "d-none testt" : "testt"}>
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div> */}

          <div
            className="small-cards"
            ref={scrollableDivRef}
            onScroll={handleScroll}
            style={{ display: "flex", gap: "28px" }}
          >
            {features.map((feature, index) => {
              const image = data.allFile.edges.find(
                edge => edge.node.relativePath === `features/${feature.img}`
              )

              if (!image) {
                return null
              }

              const imageData = getImage(
                image.node.childImageSharp.gatsbyImageData
              )

              return (
                <div
                  key={index}
                  className={`feature-card-container ${
                    selectedCard === index ? "active" : ""
                  }`}
                >
                  <div
                    key={feature.name}
                    className="feature-card"
                    onClick={() => handleCardClick(index)}
                  >
                    <h2>{t(feature.name)}</h2>
                    <div className="backdrop"></div>
                    <GatsbyImage
                      image={imageData}
                      alt={feature.name}
                      style={{ height: "100%" }}
                      imgStyle={
                        coverImages.includes(feature.name)
                          ? { objectFit: "cover" }
                          : { objectFit: "contain" }
                      }
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </CustomContainer>
  )
}

export default HeroSection
