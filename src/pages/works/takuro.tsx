import React from "react";
import styled from "@emotion/styled";
import texture from "../../images/mdftexture.jpg";
import OGPHead from "../../components/OGPHead";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import HandWritingImage from "../../images/works/Takuro/takuro_handwriting.png";
import OGPImage from "../../images/works/Takuro/takuro_ogp.png";

import takuro0101 from "../../images/works/Takuro/07-01-01.png";
import takuro0103 from "../../images/works/Takuro/07-01-03.png";
import takuro0104 from "../../images/works/Takuro/07-01-04.png";
import takuro0201 from "../../images/works/Takuro/07-02-01.png";
import takuro0202 from "../../images/works/Takuro/07-02-02.png";
import takuro0301 from "../../images/works/Takuro/07-03-01.png";
import takuro0302 from "../../images/works/Takuro/07-03-02.png";
import takuro0303 from "../../images/works/Takuro/07-03-03.png";
import takuro0304 from "../../images/works/Takuro/07-03-04.png";
import takuro0305 from "../../images/works/Takuro/07-03-05.png";
import takuro0501 from "../../images/works/Takuro/07-05-01.png";
import takuro0502 from "../../images/works/Takuro/07-05-02.png";
import takuro0503 from "../../images/works/Takuro/07-05-03.png";

import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";

import dynamic from "next/dynamic";
const WorkCaptionCarousel = dynamic(
  import("../../components/WorkCaptionCarousel"),
  {
    ssr: false,
  }
);
import WorkCaptionYoutube from "../../components/WorkCaptionYoutube";

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
const overViewCaptionJP = `『Rami』は3Dプリンティングならではの立体構造となめらかな曲面を持つ、陸上競技用下腿義足です。機能的で美しいスポーツ用義足を、多くの人に届けるシステムを作るために研究開発しています。最初のマイルストーンとして、パラ短距離・走り幅跳び選手である高桑早生さんのための義足『Rami』を開発。そしてプロジェクトの次の段階としてユーザー数の増加と競技種目の拡大を目指し、走り高跳び選手のための義足『Rami S』を開発しました。`;
const overViewCaptionEN = `"Rami" is a 3D printed below-knee prosthesis designed for track-and-field, which has 3D-print exclusive, smooth and curvaceous geometry. Our goal in this project is to design a system to deliver beautiful and properly engineered sport-purposed prosthesis to more people in need. As a first milestone, we designed a prosthesis for Saki Takakuwa: former Japanese national player for Rio and London Paralympics. And by using design scheme achieved by it, we were able to develop a prosthesis "Rami S" for high jump. It is one small leap for the mass-customization of beautiful prosthesis.`;
const overViewCreditJP = `制作：山中俊治、阪本 真、杉本拓郎
協力：公益財団法人鉄道弘済会義肢装具サポートセンター、鈴木 徹、
株式会社今仙技術研究所、ミズノ株式会社`;
const overViewCreditEN = `Designer: Shunji Yamanaka, Shin Sakamoto, Takuro Sugimoto
Collaborator: Tetsudo Kousaikai Foundation Prosthetic and Orthotic Care Center, Toru Suzuki, Imasen Engineering Corporation, Mizuno Corporation`;

const workCaptionTitle1JP = `従来の陸上競技用義足`;
const workCaptionTitle1EN = `Conventional socket for track-and-field`;
const workCaptionMessage1JP = `従来の義足ソケットは義肢装具士の手仕事によって制作されており、大量生産が困難であることや、義足ソケットに切断部の形が如実に現れてしまい、痛々しさを感じさせてしまうなどの課題がありました。`;
const workCaptionMessage1EN = `Conventional prosthetic foot sockets were made by hand by prostheticists, and they were difficult to mass-produce, and the shape of the amputation on the sockets made them seem painful to look at.`;

const workCaptionTitle2JP = `チェックソケット`;
const workCaptionTitle2EN = `Checking socket`;
const workCaptionMessage2JP = `3Dプリンタは従来の製造技術に比べてオーダーメイド品を作りやすい反面、造形時の形状誤差が大きい欠点があります。そのため、設計初期に義足ソケットの内面の適合を確かめるためのチェックソケットを制作しました。`;
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

const Takuro: React.FC = () => {
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
              captionImages={[takuro0101, takuro0103, takuro0104]}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[takuro0201, takuro0202]}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[
                takuro0301,
                takuro0302,
                takuro0303,
                takuro0304,
                takuro0305,
              ]}
              captionTitleJP={workCaptionTitle3JP}
              captionTitleEN={workCaptionTitle3EN}
              captionMessageJP={workCaptionMessage3JP}
              captionMessageEN={workCaptionMessage3EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionYoutube
              captionImage={"https://www.youtube.com/embed/2c_vL9pehdA"}
              captionTitleJP={workCaptionTitle4JP}
              captionTitleEN={workCaptionTitle4EN}
              captionMessageJP={workCaptionMessage4JP}
              captionMessageEN={workCaptionMessage4EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[takuro0501, takuro0502, takuro0503]}
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

export default Takuro;

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
