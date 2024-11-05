import React from "react"
import "./timeline.css"

const Timeline = ({ steps }) => {
  return (
    <div className="timeline-container">
      <div className="vertical-timeline">
        <div className="dots"></div>
        {steps.map(step => (
          <div key={step.number} className="step">
            <div className="step-content">{step.left}</div>
            <div className="step-number">{step.number}</div>
            <div className="step-content">{step.right}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
