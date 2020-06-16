import React from "react";
import styled from "@emotion/styled";
import { Color } from "../constants/Color";

interface Props {
  Caption3dImage?: React.ReactNode;
  captionTitleJP: string;
  captionTitleEN: string;
  captionMessageJP: string;
  captionMessageEN: string;
}

const WorkCaption3d: React.FC<Props> = ({
  Caption3dImage,
  captionTitleJP,
  captionTitleEN,
  captionMessageJP,
  captionMessageEN,
}) => {
  return (
    <CaptionWrapperDiv>
      <Caption3dImg>{Caption3dImage}</Caption3dImg>
      <CaptionMessageDiv>
        <CaptionTitleJP>{captionTitleJP}</CaptionTitleJP>
        <CaptionTitleEN>- {captionTitleEN} -</CaptionTitleEN>
        <CaptionMessageJP>{captionMessageJP}</CaptionMessageJP>
        <CaptionMessageEN>{captionMessageEN}</CaptionMessageEN>
      </CaptionMessageDiv>
    </CaptionWrapperDiv>
  );
};

export default WorkCaption3d;

const CaptionWrapperDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;

const Caption3dImg = styled.div`
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
`;
const CaptionMessageEN = styled.p`
  width: 90%;
  margin-bottom: 3.2rem;
`;
