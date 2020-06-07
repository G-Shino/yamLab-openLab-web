import React from "react";
import Styled from "@emotion/styled";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Logo = require("../images/Logo.svg");

const TitleScreen: React.FC = () => {
  return (
    <TitleCSS>
      <LogoCSS src={Logo} />
      <TitleTextJapaneseCSS>東京大学　山中俊治研究室</TitleTextJapaneseCSS>
      <TitleTextEnglishCSS>
        UTokyo Prototyping & Design Laboratory
      </TitleTextEnglishCSS>
    </TitleCSS>
  );
};

//Styles--------------------------------------------------------------------------
const TitleCSS = Styled.div`
display:grid;
grid-template-rows: auto 5% 15%;
justify-content:center;
height:1080px;
`;
const LogoCSS = Styled.img`
margin-top:200px;
justify-self:center;
width:560px;
height:560px;
`;
const TitleTextJapaneseCSS = Styled.div`
text-align:center;
font-size:30px;
`;
const TitleTextEnglishCSS = Styled.div`
text-align:center;
font-size:30px;
`;
export default TitleScreen;
