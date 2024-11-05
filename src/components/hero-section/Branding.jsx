import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../ui/Button"
import HeadText from "../ui/HeadText"
import Subtext from "../ui/Subtext"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const Branding = () => {
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
        <HeadText className="bold-font">{t("branding.title")}</HeadText>
        <Subtext>{t("branding.subtext")}</Subtext>
        <Button
          type="primary"
          className="p-0"
          style={{ alignSelf: "flex-start" }}
        >
          <Link to="/branding" className="button-link">
            {t("global.moreInfo")}
          </Link>
        </Button>
      </div>
      <div style={{ flexBasis: "100%", textAlign: "end" }}>
        <div className="image-container">
          <StaticImage
            // imgClassName="image-before slider-image"
            className="image-container"
            src="../../assets/images/features/branding_big.png"
            alt="branding photo"
            layout="fullWidth"
          />
        </div>
      </div>
    </div>
  )
}

export default Branding
