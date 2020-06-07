import React from "react";
import styled from "@emotion/styled";

interface WorkCardProps {
  src: string;
  titleJP: string;
  titleEN: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ src, titleJP, titleEN }) => {
  return (
    <CardDiv>
      <ImageDiv>
        <Image src={src} />
      </ImageDiv>
      <TextDiv>
        <TitleJP>{titleJP}</TitleJP>
        <TitleEN>{titleEN}</TitleEN>
      </TextDiv>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  width: 200px;
  height: 200px;
`;

const ImageDiv = styled.div`
  width: 100%;
`;

const Image = styled.img``;

const TextDiv = styled.div``;

const TitleJP = styled.p``;
const TitleEN = styled.p``;

export default WorkCard;
