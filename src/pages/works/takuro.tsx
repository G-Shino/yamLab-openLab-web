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
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Takuro");
const overViewCaptionJP = `柔らかい素材やダンパーを用いずに柔らかさを表現することを試みる中で、この作品は生まれました。動力を使わず、ヤジロベエが複数連なった構造だけで生み出されるふるまいは、モーメントが釣り合っていれば、どのような硬さや比重の素材でも同じ柔らかい動きを示します。 硬いけど柔らかい、そんな不思議なふるまいをご体験ください。`;
const overViewCaptionEN = `This project is motivated by realizing the soft, flexible expression of an object’s property without involving elastic or damping material. The movement of the structure created by a series of Yajirobei(Japanese traditional balance toy), consistently expresses soft-looking animation regardless of the mechanical property of its component. Please enjoy the mysterious, both soft and rigid behavior of our prototype.`;

const workCaptionTitle1JP = `従来の陸上競技用義足`;
const workCaptionTitle1EN = `Conventional socket for track-and-field`;
const workCaptionMessage1JP = `義肢装具士によって作成されていた従来の義足ソケットは、切断部の採型および型修正されたものにカーボンを張り合わせることで制作され、切断部の形が如実に現れてしまいます。`;
const workCaptionMessage1EN = `It is likely to expose the shape of an amputee, when it comes to the conventional prosthesis socket. It is made by plastering the amputee and covering the mold with CFRP.`;

const workCaptionTitle2JP = `チェックソケット`;
const workCaptionTitle2EN = `Checking socket`;
const workCaptionMessage2JP = `3Dプリンタは従来の製造技術に比べて、造形時の形状の誤差が大きい欠点があります。そのため、設計初期に義足ソケットの内面の適合を確かめるためのチェックソケットを制作しました。`;
const workCaptionMessage2EN = `Since the geometric error of the 3D printer is usually more significant than traditional manufacturing technologies, we made this socket beforehand to test if the error is tolerable.`;

const workCaptionTitle3JP = `重心位置の設計`;
const workCaptionTitle3EN = `Design of the socket's center of mass`;
const workCaptionMessage3JP = `走り高跳びにおける義足ソケットの影響として重心位置に注目し、その評価を行うための義足ソケットを設計しました。おもりを付け替えることで、重心位置を任意の位置に変更できます。`;
const workCaptionMessage3EN = `We focused on the effect of the weight distribution of prosthesis on the high jump and designed this socket to examine the effect quantitatively. By changing the weights, the position of the center of gravity can be changed to any position.`;

const workCaptionTitle4JP = `荷重負荷試験の様子`;
const workCaptionTitle4EN = `Load test`;
const workCaptionMessage4JP = `被験者の安全確保のため、走行試験に入る前に義足ソケットの強度試験を行いました。走行時の負荷を想定した荷重を義足ソケットに加え、その変形量および耐荷重を測定しました。`;
const workCaptionMessage4EN = `To guarantee the safety of the prosthesis before the field test, we have conducted the load test and examined the deformation and maximum load capability of it.`;

const workCaptionTitle5JP = ``;
const workCaptionTitle5EN = `Rami S`;
const workCaptionMessage5JP = `走り高跳び用下腿義足 Rami S ver.1。現在、走行試験に移行し、選手に合わせた調整を行っています。`;
const workCaptionMessage5EN = `Rami S, a below-knee prosthesis for the high jump. We are planning to design the next model, based on the opinions gathered from the athletes.`;

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
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={Caption2Image}
              captionTitleJP={workCaptionTitle5JP}
              captionTitleEN={workCaptionTitle5EN}
              captionMessageJP={workCaptionMessage5JP}
              captionMessageEN={workCaptionMessage5EN}
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
