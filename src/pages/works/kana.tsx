import React from "react";
import OGPHead from "../../components/OGPHead";
import OGPImage from "../../images/works/Kana/kana-munya_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import CloseWebSite from "../../components/CloseWebSite";

const {
  link,
  titleJP,
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Kana");
const overViewCaptionJP = `生物は安定した状態となるよう重力などの物理法則の上で常に均衡を保つようにしており、例えばひとたび不安定な姿勢になると、様々な反応や動作を即座に行うことで安定した姿勢に戻ろうとします。この作品では、こうした安定と不安定な姿勢を行き来する際の反応・動作の中から生命感や愛おしさを感じるふるまいを抽出し、人工物に適用しました。ふるまいにより生まれる、生き物らしさにご注目ください。`;

const Kana: React.FC = () => {
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
      <CloseWebSite />
    </>
  );
};

export default Kana;
