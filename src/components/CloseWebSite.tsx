import React from "react";
import styled from "@emotion/styled";
import texture from "../images/mdftexture.jpg";
import LogoWhite from "../images/logo_white.png";
import { Color } from "../constants/Color";

const CloseWebSite: React.FC = () => {
  return (
    <WrapperDiv>
      <CloseMessageDiv>
        <CaptionImg src={LogoWhite} />
        <MessageDiv>
          DiaLog
          きづく、つづる、つながるの先行公開は終了致しました。今後の案内はSNS(
          <StyledLink href="https://twitter.com/YamLabEx">@YamLabEX</StyledLink>
          ) を通して発信させて頂きます。
        </MessageDiv>
      </CloseMessageDiv>
    </WrapperDiv>
  );
};

export default CloseWebSite;

const WrapperDiv = styled.div`
  background-image: url(${texture});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseMessageDiv = styled.div`
  width: 90%;
  max-width: 1000px;
  height: auto;
  background-color: ${Color.CAPTION_COLOR};
  color: ${Color.CAPTION_FONT_COLOR};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CaptionImg = styled.img`
  width: 70%;
  margin-top: 16px;
  @media (min-width: 1000px) {
    width: 50%;
    margin: 16px 16px;
  }
`;

const StyledLink = styled.a`
  color: ${Color.CAPTION_FONT_COLOR};
  &:hover {
    opacity: 0.6;
  }
`;

const MessageDiv = styled.p`
  width: 80%;
  margin-bottom: 40px;
`;
