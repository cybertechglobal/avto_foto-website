import { graphql } from "gatsby"
import React from "react"
import ContactUsForm from "../components/contact-us/ContactUsForm"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import HeadText from "../components/ui/HeadText"
import Subtext from "../components/ui/Subtext"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const ContactUs = () => {
  const { t } = useTranslation()

  return (
    <Layout seeInAction={false}>
      <CustomContainer>
        <div className="AiSection-container-card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
              flexBasis: "100%",
            }}
          >
            <HeadText className="bold-font">{t("contactUs.title")}</HeadText>
            <Subtext style={{marginBottom: 0}}>{t("contactUs.subtext")}<br/><br/> {t("contactUs.subtext2")}</Subtext>
          </div>
          <div style={{ flexBasis: "100%", width: "100%" }}></div>
        </div>
      </CustomContainer>
      <ContactUsForm />
      <div style={{ background: "linear-gradient(90deg, #C03727 0%, #F8A045 100%)" }}>
        <CustomContainer>
          <div className="banner">
            <h4 className="bold-font">{t("contactUs.help")}</h4>
            <Link className="color-white" to="/#qa-section">
              {t("contactUs.viewFAQ")}
            </Link>
          </div>
        </CustomContainer>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Связаться с нами"
    description="Сделайте первый шаг, чтобы раскрыть потенциал продаж своих фотографий. Закажите демо-версию сегодня, чтобы увидеть АвтоФото в действии!"
  />
)

export default ContactUs

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
