import React from "react"

const Subtext = ({ children, className }) => {
  const classes = `subtext ${className}`

  return <p className={classes}>{children}</p>
}

export default Subtext
