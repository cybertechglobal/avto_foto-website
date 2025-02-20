import {
  faBuilding,
  faEnvelope,
  faMessage,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import CustomContainer from "../layout/Container"
import Button from "../ui/Button"
import InputField from "./Input"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"


const API_PATH = 'https://xn--80ae0baavco.xn--p1ai/contactMail.php';

const ContactUsForm = () => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [isSending, setIsSending] = useState(false)
  const [message, setMessage] = useState(null)

  const handleEmail = async values => {
    const { name, email, company, phone, msg } = values

    setIsSending(true)

    fetch(API_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, company, phone, message: msg }),
    })
      .then(response => response.json())
      .then(data => {
        setIsSending(false)
        setMessage(t("contactForm.success"))
        reset()
      })
      .catch(error => {
        setIsSending(false)
        setMessage(t("contactForm.error"))
      })
  }

  return (
    <div style={{ background: "var(--color-dark-secondary)" }}>
      <CustomContainer>
        <div className="ContactUsForm-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              flexBasis: "100%",
              flex: "3",
            }}
          >
            <p>{t("contactForm.requiredFields")}</p>

            <form onSubmit={handleSubmit(handleEmail)}>
              <Row xs={1} md={3} className="g-4">
                <Col lg={6} md={6} xs={12}>
                  <InputField
                    type="text"
                    placeholder={t("contactForm.name")}
                    register={register("name", {
                      required: t("contactForm.requiredName"),
                    })}
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    icon={
                      <FontAwesomeIcon
                        className="color-primary"
                        icon={faUser}
                      />
                    }
                  />
                </Col>
                <Col lg={6} md={6} xs={12}>
                  <InputField
                    type="text"
                    placeholder={t("contactForm.email")}
                    register={register("email", {
                      required: t("contactForm.requiredEmail"),
                    })}
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    icon={
                      <FontAwesomeIcon
                        className="color-primary"
                        icon={faEnvelope}
                      />
                    }
                  />
                </Col>
                <Col lg={6} md={6} xs={12}>
                  <InputField
                    type="text"
                    placeholder={t("contactForm.phone")}
                    register={register("phone")}
                    icon={
                      <FontAwesomeIcon
                        className="color-primary"
                        icon={faPhone}
                      />
                    }
                  />
                </Col>
                <Col lg={6} md={6} xs={12}>
                  <InputField
                    type="text"
                    placeholder={t("contactForm.company")}
                    register={register("company")}
                    icon={
                      <FontAwesomeIcon
                        className="color-primary"
                        icon={faBuilding}
                      />
                    }
                  />
                </Col>
              </Row>
              <InputField
                textarea={true}
                type="text"
                placeholder={t("contactForm.message")}
                register={register("msg")}
                icon={
                  <FontAwesomeIcon className="color-primary" icon={faMessage} />
                }
              />
              <p className="small mb-3">
                {t("contactForm.submitMessage")}{" "}
                <span>
                  <Link className="color-primary" to="/privacy-notice">
                    {t("contactForm.privacyPolicy")}
                  </Link>
                </span>
              </p>
              <Button
                type="primary"
                htmlType="submit"
                style={{ padding: "1rem 4rem" }}
              >
                {isSending
                  ? t("contactForm.sendingEmail")
                  : t("contactForm.submit")}
              </Button>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "0.75rem",
                  fontSize: "0.85rem",
                }}
              >
                {message}
              </span>
            </form>
          </div>
          <div style={{ flexBasis: "100%", width: "100%", flex: "2" }}>
            <StaticImage
              src="../../assets/images/contact_us_icon.png"
              alt="contact us icon"
              placeholder="blurred"
            />
          </div>
        </div>
      </CustomContainer>
    </div>
  )
}

export default ContactUsForm
