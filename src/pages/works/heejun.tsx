import React from "react";
import styled from "@emotion/styled";
import texture from "../../images/mdftexture200608v2.jpg";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import WorkCaption from "../../components/WorkCaption";
import WorkCaption3d from "../../components/WorkCaption3d";
import WorkCaptionYoutube from "../../components/WorkCaptionYoutube";
import Caption1Image from "../../images/works/Uena/caption1.png";
//import Caption2Image from "../../images/works/Uena/caption2.png";
//import Caption3Image from "../../images/works/Uena/caption3.png";
import ChairScene from "../../components/heejunscene";
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
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Heejun");
const overViewCaptionJP = `チタンは、軽くて、強くて、錆びない、とても優れた金属です。意外かもしれませんが資源も豊富で、工場の配管など、産業分野では広く利用されています。日用品であまり目にしないのは、精練・加工が難しく、コストが掛かってしまうから。もしチタンをアルミのように安く使えるようになれば、世界中の日用品の多くはチタン製になるかもしれません。この作品では、配管用のチタンパイプの端材を材料に、グラフェンの転移機構を参考にしたアルゴリズムと3Dプリンタによるジョイント設計によって、美しく、作りやすいチタン製品を実現しました。`;
const overViewCaptionEN = `This is the project to design aesthetic furniture using titanium. Titanium is a strong, lightweight and non-corrosive material, and it is often considered to be expensive. However, unlike rare earth, titanium ore is not rare on our planet. What makes this material very expensive is actually its cost of processing. Our approach is to design with cheap titanium pipe, which is the leftover from the manufacturing process of titanium heat exchanger. By using the algorithmic design method and 3D printed joints, we achieved low-cost, yet sophisticated design.`;

const workCaptionTitle1JP = `チタンパイプ`;
const workCaptionTitle1EN = `Titanium pipe`;
const workCaptionMessage1JP = `大型熱交換器などに使用される純チタンパイプです。軽く丈夫な素材ですが、生産費用が高いことが欠点です。本作品では、産業現場で捨てられるチタンパイプの端材を用いて、美しい家具を制作します。`;
const workCaptionMessage1EN = `Titanium pipe, manufactured for high-temperature fluid transportation. Though it is lightweight and durable, its manufacturing cost is expensive. In this project, we reduced our project's building cost, by gathering cheap scrap titanium pipes from factories, rather than purchasing a new one.`;

const workCaptionTitle2JP = `発想: 不規則な形`;
const workCaptionTitle2EN = `Idea: Amorphous form`;
const workCaptionMessage2JP = `不規則な形状は有機的な美しさを持つことがあります。グラフェンの転位機構に注目しアルゴリズムとして実装することで、不規則形状の自動生成を行いました。`;
const workCaptionMessage2EN = `Sometimes, irregular geometry would possess the beauty of organic form. With the benefit of advanced computer technology, designing these forms became easier than before. In this project, we have generated such form automatically, by mimicking the Stone-Wales defect mechanism of graphene.`;

const workCaptionTitle3JP = ``;
const workCaptionTitle3EN = `Stone-Wales defect`;
const workCaptionMessage3JP = `Stone-Wales欠陥はπ結合をもつ炭素原子の格子で、結合の順番が入れ替わり生成されます。このメカニズムを模倣すると、不規則な泡状の模様を等しい長さの線分で構成することができます。`;
const workCaptionMessage3EN = `Stone-Wales defect occurs in the lattice of carbon atoms with the π-bond network, by interchanging its bonding topology. By mimicking this mechanism, we were able to achieve an amorphous bubble-like form, with sole equilateral lines.`;

const workCaptionTitle4JP = `ジョイントの制作`;
const workCaptionTitle4EN = `Manufacturing joints`;
const workCaptionMessage4JP = `アルゴリズムにより生成されたパターンを、Grasshopper™というデザイン支援ツールに流し込み、ジョイントの形状データを自動生成しました。このジョイントを3Dプリンタを用いることで造形します。`;
const workCaptionMessage4EN = `By using Grasshopper™, the computer-aided design application, we were able to generate 3D geometry of joints automatically, based on the generated pattern. Next, we have additively manufactured them with the 3D printer.`;

const workCaptionTitle5JP = `等辺図形の利点`;
const workCaptionTitle5EN = `Benefits of equilateral form`;
const workCaptionMessage5JP = `本作品の天板は、すべて同じ長さのチタンパイプで構成されています。チタンパイプの長さを一様に変更すれば、全く同じジョイントを用いて、異なる大きさの天板を組み立てることができます。`;
const workCaptionMessage5EN = `The top board of the table is made up of equilateral pipes. By doing so, we can easily scale its size with another equilateral pipe and the exact same set of joints.`;

const workCaptionTitle6JP = `張力構造`;
const workCaptionTitle6EN = `Tensegrity structure`;
const workCaptionMessage6JP = `一般的に長いものは引っ張る力に対して強い性質があり、構造を工夫すると、細いワイヤーでも頑丈にすることができます。このように浮遊するように見える構造が成り立っているのも、張力構造の強さによるものです。`;
const workCaptionMessage6EN = `In general, a long and thin object is strongest against the tensile force along its length, rather than bending or compressing forces. By designing the structure to distribute its load as tensile stress, we can build a rigid structure even with thin wires. The "floating" structure of this prototype is also due to the benefit of it.`;

const workCaptionTitle7JP = `チタンのテーブル`;
const workCaptionTitle7EN = `Titanium table`;
const workCaptionMessage7JP = `これらのアイデアを組み合わせて、テーブルを制作しました。不規則なパターンで構成されている天板と、浮遊するような張力構造のフォルムにご注目ください。`;
const workCaptionMessage7EN = `By integrating these ideas, this table was built. Please enjoy the organic construction of the upper board and floating-like outfit of the tensegrity structure.`;

const Uena: React.FC = () => {
  return (
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
          <WorkCaptionYoutube
            captionImage={"https://www.youtube.com/embed/hgKQauS0qME"}
            captionTitleJP={workCaptionTitle2JP}
            captionTitleEN={workCaptionTitle2EN}
            captionMessageJP={workCaptionMessage2JP}
            captionMessageEN={workCaptionMessage2EN}
          />
        </WorkCaptionDiv>
        <WorkCaptionDiv>
          <WorkCaption3d
            Caption3dImage={<ChairScene />}
            captionTitleJP={workCaptionTitle3JP}
            captionTitleEN={workCaptionTitle3EN}
            captionMessageJP={workCaptionMessage3JP}
            captionMessageEN={workCaptionMessage3EN}
          />
        </WorkCaptionDiv>
        <WorkCaptionDiv>
          <WorkCaption
            captionImage={Caption1Image}
            captionTitleJP={workCaptionTitle4JP}
            captionTitleEN={workCaptionTitle4EN}
            captionMessageJP={workCaptionMessage4JP}
            captionMessageEN={workCaptionMessage4EN}
          />
        </WorkCaptionDiv>
        <WorkCaptionDiv>
          <WorkCaption
            captionImage={Caption1Image}
            captionTitleJP={workCaptionTitle5JP}
            captionTitleEN={workCaptionTitle5EN}
            captionMessageJP={workCaptionMessage5JP}
            captionMessageEN={workCaptionMessage5EN}
          />
        </WorkCaptionDiv>
        <WorkCaptionDiv>
          <WorkCaption
            captionImage={Caption1Image}
            captionTitleJP={workCaptionTitle6JP}
            captionTitleEN={workCaptionTitle6EN}
            captionMessageJP={workCaptionMessage6JP}
            captionMessageEN={workCaptionMessage6EN}
          />
        </WorkCaptionDiv>
        <WorkCaptionDiv>
          <WorkCaption
            captionImage={Caption1Image}
            captionTitleJP={workCaptionTitle7JP}
            captionTitleEN={workCaptionTitle7EN}
            captionMessageJP={workCaptionMessage7JP}
            captionMessageEN={workCaptionMessage7EN}
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
