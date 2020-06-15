import React from "react";
import styled from "@emotion/styled";
import Carousel from "../components/Carousel";
import { Color } from "../constants/Color";

interface Props {
  src: string;
  prevLink?: string;
  prevImg?: string;
  author: string;
  nextLink?: string;
  nextImg?: string;
}

const FootSpace: React.FC<Props> = ({ src, author }) => {
  return (
    <Footer>
      <FootContentWrapperDiv>
        <HandwritingImg src={src} />
        <CarouselDiv>
          <Carousel exclude={author} />
        </CarouselDiv>
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

const CarouselDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
