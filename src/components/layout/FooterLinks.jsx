import React, { useState } from "react"
import CustomContainer from "./Container"
import { Col, Container, Row } from "react-bootstrap"
import { Link as GatsbyLink } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import SiteContainer from "./SiteContainer"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const FooterLinks = () => {
  const { t } = useTranslation()

  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SiteContainer>
      <CustomContainer>
        <div className="footerLinks-container">
          <Row xs={1} md={3} className="g-4">
            {/* For screens greater than 1400px */}
            <Col xl={2} lg={6} md={6} xs={12}>
              <div
                className={`links-container ${openIndex === 0 ? "open" : ""}`}
              >
                <h5 onClick={() => handleToggle(0)}>
                  {t("global.solutions")}{" "}
                  <span className="footer-arrow-icon">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </h5>
                <div className="border-line"></div>
                <ul className="footer-links">
                  <li>
                    <Link to="/avto-photo">{t("global.catchPhoto")}</Link>
                  </li>
                  <li>
                    <Link to="/avto-creator">{t("global.catchCreator")}</Link>
                  </li>
                  <li>
                    <Link to="/avto-panel">{t("global.catchPanel")}</Link>
                  </li>
                  <li>
                    <Link to="/avto-connect">{t("global.catchConnect")}</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={6} md={6} xs={12}>
              <div
                className={`links-container ${openIndex === 1 ? "open" : ""}`}
              >
                <h5 onClick={() => handleToggle(1)}>
                  {t("global.tools")}{" "}
                  <span className="footer-arrow-icon">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </h5>
                <div className="border-line"></div>
                <ul className="footer-links">
                  <li>
                    <Link to="/clipping">{t("tools.clipping")}</Link>
                  </li>
                  <li>
                    <Link to="/photobox">{t("tools.photobox")}</Link>
                  </li>
                  <li>
                    <Link to="/3in1">{t("tools.3in1")}</Link>
                  </li>
                  <li>
                    <Link to="/enhancement">{t("tools.enhancement")}</Link>
                  </li>
                  <li>
                    <Link to="/branding">{t("tools.branding")}</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={6} md={6} xs={12}>
              <div
                className={`links-container ${openIndex === 2 ? "open" : ""}`}
              >
                <h5 onClick={() => handleToggle(2)}>
                  {t("global.services")}{" "}
                  <span className="footer-arrow-icon">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </h5>
                <div className="border-line"></div>
                <ul className="footer-links">
                  <li>
                    <Link to="/avto-360">{t("global.catch360")}</Link>
                  </li>
                  {/*<li>
                    <a
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdXS54AKfqImLdDWzo323Ihy8ysrPWjEtWQ9hKXXG8U3bkS_Q/viewform?fbzx=5425615245619491595&pli=1"
                    >
                      {t("global.onlineForm")}
                    </a>
                  </li>
                  <li>
                    <a href="/Background_Questionnaire.docx" download>
                      {t("global.downloadForm")}
                    </a>
                  </li>*/}
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={6} md={6} xs={12}>
              <div
                className={`links-container ${openIndex === 3 ? "open" : ""}`}
              >
                <h5 onClick={() => handleToggle(3)}>
                  {t("global.catch")}{" "}
                  <span className="footer-arrow-icon">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </h5>
                <div className="border-line"></div>
                <ul className="footer-links">
                  <li>
                    <Link to="/contact-us">{t("global.requestDemo")}</Link>
                  </li>
                  <li>
                    <Link to="/about-us">{t("global.aboutUs")}</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">{t("global.contactUs")}</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={6} md={6} xs={12}>
              <div
                className={`links-container ${openIndex === 4 ? "open" : ""}`}
              >
                <h5 onClick={() => handleToggle(4)}>
                  {t("global.policies")}{" "}
                  <span className="footer-arrow-icon">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </h5>
                <div className="border-line"></div>
                <ul className="footer-links">
                  <li>
                    <Link to="/privacy-notice">
                      {t("global.privacyNotice")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/data-processing">
                      {t("global.dataProcessing")}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={6} md={6} xs={12}>
              <div className={`links-container open`}>
                <h5>ИНФОРМАЦИЯ</h5>
                <div className="border-line"></div>
                <ul className="footer-links">
                  <li style={{ cursor: "initial" }} className="info">
                    <FontAwesomeIcon
                      className="color-primary"
                      icon={faLocationDot}
                    />
                    Россия, Москва, Мосфильмовская 42 стр.1
                  </li>
                  <li style={{ cursor: "initial" }} className="info">
                    <FontAwesomeIcon
                      className="color-primary"
                      icon={faEnvelope}
                    />
                    Info@avtofoto.com
                  </li>
                  <li style={{ cursor: "initial" }} className="info">
                    <FontAwesomeIcon
                      className="color-primary"
                      icon={faEnvelope}
                    />
                    support@avtofoto.com
                  </li>
                  <li style={{ cursor: "initial" }} className="info">
                    <FontAwesomeIcon className="color-primary" icon={faPhone} />
                    +7 925 545 15 20
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </CustomContainer>
    </SiteContainer>
  )
}

export default FooterLinks
