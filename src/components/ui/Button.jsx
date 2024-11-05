import React from "react"
import * as styles from "./Button.module.css"

const buttonTypes = {
  primary: styles.btn__primary,
  secondary: styles.btn__secondary,
  danger: styles.btn__danger,
  default: styles.btn__default,
}

const Button = ({
  isLoading = false,
  children,
  type = "default",
  htmlType = "button",
  style = {},
  className = null,
  disabled = false,
  bordered = false,
  onClick = () => {},
}) => {
  const buttonClass = buttonTypes[type] || ""
  return (
    <button
      type={htmlType}
      disabled={disabled || isLoading}
      style={style}
      className={`${buttonClass}${className ? ` ${className}` : ""}${
        !bordered ? " no-border" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
