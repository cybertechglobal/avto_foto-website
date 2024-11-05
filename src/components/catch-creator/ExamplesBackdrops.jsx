import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import CustomContainer from "../layout/Container"
import ImageGallery from "../ui/ImageGallery"
import Title from "../ui/Title"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ExamplesBackdrops = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/sliders/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const TwoD = data.allFile.edges
    .filter(edge => edge.node.relativePath.includes("2d"))
    .map(img => {
      return {
        img,
      }
    })

  const ThreeD = data.allFile.edges
    .filter(edge => edge.node.relativePath.includes("3d"))
    .map(img => {
      return {
        img,
      }
    })

  const [activeTab, setActiveTab] = useState(0)

  const tabs = ["global.2dBackdrops", "global.3dBackdrops"]
  const content = [<ImageGallery data={TwoD} />, <ImageGallery data={ThreeD} />] // Array of corresponding content

  const handleClick = index => {
    setActiveTab(index)
  }

  return (
    <div style={{ background: "var(--color-dark-secondary)" }}>
      <CustomContainer>
        <div className="GallerySection-container">
          <Title>
            {t("examplesBackdrops.title1")} 
            <span className="color-primary color-gradient">2D</span> и{" "}
            <span className="color-primary color-gradient">3D</span>{" "}
            {t("examplesBackdrops.backdrops")}
          </Title>
          <ul className="tabs">
            {tabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={activeTab === index ? "active" : ""}
              >
                {t(tab)}
              </li>
            ))}
          </ul>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab} // Ensure each card change is treated as a new element
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }} // Animation when element is removed
              transition={{ duration: 0.5 }}
            >
              {content[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </CustomContainer>
    </div>
  )
}

export default ExamplesBackdrops
