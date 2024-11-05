import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Button from "../ui/Button"
import HeadText from "../ui/HeadText"
import Subtext from "../ui/Subtext"
import CustomContainer from "./Container"
import SiteContainer from "./SiteContainer"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const SeeInAction = () => {
  const { t } = useTranslation()

  return (
    <div style={{ background: "linear-gradient(90deg, #C03727 0%, #F8A045 100%)" }}>
      <SiteContainer>
        <CustomContainer>
          <div className="SeeInAction-container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                flexBasis: "100%",
              }}
            >
              <HeadText className="color-secondary">
                {t("seeInAction.title")}
              </HeadText>
              <Subtext className="color-secondary">
                {t("seeInAction.subtitle")}
              </Subtext>
              <Button
                type="secondary"
                className="p-0"
                style={{ alignSelf: "flex-start" }}
              >
                <Link to="/contact-us" className="button-link">
                  {t("global.requestDemo")}
                </Link>
              </Button>
            </div>
            <div style={{ flexBasis: "100%", width: "100%" }}>
              <StaticImage
                src="../../assets/images/ai.png"
                loading="eager"
                alt="АвтоФото ИИ"
                placeholder="blurred"
                layout="fullWidth"
              />
            </div>
          </div>
        </CustomContainer>
      </SiteContainer>
    </div>
  )
}

export default SeeInAction
