import React from "react"
import CustomContainer from "../components/layout/Container"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import HeadText from "../components/ui/HeadText"
import { graphql } from "gatsby"

const Gpdr = () => {
  return (
    <Layout>
      <CustomContainer>
        <div className="py-4 DataProcessing-container">
          <HeadText className="mb-4">GPDR</HeadText>
          <p className="mb-4">19 July, 2023</p>
          <p className="bold-font mb-4">АвтоФото as a ‘Data Controller’</p>
          <p className="mb-4">
            If you are located in the United Kingdom (UK) or European Union
            (EU), the UK or European version of the General Data Protection
            Regulation (GDPR) provides you (if we process your personal data as
            a Controller) with the additional rights listed below.
          </p>
          <p className="mb-4">
            <span className="bold-font">Right of Access. </span>
            You have the right to know what information we hold about you,
            including:
          </p>
          <ul className="mb-4">
            <li>
              • The specific pieces of personal information we have collected
              about you;
            </li>
            <li>
              • The categories of personal information we have collected about
              you;
            </li>
            <li>
              • The categories of sources from which the personal information is
              collected;
            </li>
            <li>
              • The business or commercial purpose for collecting your personal
              information;
            </li>
            <li>
              • The categories of third parties with whom we have shared your
              personal information;
            </li>
            <li>
              • The anticipated period of time for which your personal data will
              be stored; and
            </li>
            <li>
              • The existence of automated decision-making, including profiling.
            </li>
          </ul>
          <p className="mb-4">
            <span className="bold-font">Right to Correct. </span>
            If you find out that your personal data is inaccurate or incomplete,
            you can request that we correct it. Right to Restrict. You have the
            right to suspend our processing of your personal data if:
          </p>
          <ul className="mb-4">
            <li>• The accuracy of the personal data is contested;</li>
            <li>
              • The processing is unlawful and you oppose the erasure of the
              personal data and request the restriction of its use instead;
            </li>
            <li>
              • We no longer need the personal data for the purposes of
              processing but is required to keep it for the establishment,
              exercise, or defence of legal claims; or
            </li>
            <li>
              • You have objected to processing pursuant to Article 21(1) of the
              GDPR, pending the verification of whether the legitimate grounds
              of the data controller override those of the data subject.
            </li>
          </ul>
          <p className="mb-4">
            <span className="bold-font">Right to report. </span>
            You have the right to complain to a supervisory authority if you
            believe your privacy rights are being violated.
          </p>
          <p className="mb-4">
            <span className="bold-font">Other Rights. </span>
            In certain instances, you may have the right to data portability (if
            our processing is based on consent and automated means), withdraw
            consent at any time (if processing is based on consent), object to
            processing (if processing is based on legitimate interests), object
            to processing of personal data for direct marketing purposes, and
            erasure of your personal data from our system (“right to be
            forgotten”) if certain grounds are met.
          </p>
          <p className="mb-4">
            <span className="bold-font">Response Timing and Format. </span>
            We aim to respond to a request for access, correction, restriction,
            or deletion within one month of receiving that request. If we
            require more time, we will inform you of the reason and extension
            period in writing.
          </p>
          <p className="mb-4">
            To make a request under the GDPR, contact us via email at
            <a className="color-primary" href="mailto:legal@catchphoto.ai">
              {" "}
              legal@catchphoto.ai
            </a>
            . Please include your full name and email address along with why you
            are writing so that we can process your request in a timely manner.
            We may require you to provide some evidence of your identity.
          </p>
          <p className="bold-font">АвтоФото as a Data Processor</p>
          <p className="mb-4">
            Most personal data processing that АвтоФото undertakes is as a
            Processor on behalf of its customers.
          </p>
          <p className="mb-4">
            АвтоФото is committed to meeting its obligations under the GDPR
            and enters into a Data Processing Agreement with all customers.
          </p>
          <p className="mb-4">
            <span className="bold-font">UK/ European Representatives</span>
            As АвтоФото processes the personal data of individuals who are in
            the UK or EU it has appointed representatives in those areas. If you
            reside in these areas and have any concerns with how АвтоФото
            processes your personal data please contact them through
            <a className="color-primary" href="mailto:legal@catchphoto.ai">
              {" "}
              legal@catchphoto.ai
            </a>
          </p>
        </div>
      </CustomContainer>
    </Layout>
  )
}

export const Head = () => <Seo title="GPDR" />

export default Gpdr

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