import React from "react"
import { Col, Row } from "react-bootstrap"
import CustomContainer from "../layout/Container"
import {
  faMicrochip,
  faHandSparkles,
  faCubes,
  faArrowsToCircle,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Title from "../ui/Title"
import Card from "../ui/Card"
import { useTranslation } from "gatsby-plugin-react-i18next"

const SmartSolution = () => {
  const { t } = useTranslation()

  return (
    <CustomContainer>
      <div className="WhyCatch-container">
        <Title>
          {t("360.catch360is")} 
          <span className="color-primary color-gradient">{t("360.smartSolution")}</span>
          {t("360.forAutomotive")}
        </Title>
        <div className="catch-cards">
          <Row xs={1} md={3} className="g-4">
            {/* For screens greater than 1400px */}
            <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
              <Card className="WhyCatch-card">
                <div className="WhyCatch-card-container">
                  <FontAwesomeIcon icon={faMicrochip} />
                  <h5>{t("global.aiFeatures")}</h5>
                  <p>{t("global.aiFeaturesText")}</p>
                </div>
              </Card>
            </Col>
            <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
              <Card className="WhyCatch-card">
                <div className="WhyCatch-card-container">
                  <FontAwesomeIcon icon={faHandSparkles} />
                  <h5>{t("global.easyToUse")}</h5>
                  <p>{t("global.easyToUseText")}</p>
                </div>
              </Card>
            </Col>
            <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
              <Card className="WhyCatch-card">
                <div className="WhyCatch-card-container">
                  <FontAwesomeIcon icon={faCubes} />
                  <h5>{t("global.allInOne")}</h5>
                  <p>{t("global.allInOneText")}</p>
                </div>
              </Card>
            </Col>
            <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
              <Card className="WhyCatch-card">
                <div className="WhyCatch-card-container">
                  <FontAwesomeIcon icon={faHandSparkles} />
                  <h5>{t("global.virtualShowroom")}</h5>
                  <p>{t("global.virtualShowroomText")}</p>
                </div>
              </Card>
            </Col>
            <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
              <Card className="WhyCatch-card">
                <div className="WhyCatch-card-container">
                  <FontAwesomeIcon icon={faArrowsToCircle} />
                  <h5>{t("global.mobileOptimised")}</h5>
                  <p>{t("global.mobileOptimisedText")}</p>
                </div>
              </Card>
            </Col>
            <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
              <Card className="WhyCatch-card">
                <div className="WhyCatch-card-container">
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                  <h5>{t("global.automaticDataSync")}</h5>
                  <p>{t("global.automaticDataSyncText")}</p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </CustomContainer>
  )
}

export default SmartSolution
