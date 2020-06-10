import React from "react";
import styled from "@emotion/styled";
import Router from "next/router";
import { Color } from "../constants/Color";
import Src from "../images/works/Uena/main.jpg";

interface Props {
  src: string;
  prevLink: string;
  author: string;
  nextLink: string;
}

const FootSpace: React.FC<Props> = ({ src, prevLink, author, nextLink }) => {
  return (
    <Footer>
      <FootContentWrapperDiv>
        <HandwritingImg src={src} />
        <ButtonsDiv>
          <PrevWrapperDiv visiblity={prevLink ? "visible" : "hidden"}>
            <PrevButton
              onClick={() => {
                if (prevLink === undefined) {
                  return;
                }
                Router.push(`${prevLink}`);
              }}
            >
              &lt;&lt; Prev
            </PrevButton>
            <PrevImg src={Src} />
          </PrevWrapperDiv>
          <HomeButton
            onClick={() => {
              Router.push(`/#${author}`);
            }}
          >
            Home
          </HomeButton>
          <NextWrapperDiv visiblity={nextLink ? "visible" : "hidden"}>
            <NextImg src={Src} />
            <NextButton
              onClick={() => {
                if (nextLink === undefined) {
                  return;
                }
                Router.push(`${nextLink}`);
              }}
            >
              Next &gt;&gt;
            </NextButton>
          </NextWrapperDiv>
        </ButtonsDiv>
      </FootContentWrapperDiv>
    </Footer>
  );
};

export default FootSpace;

const Footer = styled.footer`
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

const PrevWrapperDiv = styled.div<{ visiblity: string }>`
  position: relative;
  visibility: ${(props) => props.visiblity};
`;
const PrevButton = styled.button`
  color: ${Color.CAPTION_FONT_COLOR};
  background-color: ${Color.CAPTION_COLOR};
  border-color: ${Color.CAPTION_COLOR};
  &:hover {
    opacity: 0.7;
  }
`;

const PrevImg = styled.img`
  position: absolute;
  width: 4.8rem;
  border: 1px solid white;
  top: -5rem;
  right: 0px;
`;

const HomeButton = styled.button`
  color: ${Color.CAPTION_FONT_COLOR};
  background-color: ${Color.CAPTION_COLOR};
  border-color: ${Color.CAPTION_COLOR};
  &:hover {
    opacity: 0.7;
  }
`;

const NextWrapperDiv = styled.div<{ visiblity: string }>`
  position: relative;
  visibility: ${(props) => props.visiblity};
`;

const NextButton = styled.button`
  color: ${Color.CAPTION_FONT_COLOR};
  background-color: ${Color.CAPTION_COLOR};
  border-color: ${Color.CAPTION_COLOR};
  &:hover {
    opacity: 0.7;
  }
`;

const NextImg = styled.img`
  position: absolute;
  width: 4.8rem;
  border: 1px solid white;
  top: -5rem;
  left: 0px;
`;
