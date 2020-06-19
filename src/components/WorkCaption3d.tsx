import React from "react";
import styled from "@emotion/styled";
import { Color } from "../constants/Color";
import touchOK from "../images/touchOK.svg";

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
        <CaptionMessageWrapperDiv>
          <CaptionTitleJP>{captionTitleJP}</CaptionTitleJP>
          <CaptionTitleEN>- {captionTitleEN} -</CaptionTitleEN>
          <Caption3dInstruction src={touchOK}></Caption3dInstruction>
          <CaptionMessageJP>{captionMessageJP}</CaptionMessageJP>
          <CaptionMessageEN>{captionMessageEN}</CaptionMessageEN>
        </CaptionMessageWrapperDiv>
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
`;
const CaptionMessageWrapperDiv = styled.div`
  margin: 3.2rem 5% 3.2rem 5%;
  display: grid;
  grid-template-areas:
    "areaA areaC"
    "areaB areaC"
    "areaD areaD"
    "areaE areaE";
  grid-template-columns: 1fr auto;
`;
const CaptionTitleJP = styled.h3`
  width: 100%;
  grid-area: areaA;
  align-self: center;
  justify-self: center;
`;
const CaptionTitleEN = styled.h3`
  width: 100%;
  font-weight: bold;
  grid-area: areaB;
  align-self: center;
  justify-self: center;
`;
const Caption3dInstruction = styled.img`
  width: 100%;
  font-weight: bold;
  margin-bottom: 1rem;
  grid-area: areaC;
  align-self: top;
  justify-self: right;
  text-align: right;
`;
const CaptionMessageJP = styled.p`
  width: 100%;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
  grid-area: areaD;
  align-self: center;
  justify-self: center;
  text-align: left;
`;
const CaptionMessageEN = styled.p`
  width: 100%;
  grid-area: areaE;
  align-self: center;
  justify-self: center;
  text-align: left;
`;
