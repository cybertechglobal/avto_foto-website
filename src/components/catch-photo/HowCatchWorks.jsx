import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CustomContainer from "../layout/Container"
import Timeline from "../ui/Timeline"
import Title from "../ui/Title"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { t } from "i18next"

const HowCatchWorks = () => {
  const { t } = useTranslation()

  const steps = [
    {
      number: 1,
      left: (
        <div className="timeline-text">
          <p>{t("howCatchWorks.scanVin")}</p>
          <span>{t("howCatchWorks.scanVinDesc")}</span>
        </div>
      ),
      right: (
        <div className="timeline-image">
          <StaticImage
            src="../../assets/images/avto-photo/vin_icon.png"
            alt="vin photo"
          />
        </div>
      ),
    },
    {
      number: 2,
      right: (
        <div className="timeline-text">
          <p>{t("howCatchWorks.photographVehicle")}</p>
          <span>{t("howCatchWorks.photographVehicleDesc")}</span>
        </div>
      ),
      left: (
        <div className="timeline-image">
          <StaticImage
            src="../../assets/images/avto-photo/photograph_icon.png"
            alt="photograph photo"
          />
        </div>
      ),
    },
    {
      number: 3,
      left: (
        <div className="timeline-text">
          <p>{t("howCatchWorks.selectImage")}</p>
          <span>{t("howCatchWorks.selectImageDesc")}</span>
        </div>
      ),
      right: (
        <div className="timeline-image">
          <StaticImage
            src="../../assets/images/avto-photo/image_processing_icon.png"
            alt="image processing photo"
          />
        </div>
      ),
    },
    {
      number: 4,
      right: (
        <div className="timeline-text">
          <p>{t("howCatchWorks.distributeImages")}</p>
          <span>{t("howCatchWorks.distributeImagesDesc")}</span>
        </div>
      ),
      left: (
        <div className="timeline-image">
          <StaticImage
            src="../../assets/images/avto-photo/distribute_icon.png"
            alt="branding photo"
          />
        </div>
      ),
    },
  ]

  return (
    <div style={{ background: "var(--color-dark-secondary)" }}>
      <CustomContainer>
        <div className="HowCatchWorks-container">
          <Title>
            {t("howCatchWorks.title1")} 
            <span className="color-primary color-gradient">{t("howCatchWorks.title2")}</span>?
          </Title>
          <Timeline steps={steps} />
        </div>
      </CustomContainer>
    </div>
  )
}

export default HowCatchWorks
