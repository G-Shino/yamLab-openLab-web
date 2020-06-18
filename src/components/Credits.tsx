import React from "react";
import Styled from "@emotion/styled";

const Credits = () => {
  return (
    <CreditCSS>
      <CreditWrapper>
        <CreditLeftCSS>
          {" "}
          ディレクション： 山中俊治 <br></br>企画： 杉本拓郎　イ ヒジュン　山本
          凌　大西彬介<br></br> 　 　　今村知美　李 馨 <br></br>
          制作： イ ヒジュン　上岡直樹　小笠原佑樹　金山正貴<br></br> 　
          　　川又 音　杉本拓郎　髙田ふみ　三好葉月<br></br> 　
          　　宗像佑弥　山本 凌
        </CreditLeftCSS>
        <CreditRightCSS>
          <br></br>
          スタッフ： 東京大学 山中研究室一同<br></br>
          主催： 東京大学 山中研究室<br></br>
          グラフィック： 李 馨　髙田ふみ　杉本拓郎<br></br>
          WEB : イ ヒジュン　山本 凌<br></br>
          翻訳：イ ヒジュン
        </CreditRightCSS>
      </CreditWrapper>
    </CreditCSS>
  );
};

//Styles----------------------------------------------------------------------
const CreditCSS = Styled.div`
  background-color:black;
  color:white;
  padding:5%;
  @media (max-aspect-ratio: 3/2){
    display:flex;
    justify-content:center;
    align-content:center;
  }
`;
const CreditWrapper = Styled.div`
  display:flex;
  justify-content:space-evenly;
  align-content:center;
  @media (max-aspect-ratio: 3/2){
    flex-direction:column;
    justify-content:space-evenly;
  }
`;
const CreditLeftCSS = Styled.p`
font-size:2.5vmin;
  line-height:5vmin;
align-self:center;
`;
const CreditRightCSS = Styled.p`
align-self:center;
font-size:2.5vmin;
  line-height:5vmin;
@media (max-aspect-ratio: 3/2){
  align-self:first baseline;
  margin-top:-5vmin;
}
`;
export default Credits;
