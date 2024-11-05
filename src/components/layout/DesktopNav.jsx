import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import { Trans, useTranslation, Link } from "gatsby-plugin-react-i18next"

//  className={`nav-links ${showMenu ? "show" : ""}`}
const DesktopNav = ({ links }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const { t } = useTranslation()

  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={index}>
          <>
            {link.children ? (
              <>
                <label onClick={() => handleToggle(index)}>
                  {t(link.text)}
                  <span className="ms-2 arrow-container">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </label>
                <div className="mega-box">
                  <div className="content">
                    <div className="row" style={{ flex: "2" }}>
                      <ul className="mega-links">
                        {link.children.links.map((link, index) => (
                          <div
                            key={index}
                            className={`row-container col col-sm-12 col-xs-24`}
                          >
                            <Link
                              to={link?.url}
                              className="nav-child-link desktop-hover-links"
                            >
                              <h3>{t(link.text)}</h3>
                              <p>{t(link.description)}</p>
                              <div className="divider"></div>
                            </Link>
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="row" style={{ flex: "1" }}>
                      {link.children.extras && (
                        <div className="nav-child-link">
                          <h3>{t(link.children.extras.text)}</h3>
                          <p>{t(link.children.extras.description)}</p>
                          <Link to="/contact-us" className="request-demo">
                            {t("global.requestDemo")}
                            <FontAwesomeIcon icon={faArrowRight} />
                          </Link>
                          <p>{t(link.children.extras.description2)}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <Link className="nav-link-item" to={link.url}>
                {t(link.text)}
              </Link>
            )}
          </>
        </li>
      ))}
    </ul>
  )
}

export default DesktopNav
