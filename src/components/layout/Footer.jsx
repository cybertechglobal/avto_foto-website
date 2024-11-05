import React from "react"
import CustomContainer from "./Container"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import BottomRights from "../ui/BottomRights"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import SiteContainer from "./SiteContainer"

const Footer = () => {
  return (
    <SiteContainer>
      <CustomContainer>
        <div style={{ minHeight: "117px", display: "flex" }}>
          <Row className="footer-container">
            <Col md={4} xs={12} className="logo">
              <StaticImage
                src="../../assets/images/logo-with-bg.png"
                loading="eager"
                alt="АвтоФото logo"
                width={70}
                placeholder="none"
              />
            </Col>
            <Col md={4} xs={12}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <BottomRights />
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="media-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </CustomContainer>
    </SiteContainer>
  )
}

export default Footer
