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

const WorkCaption: React.FC<Props> = ({
  captionImage,
  captionTitleJP,
  captionTitleEN,
  captionMessageJP,
  captionMessageEN,
}) => {
  if (captionTitleJP === "") {
    return (
      <CaptionWrapperDiv>
        <CaptionImg src={captionImage} />
        <CaptionMessageDiv>
          <CaptionTitleJP>{captionTitleJP}</CaptionTitleJP>
          <CaptionTitleEN>{captionTitleEN}</CaptionTitleEN>
          <CaptionMessageJP>{captionMessageJP}</CaptionMessageJP>
          <CaptionMessageEN>{captionMessageEN}</CaptionMessageEN>
        </CaptionMessageDiv>
      </CaptionWrapperDiv>
    );
  } else {
    return (
      <CaptionWrapperDiv>
        <CaptionImg src={captionImage} />
        <CaptionMessageDiv>
          <CaptionTitleJP>{captionTitleJP}</CaptionTitleJP>
          <CaptionTitleEN>- {captionTitleEN} -</CaptionTitleEN>
          <CaptionMessageJP>{captionMessageJP}</CaptionMessageJP>
          <CaptionMessageEN>{captionMessageEN}</CaptionMessageEN>
        </CaptionMessageDiv>
      </CaptionWrapperDiv>
    );
  }
};

export default WorkCaption;

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

const CaptionImg = styled.img`
  width: 100%;
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
  text-align: justify;
`;
const CaptionMessageEN = styled.p`
  width: 90%;
  margin-bottom: 3.2rem;
  text-align: justify;
`;
