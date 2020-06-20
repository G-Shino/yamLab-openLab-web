import React from "react";
import styled from "@emotion/styled";
import texture from "../../images/mdftexture.jpg";
import OGPHead from "../../components/OGPHead";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import WorkCaption from "../../components/WorkCaption";
import HandWritingImage from "../../images/works/Shinogu/shinogood_handwriting.png";

import shinogu0201 from "../../images/works/Shinogu/02-02-01.png";
import shinogu0202 from "../../images/works/Shinogu/02-02-02.png";
import shinogu0301 from "../../images/works/Shinogu/02-03-01.png";
import shinogu0302 from "../../images/works/Shinogu/02-03-02.png";
import shinogu0303 from "../../images/works/Shinogu/02-03-03.png";
import shinogu0304 from "../../images/works/Shinogu/02-03-04.png";
import shinogu0401 from "../../images/works/Shinogu/02-04-01.png";
import shinogu0402 from "../../images/works/Shinogu/02-04-02.png";
import shinogu0403 from "../../images/works/Shinogu/02-04-03.png";
import shinogu0501 from "../../images/works/Shinogu/02-05-01.png";
import shinogu0502 from "../../images/works/Shinogu/02-05-02.png";
import shinogu0503 from "../../images/works/Shinogu/02-05-03.png";
import shinogu0504 from "../../images/works/Shinogu/02-05-04.png";
import shinogu0601 from "../../images/works/Shinogu/02-06-01.png";
import shinogu0602 from "../../images/works/Shinogu/02-06-02.png";
import shinogu0603 from "../../images/works/Shinogu/02-06-03.png";
import shinogu0604 from "../../images/works/Shinogu/02-06-04.png";
import shinogu0701 from "../../images/works/Shinogu/02-07-01.png";

import OGPImage from "../../images/works/Shinogu/shinogu_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import WorkCaptionCarousel from "../../components/WorkCaptionCarousel";
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
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Shinogu");
const overViewCaptionJP = `水の動きに見入ってしまった経験はありますか？雄大にしぶきを上げ流れ落ちる滝も、繊細に静かに滴り落ちる水滴も、思わず鑑賞し続けたくなる魅力があります。そしてこの魅力は、水の持つ「不定形さ」によってもたらされるのではないかと考えました。この作品では、小さな塊となった色水が、ひとつひとつ、流路に沿って滑らかに進みます。それは規則的でありながらどこか不安定さを感じさせる、不思議に満ちた動きです。しなやかな水が生み出す優美さを是非ご覧ください。`;
const overViewCaptionEN = `There is some indescribable aesthetic inflow of water, ranging from breathtaking, giant waterfall to a single, tiny waterdrop. We thought what makes it such beautiful is the amorphous nature of liquid water. In this prototype, a tiny droplet of colored water travels through the channel smoothly, and calmly. It is well-regulated motion yet looks unstable in some respects. Please enjoy the elegance created by the sophisticated flow of the water.`;
const overViewCreditJP = `制作：山本 凌
ディレクション：山中俊治
協力：木下晴之、三澤 徹`;
const overViewCreditEN = `Designer: Shinogu Yamamoto
Director: Shunji Yamanaka
Collaborator: Haruyuki Kinoshita, Toru Misawa`;

const workCaptionTitle2JP = `プロトタイプ1`;
const workCaptionTitle2EN = `Prototype 1`;
const workCaptionMessage2JP = `初期に利用していたアクリル製流路と小型ポンプです。アクリル製流路は、厚み2mmの流路部が厚み5ｍｍの蓋と底に挟まれた三層構造になっています。いくつか問題点があったため、現在は使用しておりません。`;
const workCaptionMessage2EN = `Acrylic flow channel and mini pump for the first prototype. The prototype is made of 2mm thick acrylic board forming the channel part, sandwiched with 5mm thick board. Obsoleted version due to technical problems.`;

const workCaptionTitle4JP = `アクリル流路の検討1`;
const workCaptionTitle4EN = `Trial: Acrylic flow channel 1`;
const workCaptionMessage4JP = `水相と油相が向かい合わせに合流する形状になっており、安定したスラグ流の形成が行われませんでした。`;
const workCaptionMessage4EN = `This prototype has failed to generate a stable slug flow pattern. We assumed it results from the heads-on collision of each initial flow, due to the channel configuration.`;

const workCaptionTitle5JP = `アクリル流路の検討2`;
const workCaptionTitle5EN = `Trial: Acrylic flow channel 2`;
const workCaptionMessage5JP = `流路の合流形状の変更により、比較的安定したスラグ流の形成が確認できました。`;
const workCaptionMessage5EN = `On the next prototype, we have modified the channel configuration. We were able to observe relatively stable slug flow formation than before.`;

const workCaptionTitle6JP = `ガラス流路の検討`;
const workCaptionTitle6EN = `Glass flow channel`;
const workCaptionMessage6JP = `ガラスを用いるとアクリルよりも流体が付着しにくく、長時間安定してスラグ流が形成されることが確認できました。`;
const workCaptionMessage6EN = `We have replaced the material of the channel with glass. We confirmed that this can form stable slug flow for a longer period than those made of acrylics since glass is less likely to adhere to oil on its surface than acrylics.`;

const workCaptionTitle7JP = `使用する流体`;
const workCaptionTitle7EN = `2-phase fluid`;
const workCaptionMessage7JP = `水相には水を、油相には流動パラフィンを用いています。着色には絵具やキャンドル用染料を使用しました。`;
const workCaptionMessage7EN = `2-phase fluid for our work is composed of water and mineral oil. We have dyed each with watercolor and candle pigment.`;

const workCaptionTitle3JP = `プロトタイプ2`;
const workCaptionTitle3EN = `Prototype 2`;
const workCaptionMessage3JP = `立体的な構造での見た目を検討するために作成したプロトタイプです。脈動のない安定的な流体の供給を実現するため、シリンジポンプを利用しています。`;
const workCaptionMessage3EN = `Notice: Please watch this video while preparing the demonstration. We are sorry that the demonstration requires regular maintenance to function.`;

const workCaptionTitle1JP = `プロトタイプ映像`;
const workCaptionTitle1EN = `Prototype Movie`;
const workCaptionMessage1JP = `本作品は、「スラグ流」という現象を用いた作品です。本映像は、表現検討のために行った実験の映像になります。`;
const workCaptionMessage1EN = `Slug flow phenomenon is a major concept of this protype. This is the video demonstration that contains a brief explanation of the phenomenon and rough video prototype to review the expression.`;

const Shinogu: React.FC = () => {
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
              captionImages={[shinogu0201, shinogu0202]}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[shinogu0401, shinogu0402, shinogu0403]}
              captionTitleJP={workCaptionTitle4JP}
              captionTitleEN={workCaptionTitle4EN}
              captionMessageJP={workCaptionMessage4JP}
              captionMessageEN={workCaptionMessage4EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[
                shinogu0501,
                shinogu0502,
                shinogu0503,
                shinogu0504,
              ]}
              captionTitleJP={workCaptionTitle5JP}
              captionTitleEN={workCaptionTitle5EN}
              captionMessageJP={workCaptionMessage5JP}
              captionMessageEN={workCaptionMessage5EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[
                shinogu0601,
                shinogu0602,
                shinogu0603,
                shinogu0604,
              ]}
              captionTitleJP={workCaptionTitle6JP}
              captionTitleEN={workCaptionTitle6EN}
              captionMessageJP={workCaptionMessage6JP}
              captionMessageEN={workCaptionMessage6EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={shinogu0701}
              captionTitleJP={workCaptionTitle7JP}
              captionTitleEN={workCaptionTitle7EN}
              captionMessageJP={workCaptionMessage7JP}
              captionMessageEN={workCaptionMessage7EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[
                shinogu0301,
                shinogu0302,
                shinogu0303,
                shinogu0304,
              ]}
              captionTitleJP={workCaptionTitle3JP}
              captionTitleEN={workCaptionTitle3EN}
              captionMessageJP={workCaptionMessage3JP}
              captionMessageEN={workCaptionMessage3EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionYoutube
              captionImage={"https://www.youtube.com/embed/ihsDc9Mm9is"}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
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

export default Shinogu;

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
