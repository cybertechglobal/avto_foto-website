import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const PercentageCircle = ({ percentage, headText, subText, icon }) => {
  return (
    <>
      <div className="circle-container">
        <div
          className="pie animate no-round"
          style={{ "--p": `${percentage}`, "--b": "4px" }}
        >
          <div className="circle-content">
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
        <p className="circle-headtext">{headText}</p>
        <p className="circle-subtext">{subText}</p>
      </div>
    </>
  )
}

export default PercentageCircle
