import React from "react";
import styled from "@emotion/styled";
import FooterCarousel from "./FooterCarousel";
import { Color } from "../constants/Color";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

interface Props {
  src: string;
  prevLink?: string;
  prevImg?: string;
  author: string;
  nextLink?: string;
  nextImg?: string;
}

const FootSpace: React.FC<Props> = ({ src, author }) => {
  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://platform.twitter.com/widgets.js";
  //   document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  // }, []);
  return (
    <Footer>
      <FootContentWrapperDiv>
        <HandwritingImg src={src} />
        <StyledTwitterButton className="twitter-embed">
          <TwitterShareButton
            url="https://yam-lab-open-lab-web-sable.now.sh/"
            hashtags={["DiaLog"]}
          >
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <FacebookShareButton
            url="https://yam-lab-open-lab-web-sable.now.sh/"
            hashtag="#DiaLog"
          >
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <LineShareButton url="https://yam-lab-open-lab-web-sable.now.sh/">
            <LineIcon size={48} round />
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
