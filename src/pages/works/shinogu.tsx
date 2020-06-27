import React from "react";
import OGPHead from "../../components/OGPHead";
import OGPImage from "../../images/works/Shinogu/shinogu_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import CloseWebSite from "../../components/CloseWebSite";

const {
  link,
  titleJP,
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Shinogu");
const overViewCaptionJP = `水の動きに見入ってしまった経験はありますか？雄大にしぶきを上げ流れ落ちる滝も、繊細に静かに滴り落ちる水滴も、思わず鑑賞し続けたくなる魅力があります。そしてこの魅力は、水の持つ「不定形さ」によってもたらされるのではないかと考えました。この作品では、小さな塊となった色水が、ひとつひとつ、流路に沿って滑らかに進みます。それは規則的でありながらどこか不安定さを感じさせる、不思議に満ちた動きです。しなやかな水が生み出す優美さを是非ご覧ください。`;

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
      <CloseWebSite />
    </>
  );
};

export default Shinogu;
