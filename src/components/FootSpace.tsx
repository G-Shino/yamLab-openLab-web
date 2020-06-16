import React from "react";
import css from "@emotion/css";
import styled from "@emotion/styled";
import FooterCarousel from "./FooterCarousel";
import { Color } from "../constants/Color";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

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
        <StyledTwitterButton className="twitter-embed">
          <TwitterShareButton
            url="https://yam-lab-open-lab-web-sable.now.sh/"
            hashtags={["DiaLog"]}
          >
            <FontAwesomeIcon
              css={IconCss}
              icon={["fab", "twitter"]}
              size="4x"
            />
          </TwitterShareButton>
          <FacebookShareButton
            url="https://yam-lab-open-lab-web-sable.now.sh/"
            hashtag="#DiaLog"
          >
            <FontAwesomeIcon
              css={IconCss}
              icon={["fab", "facebook"]}
              size="4x"
            />
          </FacebookShareButton>
          <LineShareButton url="https://yam-lab-open-lab-web-sable.now.sh/">
            <FontAwesomeIcon css={IconCss} icon={["fab", "line"]} size="4x" />
          </LineShareButton>
        </StyledTwitterButton>
        <CarouselDiv>
          <FooterCarousel exclude={author} />
        </CarouselDiv>
      </FootContentWrapperDiv>
    </Footer>
  );
};

export default FootSpace;

const IconCss = css`
  color: white;
`;

const Footer = styled.footer`
  width: 100%;
  height: auto;
  background-color: ${Color.CAPTION_COLOR};
`;

const FootContentWrapperDiv = styled.div`
  width: 85%;
  max-width: 1000px;
  height: auto;
  margin: 0 auto 48px;
  @media (min-width: 1000px) {
    width: 42.5%;
  }
`;

const HandwritingImg = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 48px auto;
  display: block;
`;

const CarouselDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTwitterButton = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;
