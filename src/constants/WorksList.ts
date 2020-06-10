import Uena from "../images/works/Uena/main.jpg";
import Takuro from "../images/works/Takuro.jpg";
import Shinogu from "../images/works/Shinogu.jpg";
import Oto from "../images/works/Oto.jpg";
import Oga from "../images/works/Oga.jpg";
import Kana from "../images/works/Kana.jpg";
import Heejun from "../images/works/Heejun.jpg";
import Hazuki from "../images/works/Hazuki.jpg";
import Fumin from "../images/works/Fu-min.jpg";

export interface WorksBaseInfo {
  src: string;
  author: string;
  titleJP: string;
  titleEN: string;
  link: string;
}

export interface WorksBaseInfoWithPrevAndNextLink extends WorksBaseInfo {
  prevLink: string | undefined;
  nextLink: string | undefined;
}

export const getWorksInfoByAuthor = (
  author: string
): WorksBaseInfoWithPrevAndNextLink => {
  let foundIndex = 0;
  const found = LIST_WORKS_BASE_INFO.find((worksInfo: WorksBaseInfo, index) => {
    foundIndex = index;
    return worksInfo.author === author;
  });
  const { prevLink, nextLink } = getPrevAndNextByIndex(foundIndex);
  return { ...found, prevLink, nextLink };
};

//インデックスから前後のリンクを取得　最初ならprevがundefined　最後ならnextがundefined
export const getPrevAndNextByIndex = (
  index: number
): { prevLink: string | undefined; nextLink: string | undefined } => {
  let prevLink = undefined;
  let nextLink = undefined;
  if (index !== 0) {
    prevLink = LIST_WORKS_BASE_INFO[index - 1].link;
  }
  if (index !== LIST_WORKS_BASE_INFO.length) {
    nextLink = LIST_WORKS_BASE_INFO[index + 1].link;
  }
  return { prevLink, nextLink };
};

export const LIST_WORKS_BASE_INFO: WorksBaseInfo[] = [
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
