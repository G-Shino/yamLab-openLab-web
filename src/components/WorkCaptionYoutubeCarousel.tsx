import React from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";
import { Color } from "../constants/Color";
import Slider from "react-slick";

interface Props {
  captionImages: string[];
  captionTitleJP: string;
  captionTitleEN: string;
  captionMessageJP: string;
  captionMessageEN: string;
}

const WorkCaptionYoutubeCarousel: React.FC<Props> = ({
  captionImages,
  captionTitleJP,
  captionTitleEN,
  captionMessageJP,
  captionMessageEN,
}) => {
  const settings = {
    class: "center",
    slidesToShow: 1,
    fade: true,
    dots: true,
    swipeToSlide: true,
    initialSlide: 0,
    infinite: false,
  };
  return (
    <CaptionWrapperDiv>
      <Slider {...settings} css={CssSlider}>
        {captionImages.map((captionImage, index) => (
          <div key={index}>
            <StyledContents>
              <StyledImgDiv>
                <StyledIframe src={captionImage} />
              </StyledImgDiv>
            </StyledContents>
          </div>
        ))}
      </Slider>
      <CaptionMessageDiv>
        <CaptionTitleJP>{captionTitleJP}</CaptionTitleJP>
        <CaptionTitleEN>- {captionTitleEN} -</CaptionTitleEN>
        <CaptionMessageJP>{captionMessageJP}</CaptionMessageJP>
        <CaptionMessageEN>{captionMessageEN}</CaptionMessageEN>
      </CaptionMessageDiv>
    </CaptionWrapperDiv>
  );
};

export default WorkCaptionYoutubeCarousel;

const CaptionWrapperDiv = styled.div`
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const CaptionMessageDiv = styled.div`
  width: 100%;
  color: ${Color.CAPTION_FONT_COLOR};
  background-color: ${Color.CAPTION_COLOR};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CaptionTitleJP = styled.h3`
  width: 90%;
  margin-top: 3.2rem;
`;
const CaptionTitleEN = styled.h3`
  width: 90%;
  margin-bottom: 1.6rem;
`;
const CaptionMessageJP = styled.p`
  width: 90%;
  margin-bottom: 1.6rem;
`;
const CaptionMessageEN = styled.p`
  width: 90%;
  margin-bottom: 3.2rem;
`;

//slider関係
const CssSlider = css`
  width: 100%;
  height: auto;
  margin-bottom: 32px;
`;

const StyledContents = styled.div`
  width: 100%;
  position: relative;
  &::before {
    content: "";
    display: block;
    padding-top: 66%;
  }
`;

const StyledImgDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
