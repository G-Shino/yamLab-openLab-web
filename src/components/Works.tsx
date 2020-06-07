import React from "react";
import styled from "@emotion/styled";
import WorkCard from "./WorkCard";
const Uena = require("../images/works/Uena.jpg");
const Takuro = require("../images/works/Takuro.jpg");
const Shinogu = require("../images/works/Shinogu.jpg");
const Oto = require("../images/works/Oto.jpg");
const Oga = require("../images/works/Oga.jpg");
const Kana = require("../images/works/Kana.jpg");
const Heejun = require("../images/works/Heejun.jpg");
const Hazuki = require("../images/works/Hazuki.jpg");
const Fumin = require("../images/works/Fu-min.jpg");

const LIST_IMG_OBJ = [
  {
    src: Uena,
    author: "Uena",
    titleJP: "ゆらゆら",
    link: "/works/uena",
  },
  {
    src: Takuro,
    author: "Takuro",
    titleJP: "Rami S",
    link: "/works/takuro",
  },
  {
    src: Shinogu,
    author: "Shinogu",
    titleJP: "流点",
    link: "/works/shinogu",
  },
  {
    src: Oto,
    author: "Oto",
    titleJP: "道具の暇",
    link: "/works/oto",
  },
  {
    src: Oga,
    author: "Oga",
    titleJP: "Scalable hand",
    link: "/works/oga",
  },
  {
    src: Kana,
    author: "Kana",
    titleJP: "OTT: OTTOTTO",
    link: "/works/kana",
  },
  {
    src: Heejun,
    author: "Heejun",
    titleJP: "チタンの家具",
    link: "/works/heejun",
  },
  {
    src: Hazuki,
    author: "Hazuki",
    titleJP: "長いタイトル",
    link: "/works/hazuki",
  },
  {
    src: Fumin,
    author: "Fumin",
    titleJP: "Chin & Shoulder Rest",
    link: "/works/fumin",
  },
];

const PreviousDialog: React.FC = () => {
  return (
    <WrapperCSS>
      <WorkCard
        src={LIST_IMG_OBJ[0].src}
        titleJP={LIST_IMG_OBJ[0].titleJP}
        titleEN={"DUMMY"}
      />
    </WrapperCSS>
  );
};

//Styles---------------------------------------------------------------
const WrapperCSS = styled.div`
  width: 90%;
  min-width: 1000px;
`;

export default PreviousDialog;
