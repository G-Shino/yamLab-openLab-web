import React from "react";
import styled from "@emotion/styled";
import { Color } from "../constants/Color";

interface Props {
  captionImage: string;
  captionTitleJP: string;
  captionTitleEN: string;
  captionMessageJP: string;
  captionMessageEN: string;
}

const WorkCaptionYoutube: React.FC<Props> = ({
  captionImage,
  captionTitleJP,
  captionTitleEN,
  captionMessageJP,
  captionMessageEN,
}) => {
  return (
    <CaptionWrapperDiv>
      <CaptionImgWrapper>
        <CaptionImg src={captionImage} allow={"fullscreen"} />
      </CaptionImgWrapper>
      <CaptionMessageDiv>
        <CaptionTitleJP>{captionTitleJP}</CaptionTitleJP>
        <CaptionTitleEN>- {captionTitleEN} -</CaptionTitleEN>
        <CaptionMessageJP>{captionMessageJP}</CaptionMessageJP>
        <CaptionMessageEN>{captionMessageEN}</CaptionMessageEN>
      </CaptionMessageDiv>
    </CaptionWrapperDiv>
  );
};

export default WorkCaptionYoutube;

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
const CaptionImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: calc(2 / 3 * 100%) 0 0;
`;
const CaptionImg = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  font-weight: bold;
  margin-top: 3.2rem;
`;
const CaptionTitleEN = styled.h3`
  width: 90%;
  font-weight: bold;
  margin-bottom: 1.6rem;
`;
const CaptionMessageJP = styled.p`
  width: 90%;
  margin-bottom: 1.6rem;
  text-align: justify;
`;
const CaptionMessageEN = styled.p`
  width: 90%;
  margin-bottom: 3.2rem;
  text-align: justify;
`;
