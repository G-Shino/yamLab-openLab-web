import React from "react";
import Styled from "@emotion/styled";
const Logo = require("../images/oldLogo.svg");

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
  @media (max-width: 1000px){
    flex-direction:column;
  }
  `;

const LogoCSS = Styled.img`
  width:400px;
  margin-top:30%;
  align-self:center;
  @media (max-width: 1000px){
    width:50%;
    align-self:center;
  }
  `;
const ContentCSS = Styled.div`
  display:flex;
  background-color:black;
  color:white;
  font-weight:bold;
  font-size:1rem;
  width:775px;
  height:461px;
  line-height:1.6rem;
  @media (max-width: 1000px){
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
font-size:2.5rem;
  margin-bottom:10%;
  font-weight:normal;
  @media (max-width: 1000px){
    font-size:1.2rem;
  }
  `;
const TimeCSS = Styled.div`
  margin-bottom:10%;
  display:flex;
  @media (max-width: 1000px){
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
