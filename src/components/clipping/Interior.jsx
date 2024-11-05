import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ImageGallery from "../ui/ImageGallery"
import Title from "../ui/Title"
import { useTranslation } from "gatsby-plugin-react-i18next"

const texts = [
  { name: "interiorExterior.originalBackdrop", id: "original_backdrop" },
  { name: "interiorExterior.3dBackdrop", id: "threed_backdrop" },
  { name: "interiorExterior.2dBackdrop", id: "twod_backdrop" },
  { name: "interiorExterior.blurredBackdrop", id: "blurred_backdrop" },
]

const Interior = () => {
  const { t } = useTranslation()

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/sliders/" } }) {
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

  const int = data.allFile.edges.filter(edge =>
    edge.node.relativePath.includes("int")
  )

  const images = int.map(img => {
    const text = texts.find(txt => img.node.relativePath.includes(txt.id))

    return {
      img,
      text: text?.name,
    }
  })

  return (
    <div style={{ padding: "80px 0" }}>
      <Title>
        {t("interiorExterior.title1")} 
        <span className="color-primary color-gradient">{t("interiorExterior.title2")} </span>
        {t("interiorExterior.interiorTitle3")}
      </Title>
      <ImageGallery data={images} text={true} />
    </div>
  )
}

export default Interior
