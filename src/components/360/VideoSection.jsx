import React from "react"
import CustomContainer from "../layout/Container"
import HeadText from "../ui/HeadText"
import Subtext from "../ui/Subtext"
import { useTranslation } from "gatsby-plugin-react-i18next"

const VideoSection = () => {
  const playerOptions = {
    height: "390",
    width: "640",
  }

  const { t } = useTranslation()

  return (
    <div style={{ background: "var(--color-dark-secondary)" }}>
      <CustomContainer>
        <div className="VideoSection-container">
          <div className="VideoSection-container-card">
            <div
              className="yt-video"
              style={{ flexBasis: "100%", width: "100%" }}
            >
              <div className="video_container">
                <div className="video_wrapper">
                  <iframe
                    title="YouTube Video Player"
                    width={playerOptions.width}
                    height={playerOptions.height}
                    src="https://www.youtube.com/embed/sHxJqmUPN7E"
                    frameBorder="0"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>

            <div
              className="VideoSection-container-text"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                flexBasis: "100%",
              }}
            >
              <HeadText>
                {t("360.videoText1")} 
                <span className="color-primary color-gradient">{t("360.videoText2")}</span>
              </HeadText>
              <Subtext>{t("360.videoSubtext")}</Subtext>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  )
}

export default VideoSection
