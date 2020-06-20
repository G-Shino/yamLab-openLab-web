import React from "react";
import styled from "@emotion/styled";
import TitleScreen from "./Titlescreen";
import Introduction from "./Introduction";
import texture from "../images/mdftexture.jpg";
import WhatIsWebDialog from "./WhatIsWebDialog";
import PreviousDialog from "./PreviousDialog";
import Works from "./Works";
import Credits from "./Credits";
import OGPHead from "./OGPHead";
import LogoOGP from "../images/logo_ogp.png";
import { WebURL } from "../constants/Url";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const Mainpage: React.FC = () => {
  return (
    <>
      <OGPHead
        title="山中研究室OpenLab"
        type="website"
        description="言葉を交えると新しい発見があります。話すことによってイメージの輪郭が急にはっきりすることもあります。アイデアは、人との関わりの中で少しずつ、時には劇的に進展します。山中研究室においても、会話や議論はプロジェクト進行の中核になります。常に、より広い視野、客観的な意見、新たなビジョンを求めて繰り返される会話。重要なのは話者の多様性です。今回の展示では、来場いただいた皆さんと、研究メンバーが会話することを目指しました。展示されたプロトタイプには、私たちのビジョンや価値観が込められています。気になることがあったら、そこにいるメンバーに遠慮なく問いかけてください。そして、あなたが思ったこと、感じたこと、考えたことを聞かせてください。限られた時間ではありますが、一緒に未来をドライブできれば幸いです。"
        keyword=""
        image={LogoOGP}
        page=""
      />
      <MainDiv>
        <ExplanationDiv>
          <TitleScreen />
          <Introduction />
          <WhatIsWebDialog />
          <PreviousDialog />
        </ExplanationDiv>
        <WorksDiv>
          <Works />
        </WorksDiv>
        <StyledSNSButton className="twitter-embed">
          <TwitterShareButton
            hashtags={["DiaLog", "山中研", "yamlab"]}
            url={WebURL}
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </TwitterShareButton>
          <FacebookShareButton url={WebURL} hashtag="#DiaLog">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </FacebookShareButton>
          <LineShareButton url={WebURL}>
            <FontAwesomeIcon icon={["fab", "line"]} />
          </LineShareButton>
        </StyledSNSButton>
        <Credits />
      </MainDiv>
    </>
  );
};
export default Mainpage;

//Styles--------------------------------------------------------------------------
const MainDiv = styled.div`
  background-image: url(${texture});
  height: auto;
`;

const ExplanationDiv = styled.div`
  margin-bottom: 320px;
`;

const WorksDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSNSButton = styled.div`
  width: 80%;
  max-width: 342px;
  margin: 50px auto 50px auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
  font-size: 6rem;
  @media (max-width: 1200px) {
    font-size: 3rem;
  }
`;
