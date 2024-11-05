import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import CustomContainer from "../layout/Container"
import {
  faMicrochip,
  faHandSparkles,
  faCubes,
  faRankingStar,
  faArrowsToCircle,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Title from "../ui/Title"
import Card from "../ui/Card"
import { useTranslation } from "gatsby-plugin-react-i18next"

const WhyCatch = () => {
  const { t } = useTranslation()

  return (
    <div style={{ background: "var(--color-dark-secondary)" }}>
      <CustomContainer>
        <div className="WhyCatch-container">
          <Title>
            {t("whyCatch.title1")}
            <span className="color-primary color-gradient"> {t("whyCatch.title2")}</span>
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
                    <FontAwesomeIcon icon={faRankingStar} />
                    <h5>{t("global.continuousImprovement")}</h5>
                    <p>{t("global.continuousImprovementText")}</p>
                  </div>
                </Card>
              </Col>
              <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
                <Card className="WhyCatch-card">
                  <div className="WhyCatch-card-container">
                    <FontAwesomeIcon icon={faArrowsToCircle} />
                    <h5>{t("global.seamlessIntegration")}</h5>
                    <p>{t("global.seamlessIntegrationText")}</p>
                  </div>
                </Card>
              </Col>
              <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
                <Card className="WhyCatch-card">
                  <div className="WhyCatch-card-container">
                    <FontAwesomeIcon icon={faHeadset} />
                    <h5>{t("global.dedicatedSupport")}</h5>
                    <p>{t("global.dedicatedSupportText")}</p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </CustomContainer>
    </div>
  )
}

export default WhyCatch
