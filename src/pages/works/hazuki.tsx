import React from "react";
import styled from "@emotion/styled";
import texture from "../../images/mdftexture200608v2.jpg";
import OGPHead from "../../components/OGPHead";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import WorkCaption from "../../components/WorkCaption";
import Caption1Image from "../../images/works/Uena/caption1.png";
import Caption2Image from "../../images/works/Uena/caption2.png";
import Caption3Image from "../../images/works/Uena/caption3.png";
import HandWritingImage from "../../images/works/Uena/handwriting.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";

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
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Hazuki");
const overViewCaptionJP = `無意識のバイアスに気づくことは、簡単ではありません。生まれ育った環境や文化を通して、積み重なる学習によって根付いたものです。性別へのバイアスによって様々な可能性が阻まれている現状に対し、Co-Speculative Desginと言う理論を取り入れ、固定概念を覆し、内省を促すワークショップを設計しました。ワークショップ内では、起こりうる未来を想定しながらペルソナを作る過程でバイアスが露呈される仕掛けを用意し、参加者同士が対話することでバイアスに対する新たな問題への気づきを促しました。`;
const overViewCaptionEN = `It is quite difficult to realize our unconscious bias. It develops in our subconsciousness, while we live through our own culture and environment. We designed a workshop to discover and self-examine our inner gender bias, by introducing co-speculative design theory. In this workshop, we designed to expose an individual's bias while each participant build persona simulating close future of themselves. And by each participant's conversation, we were able to make them perceive some new problems about bias.`;
const overViewCreditJP = `制作：三好葉月
ディレクション：山中俊治`;
const overViewCreditEN = `Designer: Hazuki Miyoshi
Director: Shunji Yamanaka`;

const workCaptionTitle1JP = `着地動作に着目`;
const workCaptionTitle1EN = `Landing process`;
const workCaptionMessage1JP = `受動的かつしなやかに力を受け流す着地は、生き物らしさがよく現れている挙動であると考えました。`;
const workCaptionMessage1EN = `We thought that the landing process which distributes the shock smoothly and passively well represents the bio-likeness.`;

const workCaptionTitle2JP = `着地する足の構造`;
const workCaptionTitle2EN = `Leg structure`;
const workCaptionMessage2JP = `着地時の屈伸運動のみで生き物らしさを表現するため、その他の部分では生き物らしさを除きました。最も安定する三本足かつ一ヶ所のダンパーのみで全体の屈伸を制御できる構造です。`;
const workCaptionMessage2EN = `To express its bio-likeness with only its leg-bending motion during its landing process, we intended to make the other part of our prototype to be the opposite of it. As a result, we came up with this prototype, which has only three legs and a single damping component controlling the entire landing process.`;

const Uena: React.FC = () => {
  return (
    <>
      <OGPHead
        title={titleJP}
        type="article"
        description={overViewCaptionJP}
        keyword=""
        image={src}
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
              imgSrc={src}
              creditJP={overViewCreditJP}
              creditEN={overViewCreditEN}
            />
          </WorkOverViewDiv>
          <ChapterTitle>
            <BorderSpan>Process</BorderSpan>
          </ChapterTitle>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={Caption1Image}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={Caption2Image}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={Caption3Image}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
        </MainDiv>
        <FootSpace
          src={HandWritingImage}
          prevImg={prevImg}
          prevLink={prevLink}
          author={author}
          link={link}
          nextLink={nextLink}
          nextImg={nextImg}
        />
      </WrapperDiv>
    </>
  );
};

export default Uena;

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
