import React from "react";
import Styled from "@emotion/styled";
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
display:flex;
flex-direction:column;
justify-content:center;
height:100vh;
margin-bottom:20vh;
`;
const LogoCSS = Styled.img`
display:inline;
margin-top:20vh;
margin-left: auto;
margin-right: auto;
width:50vw;
height:50vw;
`;
const TitleTextJapaneseCSS = Styled.div`
text-align:center;
font-size:30px;
margin-top:5vh;
margin-bottom:3vh;
`;
const TitleTextEnglishCSS = Styled.div`
text-align:center;
font-size:30px;
margin-bottom:10vh;
`;
export default TitleScreen;
