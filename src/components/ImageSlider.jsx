import React, { useState } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const ImageSlider = ({ firstImg, secondImg, className, sliderStyle = {} }) => {
  const [position, setPosition] = useState(50)

  const handleSliderChange = e => {
    setPosition(e.target.value)
  }

  if (!firstImg || !secondImg) {
    return (
      <p style={{ textAlign: "center" }}>
        Sorry, something is wrong with image slider.
      </p>
    )
  }

  const beforeImage = getImage(firstImg.node.childImageSharp.gatsbyImageData)
  const afterImage = getImage(secondImg.node.childImageSharp.gatsbyImageData)

  return (
    <>
      <div
        className="slider-container"
        style={{...sliderStyle, "--position": `${position}%` }}
      >
        <GatsbyImage
          image={beforeImage}
          alt="Before image"
          imgClassName="image-before slider-image"
          className={className}
          style={{ zIndex: "1" }}
          imgStyle={{ background: "#333333" }}
        />
        <GatsbyImage
          image={afterImage}
          alt="After image"
          imgClassName="image-after slider-image"
          className={className}
          style={{ position: "absolute", inset: "0" }}
        />

        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={handleSliderChange}
          aria-label="Percentage of before photo shown"
          className="slider"
        />
        <div className="slider-line" aria-hidden="true"></div>
        <div className="slider-button" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="128"
              y1="40"
              x2="128"
              y2="216"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="96"
              y1="128"
              x2="16"
              y2="128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <polyline
              points="48 160 16 128 48 96"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></polyline>
            <line
              x1="160"
              y1="128"
              x2="240"
              y2="128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <polyline
              points="208 96 240 128 208 160"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></polyline>
          </svg>
        </div>
      </div>
    </>
  )
}

export default ImageSlider

// import React, { useRef, useState } from "react"
// import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

// const ImageSlider = () => {
//   const sliderRef = useRef()
//   const [sliderValue, setSliderValue] = useState(50)

//   const handleSliderChange = () => {
//     setSliderValue(sliderRef.current.value)
//   }

//   const beforeImage = getImage("../assets/images/avtocar.jpg") // Update with your "before" image path
//   const afterImage = getImage("../assets/images/carwbackground.jpg") // Update with your "after" image path

//   return (
//     <main>
//       <div
//         className="slider-container"
//         style={{ "--position": `${position}%` }}
//       >
//         <div className="image-container">
//           <img
//             className="image-before slider-image"
//             src={car}
//             alt="color photo"
//           />
//           <img
//             className="image-after slider-image"
//             src={carbg}
//             alt="black and white"
//           />
//         </div>
//         {/* step="10" */}
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={position}
//           onChange={handleSliderChange}
//           aria-label="Percentage of before photo shown"
//           className="slider"
//         />
//         <div className="slider-line" aria-hidden="true"></div>
//         <div className="slider-button" aria-hidden="true">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="30"
//             height="30"
//             fill="currentColor"
//             viewBox="0 0 256 256"
//           >
//             <rect width="256" height="256" fill="none"></rect>
//             <line
//               x1="128"
//               y1="40"
//               x2="128"
//               y2="216"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></line>
//             <line
//               x1="96"
//               y1="128"
//               x2="16"
//               y2="128"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></line>
//             <polyline
//               points="48 160 16 128 48 96"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></polyline>
//             <line
//               x1="160"
//               y1="128"
//               x2="240"
//               y2="128"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></line>
//             <polyline
//               points="208 96 240 128 208 160"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="16"
//             ></polyline>
//           </svg>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default ImageSlider
