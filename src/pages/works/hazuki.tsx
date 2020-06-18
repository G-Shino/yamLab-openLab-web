import React from "react";
import styled from "@emotion/styled";
import texture from "../../images/mdftexture200608v2.jpg";
import OGPHead from "../../components/OGPHead";
import WorkOverView from "../../components/WorkOverView";
import FootSpace from "../../components/FootSpace";
import WorkCaption from "../../components/WorkCaption";
import hazuki_1_1 from "../../images/works/Hazuki/hazuki_1-1.png";
import hazuki_1_2 from "../../images/works/Hazuki/hazuki_1-2.png";
import hazuki_2 from "../../images/works/Hazuki/hazuki_2.png";
import hazuki_3_1 from "../../images/works/Hazuki/hazuki_3-1.png";
import hazuki_3_2 from "../../images/works/Hazuki/hazuki_3-2.png";
import hazuki_5 from "../../images/works/Hazuki/hazuki_5.png";
import hazuki_6 from "../../images/works/Hazuki/hazuki_6.png";
import hazuki_7 from "../../images/works/Hazuki/hazuki_7.png";
import hazuki_8 from "../../images/works/Hazuki/hazuki_8.png";
import hazuki_9 from "../../images/works/Hazuki/hazuki_9.png";
import HandWritingImage from "../../images/works/Hazuki/hazuki_handwriting.png";
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
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Hazuki");
const overViewCaptionJP = `無意識のバイアスに気づくことは、簡単ではありません。生まれ育った環境や文化を通して、積み重なる学習によって根付いたものです。性別へのバイアスによって様々な可能性が阻まれている現状に対し、Co-Speculative Desginと言う理論を取り入れ、固定概念を覆し、内省を促すワークショップを設計しました。ワークショップ内では、起こりうる未来を想定しながらペルソナを作る過程でバイアスが露呈される仕掛けを用意し、参加者同士が対話することでバイアスに対する新たな問題への気づきを促しました。`;
const overViewCaptionEN = `It is quite difficult to realize our unconscious bias. It develops in our subconsciousness, while we live through our own culture and environment. We designed a workshop to discover and self-examine our inner gender bias, by introducing co-speculative design theory. In this workshop, we designed to expose an individual's bias while each participant build persona simulating close future of themselves. And by each participant's conversation, we were able to make them perceive some new problems about bias.`;
const overViewCreditJP = `制作：三好葉月
ディレクション：山中俊治`;
const overViewCreditEN = `Designer: Hazuki Miyoshi
Director: Shunji Yamanaka`;

const workCaptionTitle1JP = `なぜ理系に女性が少ないのか`;
const workCaptionTitle1EN = `Why are there so few women in science?`;
const workCaptionMessage1JP = `要因の一つとして「無意識のジェンダーバイアス」があると考え、無意識のバイアスへの気づきを促すワークショップを設計し、Implicit Association Test(IAT)で評価を行うことにしました。`;
const workCaptionMessage1EN = `Considering that one of the factors is "unconscious gender bias," we designed a workshop to promote awareness of unconscious bias and assessed it with the Implicit Association Test (IAT).`;

const workCaptionTitle2JP = `新しいワークショップの提案1
-Co-Speculative Designを用いた
ワークショップの開催`;
const workCaptionTitle2EN = `New Workshop Proposal 1 - Workshop on Co-Speculative Design`;
const workCaptionMessage2JP = `Co-Speculative Design（未来の可能性を提示し、問いを創造させるデザインの方法論）として、“Future Scientist”の映像制作を行い、「未来の評価システム」を考えることをコンセプトに設定しました。さらに、Co-Speculative Designを用いて参加者同士の議論や対話を通して、ワークショップのコンセプトにある問題提起以上の新たな問題が発見ないし再定義されることを目指しました。`;
const workCaptionMessage2EN = `Future Scientist film production as Co-Speculative Design (design methodologies that present future possibilities and create questions) and set up the concept of thinking about the evaluation system of the future.
Furthermore, we used Co-Speculative Design to help participants discover or redefine new issues beyond those raised in the workshop concept through discussion and dialogue.
`;

const workCaptionTitle3JP = `新しいワークショップの提案2 
-無意識のジェンダーバイアスではなく一般論から議論を始める
`;
const workCaptionTitle3EN = `New Workshop Proposal 2
- We start the discussion with generalities, not unconscious gender bias.
`;
const workCaptionMessage3JP = `入試や受験における評価システムのような、動機よりも手段に重きが置かれている評価システムへの問題提起から出発し、個人のポテンシャルを発揮できるような適材適所で多様性のある未来の評価システムを考えることをWSのゴールに設定しました。
UGBを減らす目的とは参加者に伝えずにWSを進め、後半のワークでUGBが露呈するような仕掛けを用意しました。
`;
const workCaptionMessage3EN = `The goal of the workshop was to think about a future evaluation system with diversity and the right person in the right place to demonstrate individual potential, starting with the issue of evaluation systems that place more emphasis on the means than the motive, such as those used in entrance examinations.
We proceeded with the WS without telling participants that the purpose was to reduce UGB, and we prepared a device that would expose UGB in the second half of the work.
`;

const workCaptionTitle4JP = `ワークショップの実施`;
const workCaptionTitle4EN = `Workshops`;
const workCaptionMessage4JP = `無意識のジェンダーバイアスを前提としないワークショップにより、無意識のジェンダーバイアス減少を目指しました。STEP3のジェンダースワップにより生じた解釈を、STEP4のセッションにて深掘りすることで無意識のジェンダーバイアスに気付くという仕掛けを施しました。
`;
const workCaptionMessage4EN = `We aimed to reduce unconscious gender bias through workshops that did not assume it.
The trick was to notice the unconscious gender bias by digging deeper into the interpretations created by the STEP3 gender swap in the STEP4 session.
`;

const workCaptionTitle5JP = `WSを通して無意識のジェンダーバイアスは減ったのか`;
const workCaptionTitle5EN = `Has unconscious gender bias been reduced through WS?`;
const workCaptionMessage5JP = `ワークショップ参加前後のIAT結果より、ワークショップによって無意識のジェンダーバイアスは減少、もしくは不変であったことがわかりました。`;
const workCaptionMessage5EN = `Pre- and post-workshop IAT results showed that unconscious gender bias was reduced or unchanged by the workshop.`;

const workCaptionTitle6JP = `Co-speculative Designの有効性`;
const workCaptionTitle6EN = `Effectiveness of Co-speculative Design`;
const workCaptionMessage6JP = `参加者同士の議論や対話を通して、WSのコンセプトにある問題提起以上の新たな問題が発見、ないし再定義される部分を評価しました。
評価は、WS中のユーザの振る舞いを記録、観察し、ユーザとの対話によって行動の理由やショックのあった部分を深掘りすることで行いました。また、必要に応じて追跡調査を実施しました。
`;
const workCaptionMessage6EN = `Through discussion and dialogue among the participants, we evaluated the areas where new issues were discovered or redefined new issues beyond the WS concept.
The evaluation is based on recording and observing the user's behavior during the WS and interacting with them to determine the reasons for their behavior and We did this by digging deeper into the areas where there was a shock. We also conducted follow-up surveys as needed.`;

const workCaptionTitle7JP = `ワークショップの評価`;
const workCaptionTitle7EN = `Evaluation of workshop`;
const workCaptionMessage7JP = `全3回のワークショップについて、懸念点、評価点を分析しました。`;
const workCaptionMessage7EN = `We analyzed the concerns and evaluations of all three workshops`;

const workCaptionTitle8JP = `要約`;
const workCaptionTitle8EN = `Summary`;
const workCaptionMessage8JP = `実施したWSによって無意識のジェンダーバイアスへの気づきを促すことに成功しました。また、Co-Speculative Designは新しい問題構築に有効であること、WSにおいては雰囲気作りも重要であることがわかりました。`;
const workCaptionMessage8EN = `The WS that was conducted successfully promoted awareness of unconscious gender bias. We also found that Co-Speculative Design is effective in building new questions and that setting a mood is also important in WS.`;

const workCaptionTitle9JP = `結論`;
const workCaptionTitle9EN = `conclusion`;
const workCaptionMessage9JP = `無意識のバイアスに気づくことは困難なため、自分を見つめ直す機会を持つことが重要であると考えました。`;
const workCaptionMessage9EN = `Since unconscious bias can be difficult to recognize, we thought it was important to have an opportunity to reflect on ourselves.`;

const Hazuki: React.FC = () => {
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
            <WorkCaptionCarousel
              captionImages={[hazuki_1_1, hazuki_1_2]}
              captionTitleJP={workCaptionTitle1JP}
              captionTitleEN={workCaptionTitle1EN}
              captionMessageJP={workCaptionMessage1JP}
              captionMessageEN={workCaptionMessage1EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={hazuki_2}
              captionTitleJP={workCaptionTitle2JP}
              captionTitleEN={workCaptionTitle2EN}
              captionMessageJP={workCaptionMessage2JP}
              captionMessageEN={workCaptionMessage2EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionCarousel
              captionImages={[hazuki_3_1, hazuki_3_2]}
              captionTitleJP={workCaptionTitle3JP}
              captionTitleEN={workCaptionTitle3EN}
              captionMessageJP={workCaptionMessage3JP}
              captionMessageEN={workCaptionMessage3EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaptionYoutube
              captionImage={"https://www.youtube.com/embed/YLnCXKA4O_c"}
              captionTitleJP={workCaptionTitle4JP}
              captionTitleEN={workCaptionTitle4EN}
              captionMessageJP={workCaptionMessage4JP}
              captionMessageEN={workCaptionMessage4EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={hazuki_5}
              captionTitleJP={workCaptionTitle5JP}
              captionTitleEN={workCaptionTitle5EN}
              captionMessageJP={workCaptionMessage5JP}
              captionMessageEN={workCaptionMessage5EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={hazuki_6}
              captionTitleJP={workCaptionTitle6JP}
              captionTitleEN={workCaptionTitle6EN}
              captionMessageJP={workCaptionMessage6JP}
              captionMessageEN={workCaptionMessage6EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={hazuki_7}
              captionTitleJP={workCaptionTitle7JP}
              captionTitleEN={workCaptionTitle7EN}
              captionMessageJP={workCaptionMessage7JP}
              captionMessageEN={workCaptionMessage7EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={hazuki_8}
              captionTitleJP={workCaptionTitle8JP}
              captionTitleEN={workCaptionTitle8EN}
              captionMessageJP={workCaptionMessage8JP}
              captionMessageEN={workCaptionMessage8EN}
            />
          </WorkCaptionDiv>
          <WorkCaptionDiv>
            <WorkCaption
              captionImage={hazuki_9}
              captionTitleJP={workCaptionTitle9JP}
              captionTitleEN={workCaptionTitle9EN}
              captionMessageJP={workCaptionMessage9JP}
              captionMessageEN={workCaptionMessage9EN}
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

export default Hazuki;

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
