import React from "react";
import styled from "@emotion/styled";
import WorkCard from "./WorkCard";
import Uena from "../images/works/Uena/main.jpg";
import Takuro from "../images/works/Takuro.jpg";
import Shinogu from "../images/works/Shinogu.jpg";
import Oto from "../images/works/Oto.jpg";
import Oga from "../images/works/Oga.jpg";
import Kana from "../images/works/Kana.jpg";
import Heejun from "../images/works/Heejun.jpg";
import Hazuki from "../images/works/Hazuki.jpg";
import Fumin from "../images/works/Fu-min.jpg";

interface IMG_OBJ {
  src: string;
  author: string;
  titleJP: string;
  titleEN: string;
  link: string;
}
const LIST_IMG_OBJ: IMG_OBJ[] = [
  {
    src: Uena,
    author: "Uena",
    titleJP: "ゆらゆら",
    titleEN: "solid swing",
    link: "/works/uena",
  },
  {
    src: Takuro,
    author: "Takuro",
    titleJP: "Rami S",
    titleEN: "Rami S",
    link: "/works/takuro",
  },
  {
    src: Shinogu,
    author: "Shinogu",
    titleJP: "流点",
    titleEN: "Ruten",
    link: "/works/shinogu",
  },
  {
    src: Oto,
    author: "Oto",
    titleJP: "道具の暇",
    titleEN: "Tool's Leisure Time",
    link: "/works/oto",
  },
  {
    src: Oga,
    author: "Oga",
    titleJP: "Scalable hand",
    titleEN: "Scalable hand",
    link: "/works/oga",
  },
  {
    src: Kana,
    author: "Kana",
    titleJP: "OTT: OTTOTTO",
    titleEN: "Oops Robot",
    link: "/works/kana",
  },
  {
    src: Heejun,
    author: "Heejun",
    titleJP: "チタンの家具",
    titleEN: "Titanium Furniture",
    link: "/works/heejun",
  },
  {
    src: Hazuki,
    author: "Hazuki",
    titleJP: "",
    titleEN:
      "Reduce Unconscious Gender Bias through Workshop with Co-Speculative Design",
    link: "/works/hazuki",
  },
  {
    src: Fumin,
    author: "Fumin",
    titleJP: "ヴァイオリイン用顎・肩当て",
    titleEN: "Chin & Shoulder Rest",
    link: "/works/fumin",
  },
];

const Works: React.FC = () => {
  return (
    <WrapperCSS>
      <SectionTitleDiv>
        <SectionTitle>- Works -</SectionTitle>
      </SectionTitleDiv>
      <SectionWorksDiv>
        {LIST_IMG_OBJ.map((imgObj) => (
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

const SectionTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 104px;
`;

const SectionTitle = styled.p`
  font-size: 4rem;
`;

const SectionWorksDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Works;
