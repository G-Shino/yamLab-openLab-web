import React from "react";
import styled from "@emotion/styled";
import WorkCard from "./WorkCard";
import { LIST_WORKS_BASE_INFO } from "../constants/WorksList";

const Works: React.FC = () => {
  return (
    <WrapperCSS>
      <SectionTitleDiv>
        <SectionTitle>Works</SectionTitle>
      </SectionTitleDiv>
      <SectionWorksDiv>
        {LIST_WORKS_BASE_INFO.map((imgObj) => (
          <WorkCard
            key={imgObj.author}
            author={imgObj.author}
            src={imgObj.src}
            titleJP={imgObj.titleJP}
            titleEN={imgObj.titleEN}
            link={imgObj.link}
          />
        ))}
      </SectionWorksDiv>
    </WrapperCSS>
  );
};

//Styles---------------------------------------------------------------
const WrapperCSS = styled.div`
  width: 95%;
  max-width: 1400px;
`;

const SectionTitleDiv = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const SectionTitle = styled.span`
  display: inline-block;
  height: 100%;
  border-bottom: 5px solid;
`;

const SectionWorksDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Works;
