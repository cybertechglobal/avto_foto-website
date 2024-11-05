import {
  faCheckDouble,
  faGears,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ThreeTextSection from "../ui/ThreeTextSection"
import { useTranslation } from "gatsby-plugin-react-i18next"

const data = [
  {
    title: "backdropsSection.readyToGo",
    subtitle: "backdropsSection.readyToGoDesc",
    icon: faGears,
  },
  {
    title: "backdropsSection.mixAndMatch",
    subtitle: "backdropsSection.mixAndMatchDesc",
    icon: faRightLeft,
  },
  {
    title: "backdropsSection.bespoke100",
    subtitle: "backdropsSection.bespoke100Desc",
    icon: faCheckDouble,
  },
]

const BackdropsSection = () => {
  const { t } = useTranslation()

  return (
    <ThreeTextSection
      data={data}
      title={
        <>
          {t("backdropsSection.title1")} 
          <span className="color-primary color-gradient">
            {t("backdropsSection.title2")}
          </span>{" "}
          {t("backdropsSection.title3")}
        </>
      }
      subtitle="backdropsSection.subtitle"
      image={
        <>
          <StaticImage
            src="../../assets/images/backdrops.png"
            alt="backdrops photo"
          />
        </>
      }
    />
  )
}

export default BackdropsSection
