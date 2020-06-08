import React from "react";
import Styled from "@emotion/styled";

const Introduction: React.FC = () => {
  return (
    <IntroductionWrapper>
      <IntroductionCSS>
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
            clarify the vague image of our concepts. Those idea evolve steadily,
            sometimes dramatically with our engagement with others.
            Likewise,conversation and discussion are also critical for running
            our projects. A broader viewpoint, objective opinion and iteration
            of dialogue, pursuing new vision are always required. What is most
            important is the diversity of ideas. Our goal in this exhibition is
            to open a dialogue between you and us. The displayed prototypes are
            made upon our visions and values. If you have any questions or
            insights you would like to share with us, please feel free to ask.
            We would be very glad to hear your thoughts and opinions. Enjoy the
            short journey with our vision to the future.
          </EnglishContentCSS>
          <EnglishSenseiCSS>Shunji Yamanaka</EnglishSenseiCSS>
        </EnglishCSS>
      </IntroductionCSS>
    </IntroductionWrapper>
  );
};

//Styles-------------------------------------------------------------------------
const IntroductionWrapper = Styled.div`
height:1080px;
display:grid;
justify-content:center;
align-content:center;`;
const IntroductionCSS = Styled.div`
background-color:black;
color:white;
font-weight:bold;
width:1086px;
height:735px;
justify-self:center;
line-height:25px;
`;
const TitleCSS = Styled.div`
margin-top:100px;
margin-bottom:50px;
font-size:40px;
font-kerning:35px;
display:flex;
justify-content:center;
`;
const TitleJapaneseCSS = Styled.div`
margin-right:70px;
`;
const TitleEnglishCSS = Styled.div`
margin-left:70px;
`;
const JapaneseCSS = Styled.div`
margin:0 150px 50px 150px;
font-size:16px;
`;
const JapaneseContentCSS = Styled.p``;
const JapaneseSenseiCSS = Styled.div`
text-align:right;
`;
const EnglishCSS = Styled.div`
margin:0 150px 0 150px;
font-size:16px;
font-weight:normal;
`;
const EnglishContentCSS = Styled.p``;
const EnglishSenseiCSS = Styled.div`
text-align:right;
`;
export default Introduction;
