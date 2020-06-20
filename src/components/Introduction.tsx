import React from "react";
import Styled from "@emotion/styled";

const Introduction: React.FC = () => {
  return (
    <IntroductionWrapper>
      <IntroductionCSS>
        <WrapperCSS>
          <TitleCSS>
            <TitleJapaneseCSS>開催にあたり</TitleJapaneseCSS>
            <TitleEnglishCSS>-Introduction-</TitleEnglishCSS>
          </TitleCSS>
          <JapaneseCSS>
            <JapaneseContentCSS>
              言葉を交えると新しい発見があります。話すことによってイメージの輪郭が急にはっきりすることもあります。アイデアは、人との関わりの中で少しずつ、時には劇的に進展します。山中研究室においても、会話や議論はプロジェクト進行の中核になります。常に、より広い視野、客観的な意見、新たなビジョンを求めて繰り返される会話。重要なのは話者の多様性です。今回の展示では、来場いただいた皆さんと、研究メンバーが会話することを目指しました。展示されたプロトタイプには、私たちのビジョンや価値観が込められています。気になることがあったら、そこにいるメンバーに遠慮なく問いかけてください。そして、あなたが思ったこと、感じたこと、考えたことを聞かせてください。限られた時間ではありますが、一緒に未来をドライブできれば幸いです。
            </JapaneseContentCSS>
            <JapaneseSenseiCSS>山中　俊治</JapaneseSenseiCSS>
          </JapaneseCSS>
          <EnglishCSS>
            <EnglishContentCSS>
              Discovery often occurs during a ”dialogue”. It also help us to
              clarify the vague image of our concepts. Those idea evolve
              steadily, sometimes dramatically with our engagement with others.
              Likewise,conversation and discussion are also critical for running
              our projects. A broader viewpoint, objective opinion and iteration
              of dialogue, pursuing new vision are always required. What is most
              important is the diversity of ideas. Our goal in this exhibition
              is to open a dialogue between you and us. The displayed prototypes
              are made upon our visions and values. If you have any questions or
              insights you would like to share with us, please feel free to ask.
              We would be very glad to hear your thoughts and opinions. Enjoy
              the short journey with our vision to the future.
            </EnglishContentCSS>
            <EnglishSenseiCSS>Shunji Yamanaka</EnglishSenseiCSS>
          </EnglishCSS>
        </WrapperCSS>
      </IntroductionCSS>
    </IntroductionWrapper>
  );
};

//Styles-------------------------------------------------------------------------
const IntroductionWrapper = Styled.div`
display:flex;
justify-content:center;
align-content:center;
`;
const IntroductionCSS = Styled.div`
background-color:black;
color:white;
font-weight:bold;
font-size:1.6rem;
font-kerning:3.5rem;
line-height:3rem;
width:1000px;
justify-self:center;
@media (max-width: 1200px){
  width:auto;
  height:auto;
  margin:5%;
  padding:5%;
}
`;
const WrapperCSS = Styled.div`
margin:10%;
`;
const TitleCSS = Styled.div`
margin-bottom:5%;
font-size:4rem;
display:flex;
justify-content:center;
@media (max-width: 1200px){
  font-size:1.6rem;
  font-kerning:3.5rem;
}

`;
const TitleJapaneseCSS = Styled.div`
margin-right:3%;
`;
const TitleEnglishCSS = Styled.div`
margin-left:3%;
`;
const JapaneseCSS = Styled.div`
margin-bottom:5%;
`;
const JapaneseContentCSS = Styled.div`
text-align:justify;
`;
const JapaneseSenseiCSS = Styled.div`
text-align:right;
`;
const EnglishCSS = Styled.div`
font-weight:normal;
`;
const EnglishContentCSS = Styled.div`
text-align:justify;
`;
const EnglishSenseiCSS = Styled.div`
text-align:right;
`;
export default Introduction;
