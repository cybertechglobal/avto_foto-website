import React from "react"
import * as styles from "./Input.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const InputField = React.forwardRef(
  (
    {
      register,
      type,
      placeholder,
      error = false,
      helperText,
      disabled = false,
      noMargin = false,
      icon,
      textarea = false,
    },
    ref
  ) => {
    return (
      <div
        className={styles.input_wrapper}
        style={{ marginBottom: noMargin ? "0px" : error ? "8px" : "26px" }}
      >
        {textarea ? (
          <div
            className={`${styles.input} ${error ? styles.input__error : ""}`}
            style={{ position: "relative", borderRadius: "30px" }}
          >
            <span style={{ alignSelf: "flex-start", marginTop: "1rem" }}>
              {icon}
            </span>
            <textarea
              rows={10}
              placeholder={placeholder}
              className="w-100"
              {...register}
            ></textarea>
          </div>
        ) : (
          <>
            <div
              className={`${styles.input} ${error ? styles.input__error : ""}`}
              style={{ position: "relative" }}
            >
              <span>{icon}</span>
              <input
                className={`w-100`}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                {...register}
              />
            </div>
            {helperText && (
              <span className={styles.helperText__error}>{helperText}</span>
            )}
          </>
        )}
      </div>
    )
  }
)

export default InputField
