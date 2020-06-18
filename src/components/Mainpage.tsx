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
        title="山中研究室OpenLab -Top Page-"
        type="website"
        description="OpenLabに合わせて作成したwebページです"
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
            hashtags={["山中研究室", "DiaLog", "生産研OpenLab"]}
            url={WebURL}
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} size="5x" />
          </TwitterShareButton>
          <FacebookShareButton url={WebURL} hashtag="#DiaLog">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="5x" />
          </FacebookShareButton>
          <LineShareButton url={WebURL}>
            <FontAwesomeIcon icon={["fab", "line"]} size="5x" />
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
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;
