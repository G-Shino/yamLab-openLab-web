import React from "react";
import Styled from "@emotion/styled";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Logo = require("../images/oldLogo.svg");

const PreviousDialog: React.FC = () => {
  return (
    <WrapperCSS>
      <LogoCSS src={Logo} />
      <ContentCSS>
        <ContentWrapperCSS>
          <DateCSS>2020.02.22 sat - 03.01 sun</DateCSS>
          <TimeCSS>
            15:00 - 19:00 (金・土・祝日 11:00 - 19:00) 入場無料{" "}
          </TimeCSS>
          <JapaneseNameCSS>東京大学 山中俊治研究室</JapaneseNameCSS>
          <EnglishNameCSS>UTokyo Prototyping & Design Lab</EnglishNameCSS>
        </ContentWrapperCSS>
      </ContentCSS>
    </WrapperCSS>
  );
};

//Styles---------------------------------------------------------------
const WrapperCSS = Styled.div`
  height:600px;
  display:grid;
  grid-template-columns:1fr 1fr;
  justify-self:center;
  align-self:center;
  `;

const LogoCSS = Styled.img`
  width:400px;
  height:400px;
  justify-self:center;
  align-self:center;
  `;
const ContentCSS = Styled.div`
  display:grid;
  background-color:black;
  color:white;
  font-weight:bold;
  font-size:16px;
  width:775px;
  height:461px;
  line-height:25px;

  align-self:center;
  justify-content:center;
  align-content:center;
  `;
const ContentWrapperCSS = Styled.div`
  `;
const DateCSS = Styled.div`
  font-size:40px;
  margin-bottom:30px;
  font-weight:normal;
  `;
const TimeCSS = Styled.div`
  margin-bottom:30px;`;
const JapaneseNameCSS = Styled.div`
text-align:right;
`;
const EnglishNameCSS = Styled.div`
text-align:right;
`;

export default PreviousDialog;
