import React from "react";
import styled from "@emotion/styled";
// import { Color } from "../constants/Color";
import Router from "next/router";

interface WorkCardProps {
  src: string;
  titleJP: string;
  titleEN: string;
  link: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ src, link }) => {
  return (
    <CardDiv
      onClick={() => {
        Router.push(link);
      }}
    >
      <ImageDiv>
        <Image src={src} />
      </ImageDiv>
    </CardDiv>
  );
};

const CardDiv = styled.div`
  width: 320px;
  height: auto;
  margin: 32px 0;
  position: relative;

  @media (min-width: 1000px) {
    margin: 0 40px 80px;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    transition: width ease 0.1s, height ease 0.1s 0.1s, border-color 0s 0.2s;
    will-change: width height border-color;
    z-index: 2;
  }

  &::before {
    right: -16px;
    bottom: -16px;
    border-right: 4px solid;
    border-top: 4px solid;
    border-color: transparent;
  }
  &::after {
    left: -16px;
    top: -16px;
    border-left: 4px solid;
    border-bottom: 4px solid;
    border-color: transparent;
  }

  &:hover::before,
  &:hover::after {
    width: calc(28px + 100%);
    height: calc(28px + 100%);
    border-color: black;
    transition: border-color 0s, height ease 0.2s, width ease 0.2s 0.2s;
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

export default WorkCard;
