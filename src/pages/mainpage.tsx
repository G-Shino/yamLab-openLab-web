import React from "react";
import styled from "@emotion/styled";
import TitleScreen from "../components/Titlescreen";
import Introduction from "../components/Introduction";
import texture from "../images/mdftexture200608v2.jpg";
import WhatIsWebDialog from "../components/WhatIsWebDialog";
import PreviousDialog from "../components/PreviousDialog";
import Works from "../components/Works";
import Credits from "../components/credits";
import Head from "next/head";
import LogoWhite from "../images/LogoWhite.png";

const Mainpage: React.FC = () => {
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://yam-lab-open-lab-web-sable.now.sh"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="山中研究室OpenLab -Top Page-" />
        <meta
          property="og:description"
          content="OpenLabに合わせて作成したwebページです"
        />
        <meta property="og:site_name" content="山中研究室OpenLab" />
        <meta
          property="og:image"
          content={"https://yam-lab-open-lab-web-sable.now.sh" + LogoWhite}
        />
        <meta name="twitter:card" content="Summary Card" />
      </Head>
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
