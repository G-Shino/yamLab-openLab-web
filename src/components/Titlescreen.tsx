import React from "react";
import Styled from "@emotion/styled";
const Logo = require("../images/200614logo.gif");

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
width:50vmin;
height:50vmin;
`;
const TitleTextJapaneseCSS = Styled.div`
text-align:center;
font-size:3rem;
margin-top:5vh;
margin-bottom:3vh;
@media (max-width: 1200px){
  font-size:2rem;
}
`;
const TitleTextEnglishCSS = Styled.div`
text-align:center;
font-size:3rem;
margin-bottom:10vh;
@media (max-width: 1200px){
  font-size:2rem;
}
`;
export default TitleScreen;
