import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ImageGallery from "../ui/ImageGallery"
import Title from "../ui/Title"
import { useTranslation } from "gatsby-plugin-react-i18next"

const texts = [
  { name: "interiorExterior.fullClipping", id: "full_crop" },
  { name: "interiorExterior.halfClipping", id: "half_crop" },
  { name: "interiorExterior.fullBlur", id: "full_blur" },
  { name: "interiorExterior.halfBlur", id: "half_blur" },
]

const Exterior = () => {
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

  const ext = data.allFile.edges.filter(edge =>
    edge.node.relativePath.includes("ext")
  )

  const images = ext.map(img => {
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
        {t("interiorExterior.exteriorTitle3")}
      </Title>
      <ImageGallery data={images} text={true} />
    </div>
  )
}

export default Exterior
