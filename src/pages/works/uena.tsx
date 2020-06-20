import React from "react";
import styled from "@emotion/styled";
import texture from "../../images/mdftexture.jpg";
import OGPHead from "../../components/OGPHead";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import WorkCaptionYoutubeCarousel from "../../components/WorkCaptionYoutubeCarousel";
import HandWritingImage from "../../images/works/Uena/uena_handwriting.png";
import OGPImage from "../../images/works/Uena/uena_ogp.png";

import uena0301 from "../../images/works/Uena/04-03-01.png";
import uena0302 from "../../images/works/Uena/04-03-02.png";

import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import WorkCaptionYoutube from "../../components/WorkCaptionYoutube";
import WorkCaptionCarouselImgOnly from "../../components/WorkCaptionCarouselImgOnly";

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
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Uena");
const overViewCaptionJP = `柔らかい素材やダンパーを用いずに柔らかさを表現することを試みる中で、この作品は生まれました。動力を使わず、ヤジロベエが複数連なった構造だけで生み出されるふるまいは、モーメントが釣り合っていれば、どのような硬さや比重の素材でも同じ柔らかい動きを示します。 硬いけど柔らかい、そんな不思議なふるまいをご体験ください。`;
const overViewCreditJP = `制作：上岡直樹
ディレクション：山中俊治`;
const overViewCaptionEN = `This project is motivated by realizing the soft, flexible expression of an object’s property without involving elastic or damping material. The movement of the structure created by a series of Yajirobei(Japanese traditional balance toy), consistently expresses soft-looking animation regardless of the mechanical property of its component. Please enjoy the mysterious, both soft and rigid behavior of our prototype.`;
const overViewCreditEN = `Designer: Naoki Ueoka
Director: Shunji Yamanaka`;

const workCaptionTitle1JP = `着地動作に着目`;
const workCaptionTitle1EN = `Landing process`;
const workCaptionMessage1JP = `受動的かつしなやかに力を受け流す着地は、生き物らしさがよく現れている挙動であると考えました。`;
const workCaptionMessage1EN = `We thought that the landing process which distributes the shock smoothly and passively well represents the bio-likeness.`;

const workCaptionTitle2JP = `着地する足の構造`;
const workCaptionTitle2EN = `Leg structure`;
const workCaptionMessage2JP = `着地時の屈伸運動のみで生き物らしさを表現するため、その他の部分では生き物らしさを除きました。最も安定する三本足かつ一ヶ所のダンパーのみで全体の屈伸を制御できる構造です。`;
const workCaptionMessage2EN = `To express its bio-likeness with only its leg-bending motion during its landing process, we intended to make the other part of our prototype to be the opposite of it. As a result, we came up with this prototype, which has only three legs and a single damping component controlling the entire landing process.`;

const workCaptionTitle3JP = `ゆらゆら`;
const workCaptionTitle3EN = `solid swing`;
const workCaptionMessage3JP = `着地というしなやかな動きを、生物の模倣とは異なるアプローチで再現しようとしました。素材の柔らかさを用いず、新しい機構のダンパーを試作していた過程で生まれたものがこの機構になります。`;
const workCaptionMessage3EN = `We tried to recreate the flexibility of the landing motion with a different approach than imitating living organisms. This mechanism was born out of the process of prototyping a new type of damper without using the softness of the material.`;
const Uena: React.FC = () => {
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
              captionImage={"https://www.youtube.com/embed/uV4uMk2rvJg"}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionYoutubeCarousel
              captionImages={[
                "https://www.youtube.com/embed/KQlnPpaEH1c",
                "https://www.youtube.com/embed/VYwwWftebRo",
                "https://www.youtube.com/embed/o7o0t-S7_MA",
              ]}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarouselImgOnly captionImages={[uena0301, uena0302]} />
            <WorkCaptionYoutubeCarousel
              captionImages={[
                "https://www.youtube.com/embed/TL-H9QozGec",
                "https://www.youtube.com/embed/2TuRATVRZc4",
              ]}
              captionTitleJP={workCaptionTitle3JP}
              captionTitleEN={workCaptionTitle3EN}
              captionMessageJP={workCaptionMessage3JP}
              captionMessageEN={workCaptionMessage3EN}
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
