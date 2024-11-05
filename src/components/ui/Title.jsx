import React from "react"

const Title = ({ children, className }) => {
  const classes = `main-title ${className}`

  return <h1 className={classes}>{children}</h1>
}

export default Title
