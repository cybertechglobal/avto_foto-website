import React from "react"
import moment from "moment"
import { useTranslation } from "gatsby-plugin-react-i18next"

const BottomRights = ({ style = {} }) => {
  const { t } = useTranslation()

  const currentYear = moment().year()

  return (
    <span
      style={{
        fontSize: ".9rem",
        color: "var(--color-primary-light)",
        textAlign: "center",
        lineHeight: "24px",
        letterSpacing: ".28px",
        ...style,
      }}
    >
      {t("global.rights", { currentYear })}
    </span>
  )
}

export default BottomRights
