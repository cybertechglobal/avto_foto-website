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
import Subtext from "../ui/Subtext"

const PdfDocuments = () => {
  return (
    <CustomContainer>
      <div className="WhyCatch-container">
        <Title>
          Dive into Our <span className="color-primary color-gradient">PDF Presentations</span>
        </Title>
        <Subtext>
          Whether you're interested in learning about the overall app, its
          unique features, or delving into the background catalog, we've got you
          covered. Download each presentation to embark on a journey of Catch
          Photo exploration!
        </Subtext>
        <div className="catch-cards">
          <Row xs={1} md={3} className="g-4">
            {/* For screens greater than 1400px */}
            <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
              <Card className="WhyCatch-card">
                <div className="WhyCatch-card-container">
                  <FontAwesomeIcon icon={faMicrochip} />
                  <h5>АвтоФото</h5>
                  <p>In-depth look at the АвтоФото app as a whole.</p>
                </div>
              </Card>
            </Col>
            <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
              <Card className="WhyCatch-card">
                <div className="WhyCatch-card-container">
                  <FontAwesomeIcon icon={faHandSparkles} />
                  <h5>Features only</h5>
                  <p>
                    From powerful editing tools to intelligent filters and much
                    more.
                  </p>
                </div>
              </Card>
            </Col>
            <Col className="d-flex" xl={4} lg={6} md={6} xs={12}>
              <Card className="WhyCatch-card">
                <div className="WhyCatch-card-container">
                  <FontAwesomeIcon icon={faCubes} />
                  <h5>Background catalogue</h5>
                  <p>
                    Discover various photoboxes, from cozy interiors to elegant
                    rooms.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </CustomContainer>
  )
}

export default PdfDocuments
