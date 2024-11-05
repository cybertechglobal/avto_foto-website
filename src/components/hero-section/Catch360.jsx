import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../ui/Button"
import HeadText from "../ui/HeadText"
import Subtext from "../ui/Subtext"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import gif from "../../assets/images/BMW.gif"

const Catch360 = () => {
  const { t } = useTranslation()

  return (
    <div className="ClippingCard-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.8rem",
          flexBasis: "100%",
        }}
      >
        <HeadText className="bold-font">{t("catch360.titleHero")}</HeadText>
        <Subtext>{t("catch360.subtextHero")}</Subtext>
        <Button
          type="primary"
          className="p-0"
          style={{ alignSelf: "flex-start" }}
        >
          <Link to="/avto-360" className="button-link">
            {t("global.moreInfo")}
          </Link>
        </Button>
      </div>
      <div style={{ flexBasis: "100%", textAlign: "end" }}>
        <div className="catch360-image-container catch360-image">
          {/* <div className="dark-backdrop">
            <StaticImage
              src="../../assets/images/360-degree.svg"
              alt="360 degree rotate"
            />
          </div>
          <StaticImage
            // imgClassName="image-before slider-image"
            className="image-container catch360-custom-height"
            src="../../assets/images/features/avto360.png"
            alt="Catch360 photo"
            layout="fullWidth"
          /> */}
           <img src={gif} alt="АвтоФото 360 platform" />
        </div>
      </div>
    </div>
  )
}

export default Catch360
