import React from "react";
import styled from "@emotion/styled";
import OGPHead from "../../components/OGPHead";
import texture from "../../images/mdftexture200608v2.jpg";
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
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Oga");
const overViewCaptionJP = `柔らかい素材やダンパーを用いずに柔らかさを表現することを試みる中で、この作品は生まれました。動力を使わず、ヤジロベエが複数連なった構造だけで生み出されるふるまいは、モーメントが釣り合っていれば、どのような硬さや比重の素材でも同じ柔らかい動きを示します。 硬いけど柔らかい、そんな不思議なふるまいをご体験ください。`;
const overViewCaptionEN = `This project is motivated by realizing the soft, flexible expression of an object’s property without involving elastic or damping material. The movement of the structure created by a series of Yajirobei(Japanese traditional balance toy), consistently expresses soft-looking animation regardless of the mechanical property of its component. Please enjoy the mysterious, both soft and rigid behavior of our prototype.`;

const workCaptionTitle1JP = `一体成型関節の試作`;
const workCaptionTitle1EN = `A prototype of unibody joint`;
const workCaptionMessage1JP = `最初期に試作した回転一自由度の一体成型関節です。内部のゼンマイばねの厚みを少しずつ変えています。`;
const workCaptionMessage1EN = `The first prototype, multiple unibody joints with a single degree of freedom. Each of them has a spiral spring with various thicknesses.`;

const workCaptionTitle2JP = ``;
const workCaptionTitle2EN = `Scalable hand (Ver.1.0）`;
const workCaptionMessage2JP = `二指ハンドの構造として一般的な四節リンク構造の内部にゼンマイばねを組み込みました。`;
const workCaptionMessage2EN = `A model with the 4-link mechanism, typical for the 2-fingered manipulator, along with spiral spring for joint elasticity.`;

const workCaptionTitle3JP = ``;
const workCaptionTitle3EN = `Scalable hand (Ver.2.0）`;
const workCaptionMessage3JP = `取手を引くだけで物体を包み込むように掴んでくれる構造を採用した初期モデルです。指の腹に弾性構造を付与することで、柔らかい指先を再現しました。このモデルでは、輪ゴムで指関節の復元力を与えています。`;
const workCaptionMessage3EN = `The model with the mechanism, which can grab the object gently with a single pull of the lever. Fingertip with the soft surface has been achieved, by applying the compliant structure on it. In this model, rubber bands are used to function as the antagonist.`;

const workCaptionTitle4JP = ``;
const workCaptionTitle4EN = `Scalable hand (Ver.2.1）`;
const workCaptionMessage4JP = `前モデルにてゴムで与えていた復元力をゼンマイばねで代替。取手部分にもコイルばねを追加することで指が常に開くようになり、能動義手など牽引方向にしか力をかけられないものにも応用可能になりました。`;
const workCaptionMessage4EN = `The rubber band joint part is replaced by a spiral spring joint mechanism. For the benefit of spring added around the lever acting as an antagonist, it could be applied to active prosthesis hand, which only provides a tensile force for actuation.`;

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
              captionImage={Caption3Image}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={Caption2Image}
              captionTitleJP={workCaptionTitle3JP}
              captionTitleEN={workCaptionTitle3EN}
              captionMessageJP={workCaptionMessage3JP}
              captionMessageEN={workCaptionMessage3EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={Caption2Image}
              captionTitleJP={workCaptionTitle4JP}
              captionTitleEN={workCaptionTitle4EN}
              captionMessageJP={workCaptionMessage4JP}
              captionMessageEN={workCaptionMessage4EN}
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
