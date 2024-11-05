import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

import "../../styles/global.css"
import "../..//styles/custom.scss"
import SeeInAction from "./SeeInAction"
import FooterLinks from "./FooterLinks"
import SiteContainer from "./SiteContainer"
import CookieConsentComponent from "../ui/CookieConsent"

const Layout = ({ children, seeInAction = true }) => {
  return (
    <>
      <Navbar />
      <div style={{ height: "77px", width: "100%" }}></div>
      {children}
      {seeInAction && <SeeInAction />}
      <FooterLinks />
      <SiteContainer>
        <div
          style={{ background: "rgba(140, 141, 146, 0.5)", height: "1px" }}
        ></div>
      </SiteContainer>
      <Footer />
     {/* <CookieConsentComponent />*/}
    </>
  )
}

export default Layout
