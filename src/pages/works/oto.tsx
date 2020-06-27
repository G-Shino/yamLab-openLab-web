import React from "react";
import OGPHead from "../../components/OGPHead";
import OGPImage from "../../images/works/Oto/oto_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import CloseWebSite from "../../components/CloseWebSite";

const {
  link,
  titleJP,
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Oto");
const overViewCaptionJP = `人に使用されていない間には何も機能を果たしていない人工物が多く存在します。そんな人工物に生物らしい動きを与えることで注意や愛着を増やすことを目標にした”道具の暇”プロジェクトの二作品です。`;

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
      <CloseWebSite />
    </>
  );
};

export default Oto;
