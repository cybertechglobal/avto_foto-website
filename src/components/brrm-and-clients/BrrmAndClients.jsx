import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import CustomContainer from "../layout/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Title from "../ui/Title"
import Card from "../ui/Card"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"

const Clients = () => {
  const { t } = useTranslation()

  return (
    <>
      <div style={{ background: "var(--color-dark-secondary)" }}>
        <CustomContainer>
          <div style={{ padding: "70px 0", maxWidth: "923px", margin: "auto" }}>
            <Title>
              <a
                href="https://brrm.eu/"
                target="_blank"
                rel="noopener noreferrer" // Added for security reasons
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  fontWeight: "bold",
                }} // Improved text styling
                aria-label="Visit BRRM website" // Added for accessibility
              >
                {t("brrm.title1")}
                <span className="color-primary color-gradient">
                  {` ${t("brrm.title2")}.`}
                </span>
              </a>
            </Title>
            <p className="subtext text-center">{t("brrm.description")}</p>
          </div>
        </CustomContainer>
      </div>

      <div
        className="clientsContainer"
        style={{ background: "var(--color-dark-primary)" }}
      >
        <Row xs={2} md={4} className="g-4">
          <Col className="client-logo-col">
            <StaticImage
              src="../../assets/images/clients/mercedes-benz.png"
              alt="Mercedes Benz logo"
              className="client-logo"
              placeholder="blurred"
            />
          </Col>

          <Col className="client-logo-col">
            <StaticImage
              src="../../assets/images/clients/Stellantis.png"
              alt="Stellantis logo"
              className="client-logo"
              placeholder="blurred"
            />
          </Col>

          <Col className="client-logo-col">
            <StaticImage
              src="../../assets/images/clients/kia.png"
              alt="Kia logo"
              className="client-logo"
              placeholder="blurred"
            />
          </Col>

          <Col className="client-logo-col">
            <StaticImage
              src="../../assets/images/clients/volkswagen.png"
              alt="Volkswagen logo"
              className="client-logo"
              placeholder="blurred"
            />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Clients
