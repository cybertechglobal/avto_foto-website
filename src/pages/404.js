import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Seo from "../components/seo"

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <div style={{ textAlign: "center", padding: "5rem 0" }}>
        <h1>{t("404.title")}</h1>
        <p>{t("404.subtitle")}</p>
        <p
          style={{
            marginTop: "5rem",
            fontSize: "9rem",
            color: "#ce584c",
            letterSpacing: "10px",
          }}
        >
          404
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

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
