import React from "react"
import CustomContainer from "../layout/Container"
import { Col, Container, Row } from "react-bootstrap"
import Title from "../ui/Title"
import Card from "../ui/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import SiteContainer from "../layout/SiteContainer"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const exploreMoreLinks = [
  {
    title: "global.catchPhoto",
    description: "moreSolutions.catchPhotoText",
    link: "/avto-photo",
  },
  {
    title: "global.catchCreator",
    description: "moreSolutions.catchCreatorText",
    link: "/avto-creator",
  },
  {
    title: "global.catchPanel",
    description: "moreSolutions.catchPanelText",
    link: "/avto-panel",
  },
  {
    title: "global.catchConnect",
    description: "moreSolutions.catchConnecttext",
    link: "/avto-connect",
  },
  {
    title: "global.catch360",
    description: "moreSolutions.catch360Text",
    link: "/avto-360",
  },
]

const MoreSolutions = ({ backgroundColor }) => {
  const { t } = useTranslation()

  return (
    <div style={backgroundColor ? { background: backgroundColor } : {}}>
      <SiteContainer>
        <CustomContainer>
          <div className="ExploreMore-container">
            <Title>
              {t("moreSolutions.solutionsText1")} 
              <span className="color-primary color-gradient">
                 {t("moreSolutions.solutionsText2")}
              </span>
            </Title>
            <div className="catch-cards">
              <Row xs={1} md={3} className="g-4">
                {/* For screens greater than 1400px */}
                {exploreMoreLinks.map((link, index) => (
                  <Col key={index} xl={4} lg={6} md={6} xs={12}>
                    <Card>
                      <div className="ExploreMore-card-container">
                        <h5>{t(link.title)}</h5>
                        <div className="border-line"></div>
                        <p className="subtext">{t(link.description)}</p>
                        <div className="d-inline-flex">
                          <Link
                            to={link.link}
                            className="link-text color-primary"
                          >
                            {t("global.viewSolution")}
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
      </SiteContainer>
    </div>
  )
}

export default MoreSolutions
