import React from "react";
import styled from "@emotion/styled";
import TitleScreen from "../components/Titlescreen";
import Introduction from "../components/Introduction";
import texture from "../images/mdftexture.jpg";
import WhatIsWebDialog from "../components/WhatIsWebDialog";
import PreviousDialog from "../components/PreviousDialog";
import Works from "../components/Works";

const Mainpage: React.FC = () => {
  return (
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
    </MainDiv>
  );
};

//Styles--------------------------------------------------------------------------
const MainDiv = styled.div`
  background-image: url(${texture});
  height: auto;
  padding-bottom: 320px;
`;

const ExplanationDiv = styled.div`
  margin-bottom: 320px;
`;

const WorksDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default Mainpage;
