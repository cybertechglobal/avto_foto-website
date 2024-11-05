import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import CustomContainer from "../layout/Container"
import ImageGallery from "../ui/ImageGallery"
import Title from "../ui/Title"
import { useTranslation } from "gatsby-plugin-react-i18next"

const TwoDBackgrounds = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/sliders/2d/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  const TwoD = data.allFile.edges.map(img => {
    return {
      img,
    }
  })

  return (
    <CustomContainer>
      <div className="d-flex flex-column gap-5" style={{ padding: "80px 0" }}>
        <Title className="smaller-width smaller-font">
          {t("backgrounds.2d")}
        </Title>
        <ImageGallery data={TwoD} />
      </div>
    </CustomContainer>
  )
}

export default TwoDBackgrounds
