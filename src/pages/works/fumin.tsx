import React from "react";
import styled from "@emotion/styled";
import texture from "../../images/mdftexture.jpg";
import OGPHead from "../../components/OGPHead";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import WorkCaptionCarouselImgOnly from "../../components/WorkCaptionCarouselImgOnly";
import WorksCaptionYoutube from "../../components/WorkCaptionYoutube";
import WorkCaptionCarousel from "../../components/WorkCaptionCarousel";
import HandWritingImage from "../../images/works/Fu-min/fu-min_handwriting.png";
import OGPImage from "../../images/works/Fu-min/fu-min_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import fumin0101 from "../../images/works/Fu-min/06-01-01.png";
import fumin0102 from "../../images/works/Fu-min/06-01-02.png";
import fumin0103 from "../../images/works/Fu-min/06-01-03.png";
import fumin0104 from "../../images/works/Fu-min/06-01-04.png";
import fumin0201 from "../../images/works/Fu-min/06-02-01.png";
import fumin0202 from "../../images/works/Fu-min/06-02-02.png";
import fumin0203 from "../../images/works/Fu-min/06-02-03.png";
import fumin0301 from "../../images/works/Fu-min/06-03-01.png";
import fumin0302 from "../../images/works/Fu-min/06-03-02.png";
import fumin0401 from "../../images/works/Fu-min/06-04-01.png";
import fumin0402 from "../../images/works/Fu-min/06-04-02.png";
import fumin0403 from "../../images/works/Fu-min/06-04-03.png";
import fumin0501 from "../../images/works/Fu-min/06-05-01.png";
import fumin0502 from "../../images/works/Fu-min/06-05-02.png";
import fumin0503 from "../../images/works/Fu-min/06-05-03.png";
import fumin0504 from "../../images/works/Fu-min/06-05-04.png";
import fumin0601 from "../../images/works/Fu-min/06-06-01.png";
import fumin0602 from "../../images/works/Fu-min/06-06-02.png";
import fumin0603 from "../../images/works/Fu-min/06-06-03.png";
import fumin0604 from "../../images/works/Fu-min/06-06-04.png";

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
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Fumin");
const overViewCaptionJP = `ヴァイオリンを弾くときには一般的に顎当てと肩当てが使われますが、長時間演奏していると首元にあざができ、痛みを生じることがあります。また顎当て・肩当ては、身体と楽器が唯一つながる部分であり、身体から出る曲への想いを楽器に十分に伝えることが求められます。この作品では、演奏時の痛みを減らすとともに心地よく演奏できることを目指しました。演奏者の身体を3Dスキャンし身体にフィットした形状を作成、そして曲げ木の弾性を利用することで顎・肩当ての美しい一体構造を実現しました。`;
const overViewCaptionEN = `This project is motivated by realizing the soft, flexible expression of an object’s property without involving elastic or damping material. The movement of the structure created by a series of Yajirobei(Japanese traditional balance toy), consistently expresses soft-looking animation regardless of the mechanical property of its component. Please enjoy the mysterious, both soft and rigid behavior of our prototype.`;
const overViewCreditJP = `制作：髙田ふみ
ディレクション：安次富 隆、山中俊治`;
const overViewCreditEN = `Designer: Fumi Takata
Director: Takashi Ashitomi, Shunji Yamanaka`;

const workCaptionTitle1JP = `従来の顎当てと肩当て`;
const workCaptionTitle1EN = `Traditional chinrest and shoulder rest`;
const workCaptionMessage1JP = `ヴァイオリンには、顎当て・肩当てというパーツが付いています。多くの演奏者が使用していますが、痛みを伴うあざや褥瘡、金属アレルギーを引き起こすことがあり、それらを解決したいと考えました。`;
const workCaptionMessage1EN = `Chinrest and shoulder rest are often mounted on the violin, in order to relieve pain while performing. However, since traditional ones are not fitted to individuals, it may still cause bruises or bedsores, and sometimes metallic allergy by its metal parts. Our motivation is to design a product to solve such problems.`;

const workCaptionTitle2JP = `形の試作`;
const workCaptionTitle2EN = `Trial: shape`;
const workCaptionMessage2JP = `石膏で顎の型を取り、スタイロフォームとABSを削りながら、痛みを生じない美しい形状を模索しました。`;
const workCaptionMessage2EN = `By plastering chin and sculpting styrofoam/ABS, We tried to figure out an ergonomic, yet aesthetic form of the chinrest.`;

const workCaptionTitle3JP = `構造の試作1`;
const workCaptionTitle3EN = `Trial: structure 1`;
const workCaptionMessage3JP = `構造を工夫して弾性素材を3Dプリントすることで、顎当ての痛みを減らす形状を模索しました。`;
const workCaptionMessage3EN = `We also tried to apply stress-relieving soft structure to the chinrest, formed by a 3D printed elastic material.`;

const workCaptionTitle4JP = `構造の試作2`;
const workCaptionTitle4EN = `Trial: structure 2`;
const workCaptionMessage4JP = `檜を素材として用いることで肌との親和性を高めつつ、曲げ木することで適度な弾性が得られるようにしました。`;
const workCaptionMessage4EN = `By bending a piece of Japanese cypress, we tried to make our chin and shoulder rest has both elastic and biocompatible property.`;

const workCaptionTitle5JP = `ジョイントパーツの試作`;
const workCaptionTitle5EN = `Joint parts`;
const workCaptionMessage5JP = `ヴァイオリンと身体の距離が離れ、楽器を構えた際に不安定になってしまいました。改善のため楽器と顎・肩当てを繋ぐジョイントパーツを試作し、フック型のジョイントを用いることで安定させることができました。`;
const workCaptionMessage5EN = `The latest version of our chin and shoulder rest had a problem, that it separates our body from the violin too much, which causes instability while performing. We tried to solve this problem by redesigning a joint part that fixes the chin and shoulder rest to the violin. Among our prototypes, hook type was the most stable solution.`;

const workCaptionTitle6JP = `パッケージ`;
const workCaptionTitle6EN = `Package`;
const workCaptionMessage6JP = `顎・肩当てを自分で微調整したいという演奏者の意見から、自由に切り貼りし、緩衝材や滑り止めとして使用できるラバーのキットを制作。取り扱い説明書も同封し、身体の変化に合わせた微調整を可能にしました。`;
const workCaptionMessage6EN = `There were requests from our targeting customer, that they would like the chin and shoulder rest to be adjustable. To answer those, we included the rubber kit which can be cut and pasted easily, to perform as a cushion and non-slip tape. We also included the instruction manual to assist users to fit their chin and shoulder rest to themselves.`;

const Fumin: React.FC = () => {
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
            <WorkCaptionCarousel
              captionImages={[fumin0101, fumin0102, fumin0103, fumin0104]}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[fumin0201, fumin0202, fumin0203]}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[fumin0301, fumin0302]}
              captionTitleJP={workCaptionTitle3JP}
              captionTitleEN={workCaptionTitle3EN}
              captionMessageJP={workCaptionMessage3JP}
              captionMessageEN={workCaptionMessage3EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[fumin0401, fumin0402, fumin0403]}
              captionTitleJP={workCaptionTitle4JP}
              captionTitleEN={workCaptionTitle4EN}
              captionMessageJP={workCaptionMessage4JP}
              captionMessageEN={workCaptionMessage4EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[fumin0501, fumin0502, fumin0503, fumin0504]}
              captionTitleJP={workCaptionTitle5JP}
              captionTitleEN={workCaptionTitle5EN}
              captionMessageJP={workCaptionMessage5JP}
              captionMessageEN={workCaptionMessage5EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarouselImgOnly
              captionImages={[fumin0601, fumin0602, fumin0603, fumin0604]}
            />
            <WorksCaptionYoutube
              captionImage={"https://www.youtube.com/embed/oKKxsPIA680"}
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
          prevLink={prevLink}
          link={link}
          author={author}
          nextLink={nextLink}
          nextImg={nextImg}
        />
      </WrapperDiv>
    </>
  );
};

export default Fumin;

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
