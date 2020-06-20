import React from "react";
import styled from "@emotion/styled";
import { Color } from "../constants/Color";

interface Props {
  titleJP: string;
  titleEN: string;
  captionJP: string;
  captionEN: string;
  creditJP?: string;
  creditEN?: string;
  imgSrc: string;
}

const WorkOverView: React.FC<Props> = ({
  titleJP,
  titleEN,
  captionJP,
  captionEN,
  creditJP,
  creditEN,
  imgSrc,
}) => {
  return (
    <WorkOverViewDiv>
      <MainWorkImg src={imgSrc} />
      <WrapperOverViewCaptionDiv>
        <AreaOverViewCaptionDiv>
          <OverViewCaptionDiv>
            <OverViewTitleJP>{titleJP}</OverViewTitleJP>
            <OverViewTitleEN> {titleEN} </OverViewTitleEN>
            <OverViewCaptionJP>{captionJP}</OverViewCaptionJP>
            <OverViewCreditJP>{creditJP}</OverViewCreditJP>
            <OverViewCaptionEN>{captionEN}</OverViewCaptionEN>
            <OverViewCreditEN>{creditEN}</OverViewCreditEN>
          </OverViewCaptionDiv>
        </AreaOverViewCaptionDiv>
      </WrapperOverViewCaptionDiv>
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
  align-items: flex-start;

  @media (min-width: 1000px) {
    justify-content: center;
  }
`;

const MainWorkImg = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const WrapperOverViewCaptionDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: ${Color.CAPTION_COLOR};
  color: ${Color.CAPTION_FONT_COLOR};

  @media (min-width: 1000px) {
    width: 50%;
    position: relative;
    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }
`;

const AreaOverViewCaptionDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: top;
  justify-content: center;
  overflow-x: scroll;
  @media (min-width: 1000px) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  /* スクロールバーの削除 */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const OverViewCaptionDiv = styled.div`
  margin: 0% 5% 5% 5%;
`;

const OverViewTitleJP = styled.h3`
  width: 100%;
  height: auto;
  margin-top: 3.2rem;
`;

const OverViewTitleEN = styled.h3`
  width: 100%;
  height: auto;
  margin-bottom: 1.6rem;
`;

const OverViewCaptionJP = styled.p`
  width: 100%;
  height: auto;
  margin-bottom: 1.6rem;
`;

const OverViewCreditJP = styled.p`
  width: 100%;
  height: auto;
  text-align: right;
  margin-bottom: 1.6rem;
`;

const OverViewCaptionEN = styled.p`
  width: 100%;
  height: auto;
  margin-bottom: 1.6rem;
`;

const OverViewCreditEN = styled.p`
  width: 100%;
  height: auto;
  text-align: right;
  margin-bottom: 3.2rem;
`;
