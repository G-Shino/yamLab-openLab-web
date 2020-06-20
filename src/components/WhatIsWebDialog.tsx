import React from "react";
import Styled from "@emotion/styled";
const Logo = require("../images/200620_logo.svg");

const WhatIsWebDialog: React.FC = () => {
  return (
    <WrapperCSS>
      <LogoCSS src={Logo} />
      <ContentCSS>
        <ContentWrapperCSS>
          <TitleCSS>DiaLog</TitleCSS>
          <SubTitleCSS>きづく、つづる、つながる</SubTitleCSS>
          <DateCSS>2020.06.20 sat - 06.27 sat</DateCSS>
          <PlaceCSS>展示会特設ウェブサイト</PlaceCSS>
          <WebDialogIntroductionJPCSS>
            展示会を通して実際に作品に触れて頂くことを研究発表の主な手段としてきた私達ですが、新たな発表方法を模索することを目的に、対話をコンセプトとしたオンライン展示『Dialog
            きづく、つづる、つながる』を企画しました。東京大学大学院情報学環・学際情報学府主催のオープンラボ・ウィークの期間、先行公開致します。また、オフライン展示『Dialog
            きく、はなす、すすむ』とオンライン展示『DiaLog
            きづく、つづる、つながる』を同時に開催できるよう、現在準備を進めています。
          </WebDialogIntroductionJPCSS>
          <WebDialogIntroductionENCSS>
            Until now, our main way of presenting our researches was to have
            visitors come into contact with our prototypes through our
            exhibitions. The online exhibition "DiaLog" is designed to explore a
            new way of presentation with the concept of dialogue. We are pleased
            to announce you that our online exhibition will be released during
            this open lab week. We are also preparing to hold the offline
            exhibition "DiaLog" at the same time.
          </WebDialogIntroductionENCSS>
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
const ContentWrapperCSS = Styled.div`
margin:10%`;
const LogoCSS = Styled.img`
width:350px;
@media (max-width: 1200px){
  margin-top:30%;
  width:50%;
  align-self:center;
}
`;
const ContentCSS = Styled.div`
background-color:black;
color:white;
font-weight:bold;
font-size:1.6rem;
font-kerning:3.5rem;
line-height:3rem;
width:775px;
margin-top:20%;
margin-bottom:20%;
@media (max-width: 1200px){
  width:auto;
  height:auto;
  margin:5%;
}
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
  margin-bottom:5%;
  font-size:1.6rem;
  display:flex;
  @media (max-width: 1200px){
    font-size:1.6rem;
    flex-direction:column;
  }
  `;
const WebDialogIntroductionJPCSS = Styled.div`
margin-bottom:10%;
text-align:justify;
`;
const WebDialogIntroductionENCSS = Styled.div`
font-weight:normal;
text-align:justify;
`;

export default WhatIsWebDialog;
