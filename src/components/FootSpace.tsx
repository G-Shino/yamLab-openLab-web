import React from "react";
import styled from "@emotion/styled";
import Router from "next/router";
import { Color } from "../constants/Color";

interface Props {
  src: string;
  prevLink: string;
  author: string;
  nextLink: string;
}

const FootSpace: React.FC<Props> = ({ src, prevLink, author, nextLink }) => {
  return (
    <FootDiv>
      <FootContentWrapperDiv>
        <HandwritingImg src={src} />
        <ButtonsDiv>
          <PrevButton
            visiblity={prevLink ? "visible" : "hidden"}
            onClick={() => {
              if (prevLink === undefined) {
                return;
              }
              Router.push(`${prevLink}`);
            }}
          >
            &lt;&lt; Prev
          </PrevButton>
          <HomeButton
            onClick={() => {
              Router.push(`/#${author}`);
            }}
          >
            Home
          </HomeButton>
          <NextButton
            visiblity={nextLink ? "visible" : "hidden"}
            onClick={() => {
              if (nextLink === undefined) {
                return;
              }
              Router.push(`${nextLink}`);
            }}
          >
            Next &gt;&gt;
          </NextButton>
        </ButtonsDiv>
      </FootContentWrapperDiv>
    </FootDiv>
  );
};

export default FootSpace;

const FootDiv = styled.div`
  width: 100%;
  height: auto;
  background-color: ${Color.CAPTION_COLOR};
`;

const FootContentWrapperDiv = styled.div`
  width: 85%;
  max-width: 1000px;
  height: auto;
  margin: 0 auto 32px;
  @media (min-width: 1000px) {
    width: 42.5%;
  }
`;

const HandwritingImg = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  filter: invert();
  display: block;
`;

const ButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PrevButton = styled.button<{ visiblity: string }>`
  color: ${Color.CAPTION_FONT_COLOR};
  background-color: ${Color.CAPTION_COLOR};
  border-color: ${Color.CAPTION_COLOR};
  &:hover {
    opacity: 0.7;
  }
  visibility: ${(props) => props.visiblity};
`;

const HomeButton = styled.button`
  color: ${Color.CAPTION_FONT_COLOR};
  background-color: ${Color.CAPTION_COLOR};
  border-color: ${Color.CAPTION_COLOR};
  &:hover {
    opacity: 0.7;
  }
`;

const NextButton = styled.button<{ visiblity: string }>`
  color: ${Color.CAPTION_FONT_COLOR};
  background-color: ${Color.CAPTION_COLOR};
  border-color: ${Color.CAPTION_COLOR};
  &:hover {
    opacity: 0.7;
  }
  visibility: ${(props) => props.visiblity};
`;
