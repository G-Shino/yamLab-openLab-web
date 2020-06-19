import React from "react";
import styled from "@emotion/styled";
import OGPHead from "../../components/OGPHead";
import texture from "../../images/mdftexture.jpg";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import HandWritingImage from "../../images/works/Oga/oga_handwriting.png";

import oga0101 from "../../images/works/Oga/01-01-01.png";
import oga0102 from "../../images/works/Oga/01-01-02.png";
import oga0103 from "../../images/works/Oga/01-01-03.png";
import oga0104 from "../../images/works/Oga/01-01-04.png";
import oga0201 from "../../images/works/Oga/01-02-01.png";
import oga0202 from "../../images/works/Oga/01-02-02.png";
import oga0203 from "../../images/works/Oga/01-02-03.png";
import oga0204 from "../../images/works/Oga/01-02-04.png";
import oga0301 from "../../images/works/Oga/01-03-01.png";
import oga0302 from "../../images/works/Oga/01-03-02.png";
import oga0303 from "../../images/works/Oga/01-03-03.png";
import oga0304 from "../../images/works/Oga/01-03-04.png";
import oga0305 from "../../images/works/Oga/01-03-05.png";
import oga0306 from "../../images/works/Oga/01-03-06.png";
import oga0307 from "../../images/works/Oga/01-03-07.png";
import oga0401 from "../../images/works/Oga/01-04-01.png";
import oga0402 from "../../images/works/Oga/01-04-02.png";
import oga0403 from "../../images/works/Oga/01-04-03.png";

import OGPImage from "../../images/works/Oga/oga_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import WorkCaptionCarousel from "../../components/WorkCaptionCarousel";
import WorkCaptionCarouselImgOnly from "../../components/WorkCaptionCarouselImgOnly";
import WorkCaptionCarouselYoutube from "../../components/WorkCaptionYoutubeCarousel";

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
const overViewCaptionJP = `人にはそれぞれ、少しずつ違う手の大きさがあります。しかし、従来の義手やロボットハンドは大きさが段階的で、必ずしもあなたの欲しい手の大きさではないかもしれません。そこで私は、細かなサイズ調整を簡単に行える『Scalable hand』を制作しました。本来は硬いナイロン樹脂から形状を工夫することで、シリコンのように柔らかい指先・バネのような反発性のある関節を再現。これらの部品を3Dプリンタを用いて一度に造形することで組み立てにネジを使う必要がなく、3Dモデルを拡大・縮小するだけでサイズ調整が可能となります。`;
const overViewCaptionEN = `There are many sizes of hand depending on people. However, the size of current humanoid hands are still limited and may not be a perfect size for each individual.  This scalable hand is a non-assembled robot hand that is created using PBF (Powder Bed Fusion) a type of 3D-printer. The changes of the size can be made limitlessly.  Nylon, the material used here is normally stiff. But, by devising its geometric shape, it can be very soft and supple. `;
const overViewCreditJP = `制作：小笠原佑樹
ディレクション：山中俊治`;
const overViewCreditEN = `Designer: Yuki Ogasawara
Director: Shunji Yamanaka`;

const workCaptionTitle1JP = `一体成型関節の試作`;
const workCaptionTitle1EN = `A prototype of unibody joint`;
const workCaptionMessage1JP = `最初期に試作した回転一自由度の一体成型関節です。内部のゼンマイばねの厚みを少しずつ変えています。`;
const workCaptionMessage1EN = `The first prototype, multiple unibody joints with a single degree of freedom. Each of them has a spiral spring with various thicknesses.`;

const workCaptionTitle2JP = ``;
const workCaptionTitle2EN = `Scalable hand (Ver.1.0)`;
const workCaptionMessage2JP = `二指ハンドの構造として一般的な四節リンク構造の内部にゼンマイばねを組み込みました。`;
const workCaptionMessage2EN = `A model with the 4-link mechanism, typical for the 2-fingered manipulator, along with spiral spring for joint elasticity.`;

const workCaptionTitle3JP = ``;
const workCaptionTitle3EN = `Scalable hand (Ver.2.0)`;
const workCaptionMessage3JP = `取手を引くだけで物体を包み込むように掴んでくれる構造を採用した初期モデルです。指の腹に弾性構造を付与することで、柔らかい指先を再現しました。このモデルでは、輪ゴムで指関節の復元力を与えています。`;
const workCaptionMessage3EN = `The model with the mechanism, which can grab the object gently with a single pull of the lever. Fingertip with the soft surface has been achieved, by applying the compliant structure on it. In this model, rubber bands are used to function as the antagonist.`;

const workCaptionTitle4JP = ``;
const workCaptionTitle4EN = `Scalable hand (Ver.2.1)`;
const workCaptionMessage4JP = `前モデルにてゴムで与えていた復元力をゼンマイばねで代替。取手部分にもコイルばねを追加することで指が常に開くようになり、能動義手など牽引方向にしか力をかけられないものにも応用可能になりました。`;
const workCaptionMessage4EN = `The rubber band joint part is replaced by a spiral spring joint mechanism. For the benefit of spring added around the lever acting as an antagonist, it could be applied to active prosthesis hand, which only provides a tensile force for actuation.`;

const Oga: React.FC = () => {
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
              captionImages={[oga0101, oga0102, oga0103, oga0104]}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[oga0201, oga0202, oga0203, oga0204]}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarouselImgOnly
              captionImages={[
                oga0301,
                oga0302,
                oga0303,
                oga0304,
                oga0305,
                oga0306,
                oga0307,
              ]}
            />
            <WorkCaptionCarouselYoutube
              captionImages={[
                "https://www.youtube.com/embed/xEYkd0KqGNo",
                "https://www.youtube.com/embed/HkHoCw7BWyw",
                "https://www.youtube.com/embed/Lhi__BrFwqk",
                "https://www.youtube.com/embed/zCjqANIKhXE",
              ]}
              captionTitleJP={workCaptionTitle3JP}
              captionTitleEN={workCaptionTitle3EN}
              captionMessageJP={workCaptionMessage3JP}
              captionMessageEN={workCaptionMessage3EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[oga0401, oga0402, oga0403]}
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

export default Oga;

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
