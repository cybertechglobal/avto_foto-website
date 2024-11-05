import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"

const ThreeDCarousel = () => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0])
  const [isAnimating, setIsAnimating] = useState(true) // Add this state
  const items = ["🍔", "🍕", "🌭", "🍗"];

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false) // Animation finished, allow new animation
    }, 1000) // Adjust the duration based on your animation duration
  }, [])

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  )

  const handleAnimationComplete = () => {
    setIsAnimating(false) // Animation is complete, allow new animation
  }

  const handleClick = newDirection => {
    if (!isAnimating) {
      // Check if animation is not in progress
      setIsAnimating(true) // Start animation
      setActiveIndex(prevIndex => [prevIndex[0] + newDirection, newDirection])
    }
  }

  return (
    <div className="main-wrapper">
      <div className="wrapper">
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map(item => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="cardd"
                key={item}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left"
                    } else if (item === visibleItems[1]) {
                      return "center"
                    } else {
                      return "right"
                    }
                  },
                }}
                variants={variants}
                initial="enter"
                animate={isAnimating ? "center" : false} // Control animation start
                exit="exit"
                transition={{ duration: 1 }}
                onAnimationComplete={handleAnimationComplete} // Animation complete callback
              >
                {item}
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
      <div className="buttons">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          ◀︎
        </motion.button>
        <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          ▶︎
        </motion.button>
      </div>
    </div>
  )
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 }
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1,
    }
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 }
  },
}

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2,
  }
  return indexes[position()]
}

export default ThreeDCarousel
