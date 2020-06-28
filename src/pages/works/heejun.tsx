import React from "react";
import OGPHead from "../../components/OGPHead";
import OGPImage from "../../images/works/Heejun/heejun_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";

import CloseWebSite from "../../components/CloseWebSite";

const {
  link,
  titleJP,
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Heejun");
const overViewCaptionJP = `チタンは、軽くて、強くて、錆びない、とても優れた金属です。意外かもしれませんが資源も豊富で、工場の配管など、産業分野では広く利用されています。日用品であまり目にしないのは、精練・加工が難しく、コストが掛かってしまうから。もしチタンをアルミのように安く使えるようになれば、世界中の日用品の多くはチタン製になるかもしれません。この作品では、配管用のチタンパイプの端材を材料に、グラフェンの転移機構を参考にしたアルゴリズムと3Dプリンタによるジョイント設計によって、美しく、作りやすいチタン製品を実現しました。`;

const Heejun: React.FC = () => {
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

export default Heejun;
