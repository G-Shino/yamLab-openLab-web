import React from "react";
import OGPHead from "../../components/OGPHead";
import OGPImage from "../../images/works/Oga/oga_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";

import CloseWebSite from "../../components/CloseWebSite";

const {
  link,
  titleJP,
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Oga");
const overViewCaptionJP = `人にはそれぞれ、少しずつ違う手の大きさがあります。しかし、従来の義手やロボットハンドは大きさが段階的で、必ずしもあなたの欲しい手の大きさではないかもしれません。そこで私は、細かなサイズ調整を簡単に行える『Scalable hand』を制作しました。本来は硬いナイロン樹脂から形状を工夫することで、シリコンのように柔らかい指先・バネのような反発性のある関節を再現。これらの部品を3Dプリンタを用いて一度に造形することで組み立てにネジを使う必要がなく、3Dモデルを拡大・縮小するだけでサイズ調整が可能となります。`;

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
      <CloseWebSite />
    </>
  );
};

export default Oga;
