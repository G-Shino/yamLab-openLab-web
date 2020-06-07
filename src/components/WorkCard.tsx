import React from "react";
import styled from "@emotion/styled";
import { Color } from "../constants/Color";
import Router from "next/router";

interface WorkCardProps {
  src: string;
  titleJP: string;
  titleEN: string;
  link: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ src, titleJP, titleEN, link }) => {
  return (
    <CardDiv
      onClick={() => {
        Router.push(link);
      }}
    >
      <ImageDiv>
        <Image src={src} />
      </ImageDiv>
      <TextDiv>
        {titleJP === "" ? (
          <></>
        ) : (
          <TitleJPDiv>
            <TitleJP>{titleJP}</TitleJP>
          </TitleJPDiv>
        )}

        <TitleENDiv>
          <TitleEN>{titleEN}</TitleEN>
        </TitleENDiv>
      </TextDiv>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  width: 320px;
  height: auto;
  transition: transform 0.1s linear;
  margin: 32px 0;
  @media (min-width: 1000px) {
    margin: 0 40px 80px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 320px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextDiv = styled.div`
  height: 96px;
  padding: 8px;
  background-color: ${Color.CAPTION_COLOR};
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const TitleJPDiv = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

const TitleJP = styled.p`
  width: 100%;
  font-size: 3.5rem;
  line-height: 4.2rem;
  color: ${Color.CAPTION_FONT_COLOR};
  white-space: nowrap;
`;

const TitleENDiv = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

const TitleEN = styled.p`
  width: 100%;
  font-size: 3.5rem;
  line-height: 4.2rem;
  color: ${Color.CAPTION_FONT_COLOR};
  white-space: nowrap;
`;

export default WorkCard;
