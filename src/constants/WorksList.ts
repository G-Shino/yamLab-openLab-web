import Uena from "../images/works/Uena/uena_small.png";
import Takuro from "../images/works/Takuro/takuro_small.png";
import Shinogu from "../images/works/Shinogu/shinogu_small.png";
import Oto from "../images/works/Oto/oto_small.png";
import Oga from "../images/works/Oga/oga_small.png";
import Kana from "../images/works/Kana/kana-munya_small.png";
import Heejun from "../images/works/Heejun/heejun_small.png";
import Hazuki from "../images/works/Hazuki/hazuki_small.png";
import Fumin from "../images/works/Fu-min/fu-min_small.png";

export interface WorksBaseInfo {
  src: string;
  author: string;
  titleJP: string;
  titleEN: string;
  link: string;
}

export interface WorksBaseInfoWithPrevAndNextLink extends WorksBaseInfo {
  prevLink: string | undefined;
  prevImg: string | undefined;
  nextLink: string | undefined;
  nextImg: string | undefined;
}

export const getWorksInfoByAuthor = (
  author: string
): WorksBaseInfoWithPrevAndNextLink => {
  let foundIndex = 0;
  const found = LIST_WORKS_BASE_INFO.find((worksInfo: WorksBaseInfo, index) => {
    foundIndex = index;
    return worksInfo.author === author;
  });
  const { prevLink, prevImg, nextLink, nextImg } = getPrevAndNextByIndex(
    foundIndex
  );
  return { ...found, prevLink, prevImg, nextLink, nextImg };
};

//インデックスから前後のリンクを取得　最初ならprevがundefined　最後ならnextがundefined
export const getPrevAndNextByIndex = (
  index: number
): {
  prevLink: string | undefined;
  prevImg: string | undefined;
  nextLink: string | undefined;
  nextImg: string | undefined;
} => {
  let prevLink = undefined;
  let prevImg = undefined;
  let nextLink = undefined;
  let nextImg = undefined;
  if (index !== 0) {
    prevLink = LIST_WORKS_BASE_INFO[index - 1].link;
    prevImg = LIST_WORKS_BASE_INFO[index - 1].src;
  }
  if (index !== LIST_WORKS_BASE_INFO.length - 1) {
    nextLink = LIST_WORKS_BASE_INFO[index + 1].link;
    nextImg = LIST_WORKS_BASE_INFO[index + 1].src;
  }
  return { prevLink, prevImg, nextLink, nextImg };
};

export const LIST_WORKS_BASE_INFO: WorksBaseInfo[] = [
  {
    src: Oga,
    author: "Oga",
    titleJP: "Scalable hand",
    titleEN: "",
    link: "/works/oga",
  },
  {
    src: Shinogu,
    author: "Shinogu",
    titleJP: "流点",
    titleEN: "Ruten",
    link: "/works/shinogu",
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
    src: Uena,
    author: "Uena",
    titleJP: "ゆらゆら",
    titleEN: "solid swing",
    link: "/works/uena",
  },
  {
    src: Kana,
    author: "Kana",
    titleJP: "OTT: OTTOTTO",
    titleEN: "Oops Robot",
    link: "/works/kana",
  },
  {
    src: Fumin,
    author: "Fumin",
    titleJP: "ヴァイオリン用顎・肩当て",
    titleEN: "Chin & Shoulder Rest",
    link: "/works/fumin",
  },
  {
    src: Takuro,
    author: "Takuro",
    titleJP: "Rami S",
    titleEN: "",
    link: "/works/takuro",
  },
  {
    src: Oto,
    author: "Oto",
    titleJP: "道具の暇",
    titleEN: "Tool's Leisure Time",
    link: "/works/oto",
  },
  {
    src: Heejun,
    author: "Heejun",
    titleJP: "チタンの家具",
    titleEN: "Titanium Furniture",
    link: "/works/heejun",
  },
];
