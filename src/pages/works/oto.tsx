import React from "react";
import styled from "@emotion/styled";
import texture from "../../images/mdftexture200608v2.jpg";
import OGPHead from "../../components/OGPHead";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import WorkCaptionYoutubeCarousel from "../../components/WorkCaptionYoutubeCarousel";
import Image1_1 from "../../images/works/Oto/08-01-01.png";
import Image1_2 from "../../images/works/Oto/08-01-02.png";
import HandWritingImage from "../../images/works/Oto/oto-handwriting.png";
import OGPImage from "../../images/works/Oto/oto_ogp.png";
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
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Oto");
const overViewCaptionJP = `人に使用されていない間には何も機能を果たしていない人工物が多く存在します。そんな人工物に生物らしい動きを与えることで注意や愛着を増やすことを目標にした”道具の暇”プロジェクトの二作品です。`;
const overViewCaptionEN = `There are many artifacts that perform no function while not being used by humans. These two prototypes are the "Tool's Leisure Time" project that aims to increase attention and attachment by giving such artifacts a bio-like movement.`;
const overViewCreditJP = `制作：川又 音
ディレクション：山中俊治
制作協力：上岡直樹、長谷川彰宏、秋元海人、柳沢竜三`;
const overViewCreditEN = `Designer: Oto Kawamata
Director: Shunji Yamanaka
Assistant: Naoki Ueoka, Akihiro Hasegawa, 
Kaito Akimoto, Ryuzo Yanagisawa
`;

const workCaptionTitle1JP = `『道具の暇』のストーリー`;
const workCaptionTitle1EN = `Story`;
const workCaptionMessage1JP = `人に使用されていない間には何も機能を果たしていない人工物が多く存在します。そんな人工物に生物らしい動きを与えることで注意や愛着を増やすことを目標にしました。`;
const workCaptionMessage1EN = `There are many artifacts that perform no function while not being used by humans. The "Tool's Leisure Time" project aims to increase attention and attachment by giving such artifacts a bio-like movement.`;

const workCaptionTitle2JP = ``;
const workCaptionTitle2EN = `Amemism`;
const workCaptionMessage2JP = `傘の「暇」に注目し、傘に命を与えました。普段何気なく使っている傘が人や他の傘と交流を始めた時、あなたは何を感じるでしょうか。`;
const workCaptionMessage2EN = `We focused on the "leisure" of the umbrella and gave life to it. What do you feel when your casual umbrella starts interacting with people and other umbrellas?`;

const workCaptionTitle3JP = `積読に怒る本`;
const workCaptionTitle3EN = `Furious to be stacked`;
const workCaptionMessage3JP = `本の「暇」である積ん読に抵抗して、上に本を置かれると自らが開くことで落としてしまいます。本が利便性や効率から解放されて、人や他の本との交流を始めた時にあなたは何を感じるでしょうか。`;
const workCaptionMessage3EN = `The book resists "loading", which is the "leisure" of books, and when books are placed on it, it drops them by opening itself. What do you feel when a book is released from convenience or efficiency and begins to interact with people and other books?`;

const Oto: React.FC = () => {
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
              captionImages={[Image1_1, Image1_2]}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionYoutubeCarousel
              captionImages={[
                "https://www.youtube.com/embed/Uli5_Hvqs5A",
                "https://youtube.com/embed/bv-YqLtDfIw",
              ]}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionYoutube
              captionImage={"https://www.youtube.com/embed/RInMSV2yumM"}
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

export default Oto;

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
