import React, { useEffect, useState } from "react"
import {
  faChevronDown,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation, Link, useI18next } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MobileNav = ({ showMenu, links, selectedLanguage, allLanguages }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/lang/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  const { t } = useTranslation()

  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const { languages, originalPath, i18n, language } = useI18next()

  // const allLanguages = defaultLanguages.map(lang => {
  //   const image = data.allFile.edges.find(
  //     edge => edge.node.relativePath === `lang/${lang.id}.png`
  //   )

  //   if (!image) {
  //     return null
  //   }

  //   const imageData = getImage(image.node.childImageSharp.gatsbyImageData)

  //   return {
  //     ...lang,
  //     icon: imageData,
  //   }
  // })

  return (
    <ul className={`nav-links-mobile ${showMenu ? "show" : ""}`}>
      <AnimatePresence initial={false} mode="wait">
        {openIndex === null ? (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.2 }}
            key="main"
          >
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <li>
                  {link.children ? (
                    <>
                      <label onClick={() => handleToggle(index)}>
                        {t(link.text)}
                        <span className="nav-arrow ms-2 arrow-container">
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
                                  className={`row-container col col-sm-24 col-xs-24`}
                                >
                                  <Link
                                    to={link?.url}
                                    className="nav-child-link"
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
                                <h3>{link.children.extras.text}</h3>
                                <p>{link.children.extras.description}</p>
                                <Link to="/contact-us" className="request-demo">
                                  {t("global.requestDemo")}
                                  <FontAwesomeIcon icon={faArrowRight} />
                                </Link>
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
                </li>
              </React.Fragment>
            ))}
           {/* <li>
              <label onClick={() => handleToggle(-1)}>
                Language
                <span className="nav-arrow ms-2 arrow-container">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </label>
          </li>*/}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.2 }}
            key="side"
          >
            <li
              className="menu-item-text"
              style={{
                cursor: "pointer",
                color: "var(--color-gray)",
                borderBottom: "none",
              }}
              onClick={() => setOpenIndex(null)}
            >
              <span className="me-1">
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>{" "}
              {openIndex === -1 ? "Language" : t(links[openIndex].text)}
            </li>
            {openIndex === -1 ? (
              <div className="languages-mobile-container">
                {allLanguages.map(lng => (
                  <div key={lng.id}>
                    <Link
                      to={originalPath}
                      language={lng.id}
                      className="languages-mobile"
                    >
                      <div
                        className={`custom-checkbox ${
                          selectedLanguage.language === lng.id ? "selected" : ""
                        }`}
                      ></div>
                      {lng.name}
                      <GatsbyImage
                        className="lang-img-container lang-mobile-image"
                        image={lng.icon}
                        alt={lng.name}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <ul>
                {links[openIndex].children.links.map((link, index) => (
                  <li key={index}>
                    <div
                      key={index}
                      className={`row-container col col-sm-24 col-xs-24`}
                    >
                      <Link to={link?.url} className="nav-child-link">
                        <h3>{t(link.text)}</h3>
                        <p>{t(link.description)}</p>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </ul>
  )

  // const transitions = useTransition(openIndex, {
  //   from: {
  //     opacity: 0,
  //     transform: openIndex === null ? "translateX(0)" : "translateX(100%)",
  //   },
  //   enter: { opacity: 1, transform: "translateX(0)" },
  //   leave: {
  //     opacity: 0,
  //     transform: openIndex === null ? "translateX(0)" : "translateX(-100%)",
  //   },
  // })

  // return (
  //   <ul className={`nav-links-mobile ${showMenu ? "show" : ""}`}>
  //     {transitions((style, item) =>
  //       item === null ? (
  //         <animated.div key="main-section" style={style}>
  //           {links.map((link, index) => (
  //             <>
  //               {link.children ? (
  //                 <>
  //                   <label onClick={() => handleToggle(index)}>
  //                     {link.text}
  //                     <span className="nav-arrow ms-2">
  //                       <FontAwesomeIcon icon={faChevronDown} />
  //                     </span>
  //                   </label>
  //                   <div className="mega-box">
  //                     <div className="content">
  //                       <div className="row" style={{ flex: "2" }}>
  //                         <ul className="mega-links">
  //                           {link.children.links.map((link, index) => (
  //                             <div
  //                               key={index}
  //                               className={`row-container col col-sm-24 col-xs-24`}
  //                             >
  //                               <Link to={link?.url} className="nav-child-link">
  //                                 <h3>{link.text}</h3>
  //                                 <p>{link.description}</p>
  //                                 <div className="divider"></div>
  //                               </Link>
  //                             </div>
  //                           ))}
  //                         </ul>
  //                       </div>
  //                       <div className="row" style={{ flex: "1" }}>
  //                         {link.children.extras && (
  //                           <div className="nav-child-link">
  //                             <h3>{link.children.extras.text}</h3>
  //                             <p>{link.children.extras.description}</p>
  //                             <Link to="/request-demo" className="request-demo">
  //                               Request Demo
  //                               <FontAwesomeIcon icon={faArrowRight} />
  //                             </Link>
  //                           </div>
  //                         )}
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </>
  //               ) : (
  //                 <Link className="nav-link-item" to={link.url}>
  //                   {link.text}
  //                 </Link>
  //               )}
  //             </>
  //           ))}
  //         </animated.div>
  //       ) : (
  //         <animated.div key="sub-section" style={style}>
  //           <li onClick={() => setOpenIndex(null)}>
  //             <span>
  //               <FontAwesomeIcon icon={faArrowLeft} />
  //             </span>{" "}
  //             {links[openIndex].text}
  //           </li>
  //           <ul>
  //             {links[openIndex].children.links.map((link, index) => (
  //               <li key={index}>
  //                 <div
  //                   key={index}
  //                   className={`row-container col col-sm-24 col-xs-24`}
  //                 >
  //                   <Link to={link?.url} className="nav-child-link">
  //                     <h3>{link.text}</h3>
  //                     <p>{link.description}</p>
  //                   </Link>
  //                 </div>
  //               </li>
  //             ))}
  //           </ul>
  //         </animated.div>
  //       )
  //     )}
  //   </ul>
  // )
}

export default MobileNav
