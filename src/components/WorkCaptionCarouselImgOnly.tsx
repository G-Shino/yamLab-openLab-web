import React from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";
import { Color } from "../constants/Color";
import Slider from "react-slick";

interface Props {
  captionImages: string[];
}

const StyledDots = styled.ul`
  background-color: black;
  padding-top: 7px;
`;

const appendDots = (dots) => (
  <div>
    <StyledDots> {dots} </StyledDots>
  </div>
);

const WorkCaptionCarouselImgOnly: React.FC<Props> = ({ captionImages }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const customPaging = (i) => (
    <StyledPaging css={i === currentSlide ? CssPaging : null}>●</StyledPaging>
  );
  const settings = {
    class: "center",
    slidesToShow: 1,
    fade: true,
    dots: true,
    swipeToSlide: true,
    initialSlide: 0,
    infinite: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          fade: false,
          arrows: false,
        },
      },
    ],
    beforeChange: (_, next) => {
      setTimeout(() => setCurrentSlide(next), 30);
    },
    appendDots: appendDots,
    customPaging: customPaging,
  };
  return (
    <CaptionWrapperDiv>
      <Slider {...settings} css={CssSlider}>
        {captionImages.map((captionImage, index) => (
          <div key={index}>
            <StyledContents>
              <StyledImgDiv>
                <StyledImg src={captionImage} />
              </StyledImgDiv>
            </StyledContents>
          </div>
        ))}
      </Slider>
    </CaptionWrapperDiv>
  );
};

export default WorkCaptionCarouselImgOnly;

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

//slider関係
const CssSlider = css`
  width: 100%;
  height: auto;
  margin-bottom: 25px;
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

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// slider dots関係
const StyledPaging = styled.div`
  width: 30px;
  color: gray;
  &:hover {
    color: ${Color.CAPTION_FONT_COLOR};
  }
  &:focus {
    color: ${Color.CAPTION_FONT_COLOR};
  }
`;

const CssPaging = css`
  color: white !important;
`;
