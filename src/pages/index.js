import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout/Layout"
import HeroSection from "../components/hero-section/HeroSection"
import AiSection from "../components/ai-section/AiSection"
import WhyCatch from "../components/why-catch/WhyCatch"
import QnASection from "../components/QnA-section/QnASection"
import ExploreMore from "../components/explore-more-section/ExploreMore"
import SiteContainer from "../components/layout/SiteContainer"
import { graphql } from "gatsby"
import Clients from "../components/brrm-and-clients/BrrmAndClients"

const IndexPage = () => (
  <Layout>
    <SiteContainer>
      <HeroSection />
      <AiSection />
    </SiteContainer>
    <Clients/>
    <WhyCatch />
    <SiteContainer>
      <QnASection />
    </SiteContainer>
    <ExploreMore />
  </Layout>
)

export const Head = () => <Seo title="Удаление заднего фона за считанные секунды." />

export default IndexPage

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
`;