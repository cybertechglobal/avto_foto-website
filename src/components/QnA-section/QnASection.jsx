import React, { useState, useRef } from "react"
import CustomContainer from "../layout/Container"
import Subtext from "../ui/Subtext"
import Title from "../ui/Title"
import { useTranslation } from "gatsby-plugin-react-i18next"

const QnASection = () => {
  const { t } = useTranslation()

  const items = [
    {
      question: "QA.question1",
      answer: "QA.answer1",
    },
    {
      question: "QA.question2",
      answer: "QA.answer2",
    },
    {
      question: "QA.question3",
      answer: "QA.answer3",
    },
    {
      question: "QA.question4",
      answer: "QA.answer4",
    },
    {
      question: "QA.question5",
      answer: "QA.answer5",
    },
    {
      question: "QA.question6",
      answer: "QA.answer6",
    },
    {
      question: "QA.question7",
      answer: "QA.answer7",
    },
    {
      question: "QA.question8",
      answer: "QA.answer8",
    },
    {
      question: "QA.question9",
      answer: "QA.answer9",
    },
  ]
  const [activeIndex, setActiveIndex] = useState(null)
  const contentRefs = useRef([])

  // Function to handle item clicks
  const onTitleClick = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index))
  }

  // Function to calculate the height of the content
  const calculateContentHeight = index => {
    return activeIndex === index ? contentRefs.current[index]?.scrollHeight : 0
  }

  // Function to render the QnASection items
  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? "active" : ""

    return (
      <React.Fragment key={index}>
        <div className="question" onClick={() => onTitleClick(index)}>
          <div className="question-title">
            <span>{t(item.question)}</span>
            <div className="plus-minus">
              {isActive ? (
                <span className="color-primary">-</span>
              ) : (
                <span className="color-primary">+</span>
              )}
            </div>
          </div>
          <div
            className={`content answer ${isActive}`}
            style={{ height: calculateContentHeight(index) }}
            ref={ref => (contentRefs.current[index] = ref)}
          >
            <Subtext>{t(item.answer)}</Subtext>
          </div>
        </div>
        <div
          style={{ borderBottom: "1px solid rgba(140, 141, 146, 0.24)" }}
        ></div>
      </React.Fragment>
    )
  })

  return (
    <CustomContainer>
      <div id="qa-section" className="QnASection-container">
        <Title>
          {t("QA.title1")} 
          <span className="color-primary color-gradient">{t("QA.title2")}</span>
        </Title>
        <div className="accordion">{renderedItems}</div>
      </div>
    </CustomContainer>
  )
}

export default QnASection
