import React from "react";
import styled from "@emotion/styled";
import texture from "../../images/mdftexture200608v2.jpg";
import OGPHead from "../../components/OGPHead";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import kana0301 from "../../images/works/Kana/05-03-01.png";
import kana0302 from "../../images/works/Kana/05-03-02.png";
import kana0303 from "../../images/works/Kana/05-03-03.png";
import kana0304 from "../../images/works/Kana/05-03-04.png";
import kana0401 from "../../images/works/Kana/05-04-01.png";
import kana0402 from "../../images/works/Kana/05-04-02.png";
import kana0403 from "../../images/works/Kana/05-04-03.png";
import kana0601 from "../../images/works/Kana/05-06-01.png";
import kana0602 from "../../images/works/Kana/05-06-02.png";
import kana0603 from "../../images/works/Kana/05-06-03.png";
import HandWritingImage from "../../images/works/Kana/kana_munya-handwriting.png";
import OGPImage from "../../images/works/Kana/kana_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import WorkCaptionYoutube from "../../components/WorkCaptionYoutube";
import WorkCaptionCarousel from "../../components/WorkCaptionCarousel";

const {
  src,
  author,
  link,
  titleJP,
  titleEN,
  prevLink,
  prevImg,
  nextLink,
  nextImg,
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Kana");
const overViewCaptionJP = `生物は安定した状態となるよう重力などの物理法則の上で常に均衡を保つようにしており、例えばひとたび不安定な姿勢になると、様々な反応や動作を即座に行うことで安定した姿勢に戻ろうとします。この作品では、こうした安定と不安定な姿勢を行き来する際の反応・動作の中から生命感や愛おしさを感じるふるまいを抽出し、人工物に適用しました。ふるまいにより生まれる、生き物らしさにご注目ください。`;
const overViewCaptionEN = `Living creatures, tend to balance themselves against the surrounding force such as gravity, to maintain their stable position. For instance, if one became unstable due to external interference, it tries to recover its stable state by properly reacting with their limbs. In this project, we tried to extract the essence of bio-likeness and adorableness from the behavior oscillating its state between stable and unstable and implemented it to this artifact. You would be able to observe bio-likeness through the behavior of our prototype.`;
const overViewCreditJP = `制作：金山正貴、宗像佑弥
ディレクション：山中俊治`;
const overViewCreditEN = `Designer: Masaki Kanayama, Yuya Munakata
 Director: Shunji Yamanaka`;

const workCaptionTitle1JP = `考察と発想`;
const workCaptionTitle1EN = `Insights and ideas`;
const workCaptionMessage1JP = `研究を進めるにあたり不安定なモノについて考察したことや、実現にあたり描いたアイデアスケッチです。`;
const workCaptionMessage1EN = `This is a study of instable things in our research, and idea sketches drawn to realize it.`;

const workCaptionTitle2JP = `ビデオプロトタイプ`;
const workCaptionTitle2EN = `Video prototype`;
const workCaptionMessage2JP = `アイデアスケッチを元に、形状と動き方を簡易的なアニメーションで検討しました。`;
const workCaptionMessage2EN = `Video prototype to consider the form and motion, based on idea sketches.`;

const workCaptionTitle3JP = `プロトタイプ1`;
const workCaptionTitle3EN = `Prototype 1`;
const workCaptionMessage3JP = `地面に立った状態を想定した試作です。回転軸に支えがあるため不安定さがうまく引き出せませんでした。`;
const workCaptionMessage3EN = `First prototype representing "Standing state". We couldn’t express instability, because of the support acting as a rotation axle.`;

const workCaptionTitle4JP = `プロトタイプ2`;
const workCaptionTitle4EN = `Prototype 2`;
const workCaptionMessage4JP = `足元を玉乗りのような形状にすることで不安定さを強調し、腕の動きで頑張って元の状態に戻る様子を表現しました。`;
const workCaptionMessage4EN = `We built this prototype representing "Balancing-on-a ball" state. With its arm movement trying to balance itself, we have strongly expressed its instability.`;

const workCaptionTitle5JP = `強化学習の過程`;
const workCaptionTitle5EN = `Reinforcement learning process`;
const workCaptionMessage5JP = `腕の振り方を強化学習させることで、現実には起こりにくい不安定な動きの表現を試みました。`;
const workCaptionMessage5EN = `By reinforcement learning process how to swing its arms, we tried to make it perform physically impossible action.`;

const workCaptionTitle6JP = `プロトタイプ3`;
const workCaptionTitle6EN = `Prototype 3`;
const workCaptionMessage6JP = `強化学習を行った結果を反映したプロトタイプで、頂部を指でつつくとそれに反応してリアクションします。`;
const workCaptionMessage6EN = `The latest prototype updated with the results of the reinforcement learning process. Please try poking its head and watching how it reacts.
`;

const Kana: React.FC = () => {
  return (
    <>
      <OGPHead
        title={titleJP}
        type="article"
        description={overViewCaptionJP}
        keyword=""
        image={OGPImage}
        page={link}
      />
      <WrapperDiv>
        <MainDiv>
          <WorkOverViewDiv>
            <ChapterTitle>
              <BorderSpan>Overview</BorderSpan>
            </ChapterTitle>
            <WorkOverView
              titleJP={titleJP}
              titleEN={titleEN}
              captionJP={overViewCaptionJP}
              captionEN={overViewCaptionEN}
              creditJP={overViewCreditJP}
              creditEN={overViewCreditEN}
              imgSrc={src}
            />
          </WorkOverViewDiv>
          <ChapterTitle>
            <BorderSpan>Process</BorderSpan>
          </ChapterTitle>
          <WorkCaptionDiv>
            <WorkCaptionYoutube
              captionImage={"https://www.youtube.com/embed/7WoG9bZwbu0"}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionYoutube
              captionImage={"https://www.youtube.com/embed/9u5XmdjM_XE"}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[kana0301, kana0302, kana0303, kana0304]}
              captionTitleJP={workCaptionTitle3JP}
              captionTitleEN={workCaptionTitle3EN}
              captionMessageJP={workCaptionMessage3JP}
              captionMessageEN={workCaptionMessage3EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[kana0401, kana0402, kana0403]}
              captionTitleJP={workCaptionTitle4JP}
              captionTitleEN={workCaptionTitle4EN}
              captionMessageJP={workCaptionMessage4JP}
              captionMessageEN={workCaptionMessage4EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionYoutube
              captionImage={"https://www.youtube.com/embed/XI--qCDvohc"}
              captionTitleJP={workCaptionTitle5JP}
              captionTitleEN={workCaptionTitle5EN}
              captionMessageJP={workCaptionMessage5JP}
              captionMessageEN={workCaptionMessage5EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[kana0601, kana0602, kana0603]}
              captionTitleJP={workCaptionTitle6JP}
              captionTitleEN={workCaptionTitle6EN}
              captionMessageJP={workCaptionMessage6JP}
              captionMessageEN={workCaptionMessage6EN}
            />
          </WorkCaptionDiv>
        </MainDiv>
        <FootSpace
          src={HandWritingImage}
          prevImg={prevImg}
          link={link}
          prevLink={prevLink}
          author={author}
          nextLink={nextLink}
          nextImg={nextImg}
        />
      </WrapperDiv>
    </>
  );
};

export default Kana;

const WrapperDiv = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${texture});
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  width: 85%;
  height: auto;
  margin-top: 64px;
  margin-bottom: 64px;

  @media (min-width: 1000px) {
    min-width: 960px;
    max-width: 1400px;
  }
`;

const WorkOverViewDiv = styled.div`
  margin-bottom: 104px;
`;

const ChapterTitle = styled.h1`
  text-align: center;
  margin-bottom: 32px;
`;

const BorderSpan = styled.span`
  display: inline-block;
  height: 100%;
  border-bottom: 5px solid;
`;

const WorkCaptionDiv = styled.div`
  margin-bottom: 40px;
  @media (min-width: 1000px) {
    margin-bottom: 80px;
  }
`;
