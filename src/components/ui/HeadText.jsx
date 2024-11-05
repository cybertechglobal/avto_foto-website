import React from "react"

const HeadText = ({ children, className, style }) => {
  const classes = `head-text ${className}`

  return <h2 className={classes}>{children}</h2>
}

export default HeadText
