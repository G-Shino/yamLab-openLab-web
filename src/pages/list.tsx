import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import texture from "../images/mdftexture.jpg";
import HeaderLogo from "../images/logo_white.png";

import oga0101 from "../images/works/Oga/01-01-01.png";
import oga0102 from "../images/works/Oga/01-01-02.png";
import oga0103 from "../images/works/Oga/01-01-03.png";
import oga0104 from "../images/works/Oga/01-01-04.png";
import oga0201 from "../images/works/Oga/01-02-01.png";
import oga0202 from "../images/works/Oga/01-02-02.png";
import oga0203 from "../images/works/Oga/01-02-03.png";
import oga0204 from "../images/works/Oga/01-02-04.png";
import oga0301 from "../images/works/Oga/01-03-01.png";
import oga0302 from "../images/works/Oga/01-03-02.png";
import oga0303 from "../images/works/Oga/01-03-03.png";
import oga0304 from "../images/works/Oga/01-03-04.png";
import oga0305 from "../images/works/Oga/01-03-05.png";
import oga0306 from "../images/works/Oga/01-03-06.png";
import oga0307 from "../images/works/Oga/01-03-07.png";
import oga0401 from "../images/works/Oga/01-04-01.png";
import oga0402 from "../images/works/Oga/01-04-02.png";
import oga0403 from "../images/works/Oga/01-04-03.png";

import shinogu0201 from "../images/works/Shinogu/02-02-01.png";
import shinogu0202 from "../images/works/Shinogu/02-02-02.png";
import shinogu0301 from "../images/works/Shinogu/02-03-01.png";
import shinogu0302 from "../images/works/Shinogu/02-03-02.png";
import shinogu0303 from "../images/works/Shinogu/02-03-03.png";
import shinogu0304 from "../images/works/Shinogu/02-03-04.png";
import shinogu0401 from "../images/works/Shinogu/02-04-01.png";
import shinogu0402 from "../images/works/Shinogu/02-04-02.png";
import shinogu0403 from "../images/works/Shinogu/02-04-03.png";
import shinogu0501 from "../images/works/Shinogu/02-05-01.png";
import shinogu0502 from "../images/works/Shinogu/02-05-02.png";
import shinogu0503 from "../images/works/Shinogu/02-05-03.png";
import shinogu0504 from "../images/works/Shinogu/02-05-04.png";
import shinogu0601 from "../images/works/Shinogu/02-06-01.png";
import shinogu0602 from "../images/works/Shinogu/02-06-02.png";
import shinogu0603 from "../images/works/Shinogu/02-06-03.png";
import shinogu0604 from "../images/works/Shinogu/02-06-04.png";
import shinogu0701 from "../images/works/Shinogu/02-07-01.png";

import hazuki_1_1 from "../images/works/Hazuki/hazuki_1-1.png";
import hazuki_1_2 from "../images/works/Hazuki/hazuki_1-2.png";
import hazuki_2 from "../images/works/Hazuki/hazuki_2.png";
import hazuki_3_1 from "../images/works/Hazuki/hazuki_3-1.png";
import hazuki_3_2 from "../images/works/Hazuki/hazuki_3-2.png";
import hazuki_5 from "../images/works/Hazuki/hazuki_5.png";
import hazuki_6 from "../images/works/Hazuki/hazuki_6.png";
import hazuki_7 from "../images/works/Hazuki/hazuki_7.png";
import hazuki_8 from "../images/works/Hazuki/hazuki_8.png";
import hazuki_9 from "../images/works/Hazuki/hazuki_9.png";

import kana0301 from "../images/works/Kana/05-03-01.png";
import kana0302 from "../images/works/Kana/05-03-02.png";
import kana0303 from "../images/works/Kana/05-03-03.png";
import kana0304 from "../images/works/Kana/05-03-04.png";
import kana0401 from "../images/works/Kana/05-04-01.png";
import kana0402 from "../images/works/Kana/05-04-02.png";
import kana0403 from "../images/works/Kana/05-04-03.png";
import kana0601 from "../images/works/Kana/05-06-01.png";
import kana0602 from "../images/works/Kana/05-06-02.png";
import kana0603 from "../images/works/Kana/05-06-03.png";

import fumin0101 from "../images/works/Fu-min/06-01-01.png";
import fumin0102 from "../images/works/Fu-min/06-01-02.png";
import fumin0103 from "../images/works/Fu-min/06-01-03.png";
import fumin0104 from "../images/works/Fu-min/06-01-04.png";
import fumin0201 from "../images/works/Fu-min/06-02-01.png";
import fumin0202 from "../images/works/Fu-min/06-02-02.png";
import fumin0203 from "../images/works/Fu-min/06-02-03.png";
import fumin0301 from "../images/works/Fu-min/06-03-01.png";
import fumin0302 from "../images/works/Fu-min/06-03-02.png";
import fumin0401 from "../images/works/Fu-min/06-04-01.png";
import fumin0402 from "../images/works/Fu-min/06-04-02.png";
import fumin0403 from "../images/works/Fu-min/06-04-03.png";
import fumin0501 from "../images/works/Fu-min/06-05-01.png";
import fumin0502 from "../images/works/Fu-min/06-05-02.png";
import fumin0503 from "../images/works/Fu-min/06-05-03.png";
import fumin0504 from "../images/works/Fu-min/06-05-04.png";
import fumin0601 from "../images/works/Fu-min/06-06-01.png";
import fumin0602 from "../images/works/Fu-min/06-06-02.png";
import fumin0603 from "../images/works/Fu-min/06-06-03.png";
import fumin0604 from "../images/works/Fu-min/06-06-04.png";

type Authors = "oga" | "shinogu" | "hazuki" | "kana" | "fumin";
const authors: Authors[] = ["oga", "shinogu", "hazuki", "kana", "fumin"];

type Info = {
  title: string;
  overViewCaptionJP: string;
  overViewCaptionEN: string;
};

const worksInfo: { [key in Authors]: Info } = {
  oga: {
    title: "Scalable hand",
    overViewCaptionJP: `人にはそれぞれ、少しずつ違う手の大きさがあります。しかし、従来の義手やロボットハンドは大きさが段階的で、必ずしもあなたの欲しい手の大きさではないかもしれません。そこで私は、細かなサイズ調整を簡単に行える『Scalable hand』を制作しました。本来は硬いナイロン樹脂から形状を工夫することで、シリコンのように柔らかい指先・バネのような反発性のある関節を再現。これらの部品を3Dプリンタを用いて一度に造形することで組み立てにネジを使う必要がなく、3Dモデルを拡大・縮小するだけでサイズ調整が可能となります。`,
    overViewCaptionEN: `There are many sizes of hand depending on people. However, the size of current humanoid hands are still limited and may not be a perfect size for each individual.  This scalable hand is a non-assembled robot hand that is created using PBF (Powder Bed Fusion) a type of 3D-printer. The changes of the size can be made limitlessly.  Nylon, the material used here is normally stiff. But, by devising its geometric shape, it can be very soft and supple. `,
  },
  shinogu: {
    title: "流点",
    overViewCaptionJP: `水の動きに見入ってしまった経験はありますか？雄大にしぶきを上げ流れ落ちる滝も、繊細に静かに滴り落ちる水滴も、思わず鑑賞し続けたくなる魅力があります。そしてこの魅力は、水の持つ「不定形さ」によってもたらされるのではないかと考えました。この作品では、小さな塊となった色水が、ひとつひとつ、流路に沿って滑らかに進みます。それは規則的でありながらどこか不安定さを感じさせる、不思議に満ちた動きです。しなやかな水が生み出す優美さを是非ご覧ください。`,
    overViewCaptionEN: `There is some indescribable aesthetic inflow of water, ranging from breathtaking, giant waterfall to a single, tiny waterdrop. We thought what makes it such beautiful is the amorphous nature of liquid water. In this prototype, a tiny droplet of colored water travels through the channel smoothly, and calmly. It is well-regulated motion yet looks unstable in some respects. Please enjoy the elegance created by the sophisticated flow of the water.`,
  },
  hazuki: {
    title:
      "Reduce Unconscious Gender Bias through Workshop with Co-Speculative Design",
    overViewCaptionJP: `無意識のバイアスに気づくことは、簡単ではありません。生まれ育った環境や文化を通して、積み重なる学習によって根付いたものです。性別へのバイアスによって様々な可能性が阻まれている現状に対し、Co-Speculative Desginと言う理論を取り入れ、固定概念を覆し、内省を促すワークショップを設計しました。ワークショップ内では、起こりうる未来を想定しながらペルソナを作る過程でバイアスが露呈される仕掛けを用意し、参加者同士が対話することでバイアスに対する新たな問題への気づきを促しました。`,
    overViewCaptionEN: `It is quite difficult to realize our unconscious bias. It develops in our subconsciousness, while we live through our own culture and environment. We designed a workshop to discover and self-examine our inner gender bias, by introducing co-speculative design theory. In this workshop, we designed to expose an individual's bias while each participant build persona simulating close future of themselves. And by each participant's conversation, we were able to make them perceive some new problems about bias.`,
  },
  kana: {
    title: "TT: OTTOTTO",
    overViewCaptionJP: `生物は安定した状態となるよう重力などの物理法則の上で常に均衡を保つようにしており、例えばひとたび不安定な姿勢になると、様々な反応や動作を即座に行うことで安定した姿勢に戻ろうとします。この作品では、こうした安定と不安定な姿勢を行き来する際の反応・動作の中から生命感や愛おしさを感じるふるまいを抽出し、人工物に適用しました。ふるまいにより生まれる、生き物らしさにご注目ください。`,
    overViewCaptionEN: `Living creatures, tend to balance themselves against the surrounding force such as gravity, to maintain their stable position. For instance, if one became unstable due to external interference, it tries to recover its stable state by properly reacting with their limbs. In this project, we tried to extract the essence of bio-likeness and adorableness from the behavior oscillating its state between stable and unstable and implemented it to this artifact. You would be able to observe bio-likeness through the behavior of our prototype.`,
  },
  fumin: {
    title: "ヴァイオリン用顎・肩当て",
    overViewCaptionJP: `ヴァイオリンを弾くときには一般的に顎当てと肩当てが使われますが、長時間演奏していると首元にあざができ、痛みを生じることがあります。また顎当て・肩当ては、身体と楽器が唯一つながる部分であり、身体から出る曲への想いを楽器に十分に伝えることが求められます。この作品では、演奏時の痛みを減らすとともに心地よく演奏できることを目指しました。演奏者の身体を3Dスキャンし身体にフィットした形状を作成、そして曲げ木の弾性を利用することで顎・肩当ての美しい一体構造を実現しました。`,
    overViewCaptionEN: `This project is motivated by realizing the soft, flexible expression of an object’s property without involving elastic or damping material. The movement of the structure created by a series of Yajirobei(Japanese traditional balance toy), consistently expresses soft-looking animation regardless of the mechanical property of its component. Please enjoy the mysterious, both soft and rigid behavior of our prototype.`,
  },
};

const Page: React.FC = () => {
  const [author, setAuthor] = React.useState("oga");

  const targets = React.useRef<
    { [key in Authors]?: React.RefObject<HTMLDivElement> }
  >({});
  authors.forEach((author) => {
    targets.current[author] = React.createRef();
  });

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAuthor(entry.target.id);
      }
    }, options);
    console.log(targets);
    Object.values(targets.current).forEach((target) => {
      observer.observe(target.current);
    });
    return () => {
      Object.values(targets.current).forEach((target) => {
        observer.unobserve(target.current);
      });
    };
  }, []);

  return (
    <WrapperDiv>
      <WrapperMainDiv>
        <Header>
          <Link href="/">
            <h1>
              <HeaderLogoDiv
                src={HeaderLogo}
                alt="Dia Log"
                height="800"
                width="800"
              />
            </h1>
          </Link>
        </Header>
        <Main>
          <WorkTitle>{worksInfo.oga.title}</WorkTitle>
          <WorksDiv ref={targets.current[authors[0]]} id={authors[0]}>
            <WorkImg src={oga0101} alt="" width="802" height="535" />
            <WorkImg src={oga0102} alt="" width="802" height="535" />
            <WorkImg src={oga0103} alt="" width="802" height="535" />
            <WorkImg src={oga0104} alt="" width="802" height="535" />
            <WorkImg src={oga0201} alt="" width="802" height="535" />
            <WorkImg src={oga0202} alt="" width="802" height="535" />
            <WorkImg src={oga0203} alt="" width="802" height="535" />
            <WorkImg src={oga0204} alt="" width="802" height="535" />
            <WorkImg src={oga0301} alt="" width="802" height="535" />
            <WorkImg src={oga0302} alt="" width="802" height="535" />
            <WorkImg src={oga0303} alt="" width="802" height="535" />
            <WorkImg src={oga0304} alt="" width="802" height="535" />
            <WorkImg src={oga0305} alt="" width="802" height="535" />
            <WorkImg src={oga0306} alt="" width="802" height="535" />
            <WorkImg src={oga0307} alt="" width="802" height="535" />
            <WorkImg src={oga0401} alt="" width="802" height="535" />
            <WorkImg src={oga0402} alt="" width="802" height="535" />
            <WorkImg src={oga0403} alt="" width="802" height="535" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
          <WorkTitle>{worksInfo.shinogu.title}</WorkTitle>
          <WorksDiv ref={targets.current[authors[1]]} id={authors[1]}>
            <WorkImg src={shinogu0201} alt="" width="802" height="535" />
            <WorkImg src={shinogu0202} alt="" width="802" height="535" />
            <WorkImg src={shinogu0301} alt="" width="802" height="535" />
            <WorkImg src={shinogu0302} alt="" width="802" height="535" />
            <WorkImg src={shinogu0303} alt="" width="802" height="535" />
            <WorkImg src={shinogu0304} alt="" width="802" height="535" />
            <WorkImg src={shinogu0401} alt="" width="802" height="535" />
            <WorkImg src={shinogu0402} alt="" width="802" height="535" />
            <WorkImg src={shinogu0403} alt="" width="802" height="535" />
            <WorkImg src={shinogu0501} alt="" width="802" height="535" />
            <WorkImg src={shinogu0502} alt="" width="802" height="535" />
            <WorkImg src={shinogu0503} alt="" width="802" height="535" />
            <WorkImg src={shinogu0504} alt="" width="802" height="535" />
            <WorkImg src={shinogu0601} alt="" width="802" height="535" />
            <WorkImg src={shinogu0602} alt="" width="802" height="535" />
            <WorkImg src={shinogu0603} alt="" width="802" height="535" />
            <WorkImg src={shinogu0604} alt="" width="802" height="535" />
            <WorkImg src={shinogu0701} alt="" width="802" height="535" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
          <WorkTitle>{worksInfo.hazuki.title}</WorkTitle>
          <WorksDiv ref={targets.current[authors[2]]} id={authors[2]}>
            <WorkImg src={hazuki_1_1} alt="" />
            <WorkImg src={hazuki_1_2} alt="" />
            <WorkImg src={hazuki_2} alt="" />
            <WorkImg src={hazuki_3_1} alt="" />
            <WorkImg src={hazuki_3_2} alt="" />
            <WorkImg src={hazuki_5} alt="" />
            <WorkImg src={hazuki_6} alt="" />
            <WorkImg src={hazuki_7} alt="" />
            <WorkImg src={hazuki_8} alt="" />
            <WorkImg src={hazuki_9} alt="" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
          <WorkTitle>{worksInfo.kana.title}</WorkTitle>
          <WorksDiv ref={targets.current[authors[3]]} id={authors[3]}>
            <WorkImg src={kana0301} alt="" />
            <WorkImg src={kana0302} alt="" />
            <WorkImg src={kana0303} alt="" />
            <WorkImg src={kana0304} alt="" />
            <WorkImg src={kana0401} alt="" />
            <WorkImg src={kana0402} alt="" />
            <WorkImg src={kana0403} alt="" />
            <WorkImg src={kana0601} alt="" />
            <WorkImg src={kana0602} alt="" />
            <WorkImg src={kana0603} alt="" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
          <WorkTitle>{worksInfo.fumin.title}</WorkTitle>
          <WorksDiv ref={targets.current[authors[4]]} id={authors[4]}>
            <WorkImg src={fumin0101} alt="" />
            <WorkImg src={fumin0102} alt="" />
            <WorkImg src={fumin0103} alt="" />
            <WorkImg src={fumin0104} alt="" />
            <WorkImg src={fumin0201} alt="" />
            <WorkImg src={fumin0202} alt="" />
            <WorkImg src={fumin0203} alt="" />
            <WorkImg src={fumin0301} alt="" />
            <WorkImg src={fumin0302} alt="" />
            <WorkImg src={fumin0401} alt="" />
            <WorkImg src={fumin0402} alt="" />
            <WorkImg src={fumin0403} alt="" />
            <WorkImg src={fumin0501} alt="" />
            <WorkImg src={fumin0502} alt="" />
            <WorkImg src={fumin0503} alt="" />
            <WorkImg src={fumin0504} alt="" />
            <WorkImg src={fumin0601} alt="" />
            <WorkImg src={fumin0602} alt="" />
            <WorkImg src={fumin0603} alt="" />
            <WorkImg src={fumin0604} alt="" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
        </Main>
      </WrapperMainDiv>
      <AsideDiv>
        <AsideWorkTitle>{worksInfo[author].title}</AsideWorkTitle>
        <AsideWorkContent>
          {worksInfo[author].overViewCaptionJP}
        </AsideWorkContent>
        <AsideWorkContent>
          {worksInfo[author].overViewCaptionEN}
        </AsideWorkContent>
      </AsideDiv>
    </WrapperDiv>
  );
};

export default Page;

const WrapperDiv = styled.div`
  height: auto;
  background-image: url(${texture});
  height: auto;
  display: flex;
`;

const WrapperMainDiv = styled.div`
  width: calc(100% - 400px);
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Header = styled.header`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderLogoDiv = styled.img`
  width: 80px;
  height: auto;
  padding-top: 8px;
  padding-left: 8px;
`;

const Main = styled.main`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
`;

const WorkTitle = styled.h2`
  text-align: center;
`;

const WorksDiv = styled.div`
  margin-bottom: 160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 320px) {
    margin-bottom: 96px;
  }
`;

const WorkImg = styled.img`
  box-sizing: border-box;
  width: 320px;
  height: auto;
  padding: 16px;
  flex-grow: 1;
  flex-shrink: 0;
  @media (max-width: 320px) {
    width: 90%;
  }
  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

const AdjusterDiv = styled.div`
  width: 320px;
  height: 0;
  flex-grow: 1;
  @media (max-width: 320px) {
    width: 90%;
  }
`;

const AsideDiv = styled.aside`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: black;
  color: white;
  overflow: scroll;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const AsideWorkTitle = styled.h3`
  margin-bottom: 5rem;
`;

const AsideWorkContent = styled.p`
  margin-bottom: 1rem;
`;
