import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React, { useState } from "react"
import CustomContainer from "../layout/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ImageGallery = ({ data, text = false }) => {
  const { t } = useTranslation()

  const slidesToShow = (data.length > 3) ? 3 : data.length;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow ?? 3, // Number of items to show at once
    slidesToScroll: 1,
    prevArrow: <FontAwesomeIcon className="color-primary" icon={faArrowLeft} />,
    nextArrow: (
      <FontAwesomeIcon className="color-primary" icon={faArrowRight} />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <CustomContainer>
      <div className="slider-containerr">
        {data ? (
          <Slider {...settings}>
            {/* Replace the following divs with your actual content */}
            {data.map((file, index) => {
              const imageData = getImage(
                file.img.node.childImageSharp.gatsbyImageData
              )

              return (
                <div key={index} className="d-flex flex-column gap-2">
                  <div
                    className="slider-item"
                    style={text ? { borderRadius: "10px" } : {}}
                  >
                    <GatsbyImage image={imageData} alt="image in slider" />
                  </div>
                  {file.text && <span>{t(file.text)}</span>}
                </div>
              )
            })}
          </Slider>
        ) : (
          <Slider {...settings}>
            {/* Replace the following divs with your actual content */}
            <div className="slider-item">
              <StaticImage src="../../assets/images/carwbackground.jpg" />
            </div>
            <div className="slider-item">
              <StaticImage src="../../assets/images/carwbackground.jpg" />
            </div>
            <div className="slider-item">
              <StaticImage src="../../assets/images/carwbackground.jpg" />
            </div>
            <div className="slider-item">
              <StaticImage src="../../assets/images/carwbackground.jpg" />
            </div>
            <div className="slider-item">
              <StaticImage src="../../assets/images/carwbackground.jpg" />
            </div>
            <div className="slider-item">
              <StaticImage src="../../assets/images/carwbackground.jpg" />
            </div>
          </Slider>
        )}
      </div>
    </CustomContainer>
  )
}

export default ImageGallery
