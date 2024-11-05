import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import CustomContainer from "../layout/Container"
import Subtext from "../ui/Subtext"
import Title from "../ui/Title"
import { useTranslation } from "gatsby-plugin-react-i18next"

const ThreeTextSection = ({ title, subtitle, data, image }) => {
  const { t } = useTranslation()

  return (
    <CustomContainer>
      <div className="PowerOfCatch-container">
        <div className="PowerOfCatch-text-container">
          <Title>{title}</Title>
          {subtitle && <Subtext>{t(subtitle)}</Subtext>}
        </div>
        <div className="PowerOfCatch-container-card">
          <div
            style={{
              height: "auto",
              flexBasis: "100%",
              flex: "2",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                gap: "1rem",
              }}
            >
              {data.map((item, index) => (
                <div key={index} className="PowerOfCatch-card-container">
                  <h5 className="cursor-initial">
                    <FontAwesomeIcon
                      style={{ fontSize: "1.9rem" }}
                      className="color-primary"
                      icon={item.icon}
                    />
                    {t(item.title)}
                  </h5>
                  <p>{t(item.subtitle)}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flexBasis: "100%", flex: "3" }}>{image}</div>
        </div>
      </div>
    </CustomContainer>
  )
}

export default ThreeTextSection
