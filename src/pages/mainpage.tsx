import React from "react";
import styled from "@emotion/styled";
import TitleScreen from "../components/Titlescreen";
import Introduction from "../components/Introduction";
import texture from "../images/mdftexture200608v2.jpg";
import WhatIsWebDialog from "../components/WhatIsWebDialog";
import PreviousDialog from "../components/PreviousDialog";
import Works from "../components/Works";
import Credits from "../components/credits";
import OGPHead from "../components/OGPHead";
import LogoWhite from "../images/LogoWhite.png";

const Mainpage: React.FC = () => {
  return (
    <>
      <OGPHead
        title="山中研究室OpenLab -Top Page-"
        type="website"
        description="OpenLabに合わせて作成したwebページです"
        keyword=""
        image={LogoWhite}
        url="https://yam-lab-open-lab-web-git-feature-add-twitter.g-shino.now.sh"
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
        <Credits />
      </MainDiv>
    </>
  );
};

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

export default Mainpage;
