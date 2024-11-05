import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import { links } from "../../helpers/consts/navbarData"
import "../../styles/navbar.css"
import Button from "../ui/Button"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import SiteContainer from "./SiteContainer"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const defaultLanguages = [
/*  {
    id: "en",
    name: "English",
  },
  {
    id: "de",
    name: "German",
  },*/
  {
    id: "ru",
    name: "Russion",
  }
]

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [openLang, setOpenLang] = useState(false)

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

  const { languages, originalPath, t, i18n, language } = useI18next()

  // const selectedLanguage = defaultLanguages.find(lang => lang.id === language);
  const image = data.allFile.edges.find(
    edge => edge.node.relativePath === `lang/${language}.png`
  )

  const imageData = getImage(image?.node?.childImageSharp?.gatsbyImageData)

  const selectedLanguage = {
    language,
    icon: imageData,
  }

  const allLanguages = defaultLanguages.map(lang => {
    const image = data.allFile.edges.find(
      edge => edge.node.relativePath === `lang/${lang.id}.png`
    )

    if (!image) {
      return null
    }

    const imageData = getImage(image.node.childImageSharp.gatsbyImageData)

    return {
      ...lang,
      icon: imageData,
    }
  })

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    let lastScrollTop = 0

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop

      // Replace 'nav' with your actual target element's selector.
      const nav = document.querySelector("nav")

      if (st > lastScrollTop) {
        // downscroll code
        if (st > 201) {
          document.getElementById("navbar").style.top = "-78px"
        }
      } else {
        // upscroll code
        document.getElementById("navbar").style.top = "0"
      }

      lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    // <div style={{ position: "sticky", top: "0", zIndex: '99' }}>
    <SiteContainer>
      <div
        className={`nav-backdrop ${showMenu ? "show" : ""}`}
        onClick={() => setShowMenu(false)}
      ></div>
      <nav id="navbar">
        <div className="wrapper container-md custom-padding">
          <div style={{ display: "flex", cursor: "pointer" }}>
            <Link to="/">
              <StaticImage
                src="../../assets/images/logo-with-bg.png"
                loading="eager"
                alt="АвтоФото logo"
                width={65}
                placeholder="none"
              />
            </Link>
          </div>

          <DesktopNav links={links} />

          <MobileNav
            showMenu={showMenu}
            links={links}
            selectedLanguage={selectedLanguage}
            allLanguages={allLanguages}
          />

         <div className="d-flex gap-3">
            {/*  <div
              className="language"
              onClick={() => setOpenLang(prev => !prev)}
            >
              <div className="lang-img-container">
                <GatsbyImage
                  style={{ height: "100%", width: "31px" }}
                  image={selectedLanguage.icon}
                  alt={selectedLanguage.language}
                />
              </div>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ color: "var(--color-gray)" }}
                />
              </span>

             <div className={`languages ${openLang ? "show" : ""}`}>
                <ul>
                  {allLanguages.map(lng => (
                    <li key={lng.id}>
                      <Link
                        to={originalPath}
                        language={lng.id}
                        style={{
                          textDecoration:
                            i18n.resolvedLanguage === lng
                              ? "underline"
                              : "none",
                        }}
                      >
                        <GatsbyImage
                          className="lang-img-container lang-image"
                          image={lng.icon}
                          alt={lng.name}
                        />
                        {lng.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>*/}

            <div className="request-demo-button">
              <Button type="primary" className="p-0">
                <Link to="/contact-us" className="button-link">
                  {t("global.requestDemo")}
                </Link>
              </Button>
            </div>
          </div>

          <div
            className={`hamburger ${showMenu ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </SiteContainer>
    // </div>
  )
}

export default Navbar
