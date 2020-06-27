import React from "react";
import OGPHead from "../../components/OGPHead";
import OGPImage from "../../images/works/Takuro/takuro_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import CloseWebSite from "../../components/CloseWebSite";

const {
  link,
  titleJP,
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Takuro");
const overViewCaptionJP = `『Rami』は3Dプリンティングならではの立体構造となめらかな曲面を持つ、陸上競技用下腿義足です。機能的で美しいスポーツ用義足を、多くの人に届けるシステムを作るために研究開発しています。最初のマイルストーンとして、パラ短距離・走り幅跳び選手である高桑早生さんのための義足『Rami』を開発。そしてプロジェクトの次の段階としてユーザー数の増加と競技種目の拡大を目指し、走り高跳び選手のための義足『Rami S』を開発しました。`;

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
      <CloseWebSite />
    </>
  );
};

export default Takuro;
