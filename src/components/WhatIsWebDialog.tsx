import React from "react";
import Styled from "@emotion/styled";
const Logo = require("../images/Logo.svg");

const WhatIsWebDialog = () => {
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
height:1080px;
display:grid;
grid-template-columns:1fr 1fr;
justify-content:center;
align-content:center;
`;
const ContentWrapperCSS = Styled.div`
margin:70px 140px 70px 140px;`;
const LogoCSS = Styled.img`
width:400px;
justify-self:center;
align-self:center;
`;
const ContentCSS = Styled.div`
background-color:black;
color:white;
font-weight:bold;
font-size:16px;
width:775px;
height:846px;
line-height:25px;
`;
const TitleJapaneseCSS = Styled.div`
font-size:40px;
margin-bottom:30px;
`;
const TitleEnglishCSS = Styled.div`
font-size:40px;
text-align:right;
margin-bottom:50px;
`;
const WebDialogIntroductionCSS = Styled.div`
margin-bottom:200px;`;
const CommentIntroductionCSS = Styled.div``;

export default WhatIsWebDialog;
