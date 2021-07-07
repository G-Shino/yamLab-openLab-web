import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

import takuro0101 from "../images/works/Takuro/07-01-01.png";
import takuro0103 from "../images/works/Takuro/07-01-03.png";
import takuro0104 from "../images/works/Takuro/07-01-04.png";
import takuro0201 from "../images/works/Takuro/07-02-01.png";
import takuro0202 from "../images/works/Takuro/07-02-02.png";
import takuro0301 from "../images/works/Takuro/07-03-01.png";
import takuro0302 from "../images/works/Takuro/07-03-02.png";
import takuro0303 from "../images/works/Takuro/07-03-03.png";
import takuro0304 from "../images/works/Takuro/07-03-04.png";
import takuro0305 from "../images/works/Takuro/07-03-05.png";
import takuro0501 from "../images/works/Takuro/07-05-01.png";
import takuro0502 from "../images/works/Takuro/07-05-02.png";
import takuro0503 from "../images/works/Takuro/07-05-03.png";

import oto0101 from "../images/works/Oto/08-01-01.png";
import oto0102 from "../images/works/Oto/08-01-02.png";

import heejun0101 from "../images/works/Heejun/09-01-01.png";
import heejun0102 from "../images/works/Heejun/09-01-02.png";
import heejun0301 from "../images/works/Heejun/09-03-01.png";
import heejun0401 from "../images/works/Heejun/09-04-01.png";
import heejun0402 from "../images/works/Heejun/09-04-02.png";
import heejun0501 from "../images/works/Heejun/09-05-01.png";
import heejun0502 from "../images/works/Heejun/09-05-02.png";
import heejun0601 from "../images/works/Heejun/09-06-01.png";
import heejun0701 from "../images/works/Heejun/09-07-01.png";
import heejun0702 from "../images/works/Heejun/09-07-02.png";
import heejun0703 from "../images/works/Heejun/09-07-03.png";

type Authors =
  | "oga"
  | "shinogu"
  | "hazuki"
  | "kana"
  | "fumin"
  | "takuro"
  | "oto"
  | "heejun";
const authors: Authors[] = [
  "oga",
  "shinogu",
  "hazuki",
  "kana",
  "fumin",
  "takuro",
  "oto",
  "heejun",
];

type Info = {
  title: string;
  overViewCaptionJP: string;
  overViewCaptionEN: string;
  imgList: string[];
};

const worksInfo: { [key in Authors]: Info } = {
  oga: {
    title: "Scalable hand",
    overViewCaptionJP: `人にはそれぞれ、少しずつ違う手の大きさがあります。しかし、従来の義手やロボットハンドは大きさが段階的で、必ずしもあなたの欲しい手の大きさではないかもしれません。そこで私は、細かなサイズ調整を簡単に行える『Scalable hand』を制作しました。本来は硬いナイロン樹脂から形状を工夫することで、シリコンのように柔らかい指先・バネのような反発性のある関節を再現。これらの部品を3Dプリンタを用いて一度に造形することで組み立てにネジを使う必要がなく、3Dモデルを拡大・縮小するだけでサイズ調整が可能となります。`,
    overViewCaptionEN: `There are many sizes of hand depending on people. However, the size of current humanoid hands are still limited and may not be a perfect size for each individual.  This scalable hand is a non-assembled robot hand that is created using PBF (Powder Bed Fusion) a type of 3D-printer. The changes of the size can be made limitlessly.  Nylon, the material used here is normally stiff. But, by devising its geometric shape, it can be very soft and supple. `,
    imgList: [
      oga0101,
      oga0102,
      oga0103,
      oga0104,
      oga0201,
      oga0202,
      oga0203,
      oga0204,
      oga0301,
      oga0302,
      oga0303,
      oga0304,
      oga0305,
      oga0306,
      oga0307,
      oga0401,
      oga0402,
      oga0403,
    ],
  },
  shinogu: {
    title: "流点",
    overViewCaptionJP: `水の動きに見入ってしまった経験はありますか？雄大にしぶきを上げ流れ落ちる滝も、繊細に静かに滴り落ちる水滴も、思わず鑑賞し続けたくなる魅力があります。そしてこの魅力は、水の持つ「不定形さ」によってもたらされるのではないかと考えました。この作品では、小さな塊となった色水が、ひとつひとつ、流路に沿って滑らかに進みます。それは規則的でありながらどこか不安定さを感じさせる、不思議に満ちた動きです。しなやかな水が生み出す優美さを是非ご覧ください。`,
    overViewCaptionEN: `There is some indescribable aesthetic inflow of water, ranging from breathtaking, giant waterfall to a single, tiny waterdrop. We thought what makes it such beautiful is the amorphous nature of liquid water. In this prototype, a tiny droplet of colored water travels through the channel smoothly, and calmly. It is well-regulated motion yet looks unstable in some respects. Please enjoy the elegance created by the sophisticated flow of the water.`,
    imgList: [
      shinogu0201,
      shinogu0202,
      shinogu0301,
      shinogu0302,
      shinogu0303,
      shinogu0304,
      shinogu0401,
      shinogu0402,
      shinogu0403,
      shinogu0501,
      shinogu0502,
      shinogu0503,
      shinogu0504,
      shinogu0601,
      shinogu0602,
      shinogu0603,
      shinogu0604,
      shinogu0701,
    ],
  },
  hazuki: {
    title:
      "Reduce Unconscious Gender Bias through Workshop with Co-Speculative Design",
    overViewCaptionJP: `無意識のバイアスに気づくことは、簡単ではありません。生まれ育った環境や文化を通して、積み重なる学習によって根付いたものです。性別へのバイアスによって様々な可能性が阻まれている現状に対し、Co-Speculative Desginと言う理論を取り入れ、固定概念を覆し、内省を促すワークショップを設計しました。ワークショップ内では、起こりうる未来を想定しながらペルソナを作る過程でバイアスが露呈される仕掛けを用意し、参加者同士が対話することでバイアスに対する新たな問題への気づきを促しました。`,
    overViewCaptionEN: `It is quite difficult to realize our unconscious bias. It develops in our subconsciousness, while we live through our own culture and environment. We designed a workshop to discover and self-examine our inner gender bias, by introducing co-speculative design theory. In this workshop, we designed to expose an individual's bias while each participant build persona simulating close future of themselves. And by each participant's conversation, we were able to make them perceive some new problems about bias.`,
    imgList: [
      hazuki_1_1,
      hazuki_1_2,
      hazuki_2,
      hazuki_3_1,
      hazuki_3_2,
      hazuki_5,
      hazuki_6,
      hazuki_7,
      hazuki_8,
      hazuki_9,
    ],
  },
  kana: {
    title: "TT: OTTOTTO",
    overViewCaptionJP: `生物は安定した状態となるよう重力などの物理法則の上で常に均衡を保つようにしており、例えばひとたび不安定な姿勢になると、様々な反応や動作を即座に行うことで安定した姿勢に戻ろうとします。この作品では、こうした安定と不安定な姿勢を行き来する際の反応・動作の中から生命感や愛おしさを感じるふるまいを抽出し、人工物に適用しました。ふるまいにより生まれる、生き物らしさにご注目ください。`,
    overViewCaptionEN: `Living creatures, tend to balance themselves against the surrounding force such as gravity, to maintain their stable position. For instance, if one became unstable due to external interference, it tries to recover its stable state by properly reacting with their limbs. In this project, we tried to extract the essence of bio-likeness and adorableness from the behavior oscillating its state between stable and unstable and implemented it to this artifact. You would be able to observe bio-likeness through the behavior of our prototype.`,
    imgList: [
      kana0301,
      kana0302,
      kana0303,
      kana0304,
      kana0401,
      kana0402,
      kana0403,
      kana0601,
      kana0602,
      kana0603,
    ],
  },
  fumin: {
    title: "ヴァイオリン用顎・肩当て",
    overViewCaptionJP: `ヴァイオリンを弾くときには一般的に顎当てと肩当てが使われますが、長時間演奏していると首元にあざができ、痛みを生じることがあります。また顎当て・肩当ては、身体と楽器が唯一つながる部分であり、身体から出る曲への想いを楽器に十分に伝えることが求められます。この作品では、演奏時の痛みを減らすとともに心地よく演奏できることを目指しました。演奏者の身体を3Dスキャンし身体にフィットした形状を作成、そして曲げ木の弾性を利用することで顎・肩当ての美しい一体構造を実現しました。`,
    overViewCaptionEN: `This project is motivated by realizing the soft, flexible expression of an object’s property without involving elastic or damping material. The movement of the structure created by a series of Yajirobei(Japanese traditional balance toy), consistently expresses soft-looking animation regardless of the mechanical property of its component. Please enjoy the mysterious, both soft and rigid behavior of our prototype.`,
    imgList: [
      fumin0101,
      fumin0102,
      fumin0103,
      fumin0104,
      fumin0201,
      fumin0202,
      fumin0203,
      fumin0301,
      fumin0302,
      fumin0401,
      fumin0402,
      fumin0403,
      fumin0501,
      fumin0502,
      fumin0503,
      fumin0504,
      fumin0601,
      fumin0602,
      fumin0603,
      fumin0604,
    ],
  },
  takuro: {
    title: "Rami S",
    overViewCaptionJP:
      "『Rami』は3Dプリンティングならではの立体構造となめらかな曲面を持つ、陸上競技用下腿義足です。機能的で美しいスポーツ用義足を、多くの人に届けるシステムを作るために研究開発しています。最初のマイルストーンとして、パラ短距離・走り幅跳び選手である高桑早生さんのための義足『Rami』を開発。そしてプロジェクトの次の段階としてユーザー数の増加と競技種目の拡大を目指し、走り高跳び選手のための義足『Rami S』を開発しました。",
    overViewCaptionEN:
      '"Rami" is a 3D printed below-knee prosthesis designed for track-and-field, which has 3D-print exclusive, smooth and curvaceous geometry. Our goal in this project is to design a system to deliver beautiful and properly engineered sport-purposed prosthesis to more people in need. As a first milestone, we designed a prosthesis for Saki Takakuwa: former Japanese national player for Rio and London Paralympics. And by using design scheme achieved by it, we were able to develop a prosthesis "Rami S" for high jump. It is one small leap for the mass-customization of beautiful prosthesis.',
    imgList: [
      takuro0101,
      takuro0103,
      takuro0104,
      takuro0201,
      takuro0202,
      takuro0301,
      takuro0302,
      takuro0303,
      takuro0304,
      takuro0305,
      takuro0501,
      takuro0502,
      takuro0503,
    ],
  },
  oto: {
    title: "道具の暇",
    overViewCaptionJP:
      "人に使用されていない間には何も機能を果たしていない人工物が多く存在します。そんな人工物に生物らしい動きを与えることで注意や愛着を増やすことを目標にした”道具の暇”プロジェクトの二作品です。",
    overViewCaptionEN: `There are many artifacts that perform no function while not being used by humans. These two prototypes are the "Tool's Leisure Time" project that aims to increase attention and attachment by giving such artifacts a bio-like movement.`,
    imgList: [oto0101, oto0102],
  },
  heejun: {
    title: "チタンの家具",
    overViewCaptionJP:
      "チタンは、軽くて、強くて、錆びない、とても優れた金属です。意外かもしれませんが資源も豊富で、工場の配管など、産業分野では広く利用されています。日用品であまり目にしないのは、精練・加工が難しく、コストが掛かってしまうから。もしチタンをアルミのように安く使えるようになれば、世界中の日用品の多くはチタン製になるかもしれません。この作品では、配管用のチタンパイプの端材を材料に、グラフェンの転移機構を参考にしたアルゴリズムと3Dプリンタによるジョイント設計によって、美しく、作りやすいチタン製品を実現しました。",
    overViewCaptionEN:
      "This is the project to design aesthetic furniture using titanium. Titanium is a strong, lightweight and non-corrosive material, and it is often considered to be expensive. However, unlike rare earth, titanium ore is not rare on our planet. What makes this material very expensive is actually its cost of processing. Our approach is to design with cheap titanium pipe, which is the leftover from the manufacturing process of titanium heat exchanger. By using the algorithmic design method and 3D printed joints, we achieved low-cost, yet sophisticated design.",
    imgList: [
      heejun0101,
      heejun0102,
      heejun0301,
      heejun0401,
      heejun0402,
      heejun0501,
      heejun0502,
      heejun0601,
      heejun0701,
      heejun0702,
      heejun0703,
    ],
  },
};

const Page: React.FC = () => {
  const [selectedAuthor, setSelectedAuthor] = React.useState("oga");

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
        setSelectedAuthor(entry.target.id);
      }
    }, options);
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
        <Main>
          {authors.map((author, index) => {
            return (
              <div key={index}>
                <WorkTitle>{worksInfo[author].title}</WorkTitle>
                <WorksDiv ref={targets.current[author]} id={author}>
                  {worksInfo[author].imgList.map((src, index) => (
                    <WorkImg
                      src={src}
                      alt=""
                      width="802"
                      height="535"
                      key={index}
                    />
                  ))}
                  <AdjusterDiv />
                  <AdjusterDiv />
                  <AdjusterDiv />
                  <AdjusterDiv />
                </WorksDiv>
              </div>
            );
          })}
        </Main>
      </WrapperMainDiv>
      <AsideDiv>
        <AnimatePresence>
          {authors.map((author) => {
            return (
              author === selectedAuthor && (
                <WrapperMotionDiv
                  key={author}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <AsideWorkTitle>{worksInfo[author].title}</AsideWorkTitle>
                  <AsideWorkContent>
                    {worksInfo[author].overViewCaptionJP}
                  </AsideWorkContent>
                  <AsideWorkContent>
                    {worksInfo[author].overViewCaptionEN}
                  </AsideWorkContent>
                </WrapperMotionDiv>
              )
            );
          })}
        </AnimatePresence>
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
  margin-top: 88px;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const HeaderLogoDiv = styled.img`
  width: 80px;
  height: auto;
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 10;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: black;
  }
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
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
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

const WrapperMotionDiv = styled(motion.div)`
  position: fixed;
  width: calc(400px - 48px);
`;

const AsideWorkTitle = styled(motion.h3)`
  margin-bottom: 4rem;
`;

const AsideWorkContent = styled(motion.p)`
  margin-bottom: 2rem;
`;
