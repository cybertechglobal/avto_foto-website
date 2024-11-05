import React from "react"

const Card = ({ children, className }) => {
  const classes = className ? `catch-card ${className}` : 'catch-card';

  return <div className={classes}>{children}</div>;
};

export default Card
