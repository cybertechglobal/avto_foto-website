// src/components/CookieConsent.js
import React from "react"
import CookieConsent, { Cookies } from "react-cookie-consent"
import { useLocation } from "@gatsbyjs/reach-router" // this helps tracking the location
import {
  init as initGoogleAnalytics,
  initializeAndTrack,
} from "gatsby-plugin-gdpr-cookies"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const CookieConsentComponent = () => {
  const location = useLocation()
  const { t } = useTranslation()

  const handleAccept = () => {
    Cookies.set("gatsby-gdpr-google-analytics", true)
    initializeAndTrack(location)
    // initGoogleAnalytics() // Initialize Google Analytics after user accepts cookies
  }

  return (
    <CookieConsent
      location="bottom"
      buttonText={t("global.accept")}
      cookieName="gatsby-gdpr-google-analytics"
      onAccept={handleAccept}
      enableDeclineButton
      declineButtonText={t("global.deny")}
      onDecline={() => {
        Cookies.set("gatsby-gdpr-google-analytics", false)
      }}
      containerClasses="container-consent"
      buttonWrapperClasses="button-wrapper-consent"
      buttonClasses="button-consent"
      declineButtonClasses="button-decline-consent"
      contentClasses="content-consent"
      flipButtons
      style={{
        background: "var(--color-dark-secondary)",
        boxShadow: "rgb(25 24 24) 0px -2px 14px 0px",
        color: "var(--color-text-primary)",
      }}
      buttonStyle={{
        fontSize: ".9rem",
        background: "rgb(82 155 212)",
        color: "#fff",
        padding: "1rem 2.5rem",
        borderRadius: "8px",
      }}
    >
      {t("global.cookieText1")}{" "}
      <Link to="/privacy-notice">{t("global.cookieText2")}</Link>{" "}
      {t("global.cookieText3")}
    </CookieConsent>
  )
}

export default CookieConsentComponent
