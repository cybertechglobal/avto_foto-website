import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import "./carousel.css"
import { useMediaQuery } from "react-responsive"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Carousel = ({ Data }) => {
  const { t } = useTranslation()

  const [FlowDirection, setFlowDirection] = useState(true)
  const [CenterId, setCenterId] = useState(0)
  const [LeftId, setLeftId] = useState(Data.length - 1)
  const [RightId, setRightId] = useState(1)

  const xl = useMediaQuery({ query: `(max-width: 1199px)` })

  const nextBtn = () => {
    if (LeftId === Data.length - 1) {
      setLeftId(0)
    } else {
      setLeftId(LeftId + 1)
    }
    if (CenterId === Data.length - 1) {
      setCenterId(0)
    } else {
      setCenterId(CenterId + 1)
    }

    if (RightId === Data.length - 1) {
      setRightId(0)
    } else {
      setRightId(RightId + 1)
    }
    setFlowDirection(true)
  }
  const prevBtn = () => {
    setFlowDirection(false)
    if (LeftId === 0) {
      setLeftId(Data.length - 1)
    } else {
      setLeftId(LeftId - 1)
    }
    if (CenterId === 0) {
      setCenterId(Data.length - 1)
    } else {
      setCenterId(CenterId - 1)
    }
    if (RightId === 0) {
      setRightId(Data.length - 1)
    } else {
      setRightId(RightId - 1)
    }
  }

  const variants = {
    center: {
      x: "0rem",
      y: "-7rem",
      scale: xl ? 1.1 : 1.4,
      zIndex: "5",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: xl ? "-12rem" : "-22rem",
      y: "2rem",
      scale: xl ? 0.8 : 1.1,
      zIndex: "4",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      x: xl ? "12rem" : "22rem",
      y: "2rem",
      scale: xl ? 0.8 : 1.1,
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "8rem",
      scale: 0,
    },
    leftHidden: {
      x: "-8rem",
      scale: 0,
    },
  }

  return (
    <>
      <motion.div className="carousel-wrapper">
        <motion.div className="carousel-content">
          <AnimatePresence initial={false}>
            <motion.div
              key={LeftId}
              variants={variants}
              initial={FlowDirection ? "center" : "leftHidden"}
              animate="left"
              exit={"leftHidden"}
              className="carousel-itemm"
            >
              <div className="carousel-cont">
                {Data[LeftId].img}
                {t(Data[LeftId].text)}
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              key={CenterId}
              initial={FlowDirection ? "right" : "left"}
              animate="center"
              className="carousel-itemm"
            >
              <div className="carousel-cont">
                {Data[CenterId].img}
                {t(Data[CenterId].text)}
              </div>
            </motion.div>
            <motion.div
              key={RightId}
              variants={variants}
              initial={FlowDirection ? "rightHidden" : "center"}
              animate="right"
              exit={"rightHidden"}
              className="carousel-itemm"
            >
              <div className="carousel-cont">
                {Data[RightId].img}
                {t(Data[RightId].text)}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="carousel-btns">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={prevBtn}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </motion.span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={nextBtn}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.span>
        </div>
      </motion.div>
    </>
  )
}

export default Carousel
