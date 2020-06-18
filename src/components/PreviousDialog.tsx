import React from "react";
import Styled from "@emotion/styled";
const Logo = require("../images/logo_old.svg");

const PreviousDialog: React.FC = () => {
  return (
    <WrapperCSS>
      <LogoCSS src={Logo} />
      <ContentCSS>
        <ContentWrapperCSS>
          <DateCSS>2020.02.22 sat - 03.01 sun</DateCSS>
          <TimeCSS>
            <Time1CSS>15:00 - 19:00</Time1CSS>
            <Time2CSS>(金・土・祝日 11:00 - 19:00)</Time2CSS>
            <Time3CSS>入場無料</Time3CSS>
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
  display:flex;
  justify-content:space-evenly;
  align-content:center;
  @media (max-width: 1200px){
    flex-direction:column;
  }
  `;

const LogoCSS = Styled.img`
  width:350px;
  @media (max-width: 1200px){
    width:50%;
    align-self:center;
  }
  `;
const ContentCSS = Styled.div`
  display:flex;
  background-color:black;
  color:white;
  font-weight:bold;
  font-size:1.6rem;
font-kerning:3.5rem;
line-height:3rem;
  width:775px;
  height:461px;
  @media (max-width: 1200px){
    width:auto;
    height:auto;
    margin:5%;
    padding:10%;
  }
  `;
const ContentWrapperCSS = Styled.div`
  margin:auto;
  `;
const DateCSS = Styled.div`
font-size:4rem;
  margin-bottom:10%;
  font-weight:normal;
  @media (max-width: 1200px){
    font-size:1.6rem;
    font-weight:bold;
  }
  `;
const TimeCSS = Styled.div`
  margin-bottom:10%;
  display:flex;
  @media (max-width: 1200px){
    flex-direction:column;
  }
  `;
const Time1CSS = Styled.div`
  `;
const Time2CSS = Styled.div`
  `;
const Time3CSS = Styled.div`
  `;
const JapaneseNameCSS = Styled.div`
text-align:right;
`;
const EnglishNameCSS = Styled.div`
text-align:right;
`;

export default PreviousDialog;
