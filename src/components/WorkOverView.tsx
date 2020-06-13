import React from "react";
import styled from "@emotion/styled";
import { Color } from "../constants/Color";

interface Props {
  titleJP: string;
  titleEN: string;
  captionJP: string;
  captionEN: string;
  imgSrc: string;
}

const WorkOverView: React.FC<Props> = ({
  titleJP,
  titleEN,
  captionJP,
  captionEN,
  imgSrc,
}) => {
  return (
    <WorkOverViewDiv>
      <MainWorkImg src={imgSrc} />
      <OverViewCaptionDiv>
        <OverViewTitleJP>{titleJP}</OverViewTitleJP>
        <OverViewTitleEN>- {titleEN} -</OverViewTitleEN>
        <OverViewCaptionJP>{captionJP}</OverViewCaptionJP>
        <OverViewCaptionEN>{captionEN}</OverViewCaptionEN>
      </OverViewCaptionDiv>
    </WorkOverViewDiv>
  );
};

export default WorkOverView;

const WorkOverViewDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (min-width: 1000px) {
    justify-content: space-between;
  }
`;

const MainWorkImg = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 1000px) {
    width: calc(50% - 16px);
  }
`;

const OverViewCaptionDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: ${Color.CAPTION_COLOR};
  color: ${Color.CAPTION_FONT_COLOR};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const OverViewTitleJP = styled.h3`
  width: 90%;
  margin-top: 3.2rem;
`;

const OverViewTitleEN = styled.h3`
  width: 90%;
  margin-bottom: 1.6rem;
`;

const OverViewCaptionJP = styled.p`
  width: 90%;
  height: auto;
  margin-bottom: 1.6rem;
`;

const OverViewCaptionEN = styled.p`
  width: 90%;
  height: auto;
  margin-bottom: 3.2rem;
`;
