import React from "react";
import Styled from "@emotion/styled";
const Logo = require("../images/logo.svg");

const WhatIsWebDialog: React.FC = () => {
  return (
    <WrapperCSS>
      <LogoCSS src={Logo} />
      <ContentCSS>
        <ContentWrapperCSS>
          <TitleJapaneseCSS>Web Dialogとは</TitleJapaneseCSS>
          <TitleEnglishCSS>What is Web Dialog?</TitleEnglishCSS>
          <WebDialogIntroductionCSS>
            Web DiaLog とは… Web DiaLog とは…Web DiaLog とは…Web DiaLog
            とはWebDiaLogとは…Web DiaLog とは…Web DiaLog とは…Web DiaLogとはWeb
            DiaLog とは…Web DiaLog とは…Web DiaLog とはWeb DiaLogWeb DiaLog
            とは…Web DiaLog とは…Web DiaLog とは…Web DiaLog とは…
          </WebDialogIntroductionCSS>
          <CommentIntroductionCSS>
            コメント機能について
            コメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能についてコメント機能について
          </CommentIntroductionCSS>
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
margin:15%`;
const LogoCSS = Styled.img`
width:400px;
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
width:700px;
height:1000px;
margin-top:20%;
margin-bottom:20%;
@media (max-width: 1200px){
  width:auto;
  height:auto;
  margin:5%;
}
`;
const TitleJapaneseCSS = Styled.div`
font-size:4rem;
margin-bottom:10%;
@media (max-width: 1200px){
  font-size:1.6rem;
  margin-bottom:5%;
}
`;
const TitleEnglishCSS = Styled.div`
font-size:4rem;
text-align:right;
margin-bottom:10%;
@media (max-width: 1200px){
  font-size:1.6rem;
}
`;
const WebDialogIntroductionCSS = Styled.div`
margin-bottom:20%;`;
const CommentIntroductionCSS = Styled.div``;

export default WhatIsWebDialog;
