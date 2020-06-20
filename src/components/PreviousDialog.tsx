import React from "react";
import Styled from "@emotion/styled";
const Logo = require("../images/200620_logo_old.svg");

const PreviousDialog: React.FC = () => {
  return (
    <WrapperCSS>
      <LogoCSS src={Logo} />
      <ContentCSS>
        <ContentWrapperCSS>
          <TitleCSS>DiaLog</TitleCSS>
          <SubTitleCSS>きく、はなす、すすむ</SubTitleCSS>
          <DateCSS>2020.02.22 sat - 03.01 sun</DateCSS>
          <PlaceCSS>東京大学生産技術研究所S棟1階ギャラリー</PlaceCSS>
          <HonBunJPCSS>
            作品制作者と来場者との対話が生まれる場所をコンセプトに、学生が主体となって展示会『DiaLog
            きく、はなす、すすむ』を企画しました。しかしCOVID-19の影響により、開催を目前に一般公開を延期という判断を致しました。
          </HonBunJPCSS>
          <HonBunENCSS>
            The concept of the exhibition is to create a place for dialogue
            between the designers of the prototypes and visitors, and students
            took the initiative in planning the exhibition "DiaLog". However,
            due to the influence of COVID-19, we have decided to postpone the
            exhibition to the public indefinitely.
          </HonBunENCSS>
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
  margin-top:400px;
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
  @media (max-width: 1200px){
    width:auto;
    height:auto;
    margin:5%;
  }
  `;
const ContentWrapperCSS = Styled.div`
  margin:10%;
  `;
const TitleCSS = Styled.div`
font-size:4rem;
margin-bottom:5%;
@media (max-width: 1200px){
  font-size:1.6rem;
  margin-bottom:0%;
}
`;
const SubTitleCSS = Styled.div`
font-size:4rem;
margin-bottom:10%;
@media (max-width: 1200px){
  font-size:1.6rem;
  margin-bottom:5%;
}
`;
const DateCSS = Styled.div`
font-size:1.6rem;
  font-weight:normal;
  @media (max-width: 1200px){
    font-size:1.6rem;
    font-weight:bold;
  }
  `;
const PlaceCSS = Styled.div`
font-size:1.6rem;
  margin-bottom:5%;
  display:flex;
  @media (max-width: 1200px){
    font-size:1.6rem;
    flex-direction:column;
  }
  `;
const HonBunJPCSS = Styled.div`
margin-top:5%;
text-align:justify;
`;
const HonBunENCSS = Styled.p`
margin-top:5%;
font-weight:normal;
text-align:justify;
`;
export default PreviousDialog;
