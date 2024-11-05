import React from "react"
import CustomContainer from "../layout/Container"
import { Col, Container, Row } from "react-bootstrap"
import Title from "../ui/Title"
import Card from "../ui/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const exploreMoreLinks = [
  {
    title: "tools.clipping",
    description: "tools.clippingDesc",
    link: "/clipping",
  },
  {
    title: "tools.photobox",
    description: "tools.photoboxDesc",
    link: "/photobox",
  },
  {
    title: "tools.3in1",
    description: "tools.3in1Desc",
    link: "/3in1",
  },
  {
    title: "tools.enhancement",
    description: "tools.enhancementDesc",
    link: "/enhancement",
  },
  {
    title: "tools.branding",
    description: "tools.brandingDesc",
    link: "/branding",
  },
]

const ExploreMore = () => {
  const { t } = useTranslation()

  return (
    <div style={{ background: "var(--color-dark-secondary)" }}>
      <CustomContainer>
        <div className="ExploreMore-container">
          <Title>
            {t("exploreMore.title1")}
            <span className="color-primary color-gradient">{t("exploreMore.title2")}</span>
          </Title>
          <div className="catch-cards">
            <Row xs={1} md={3} className="g-4">
              {/* For screens greater than 1400px */}
              {exploreMoreLinks.map((link, index) => (
                <Col
                  key={index}
                  className="d-flex"
                  xl={4}
                  lg={6}
                  md={6}
                  xs={12}
                >
                  <Card>
                    <div className="ExploreMore-card-container">
                      <h5 className="text-start">{t(link.title)}</h5>
                      <div className="border-line"></div>
                      <p className="subtext">{t(link.description)}</p>
                      <div className="d-inline-flex mt-auto">
                        <Link
                          to={link.link}
                          className="link-text color-primary"
                        >
                          {t("tools.viewTool")}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </CustomContainer>
    </div>
  )
}

export default ExploreMore
