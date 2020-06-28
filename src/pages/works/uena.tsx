import React from "react";
import OGPHead from "../../components/OGPHead";
import OGPImage from "../../images/works/Uena/uena_ogp.png";
import {
  WorksBaseInfoWithPrevAndNextLink,
  getWorksInfoByAuthor,
} from "../../constants/WorksList";
import CloseWebSite from "../../components/CloseWebSite";

const {
  link,
  titleJP,
}: WorksBaseInfoWithPrevAndNextLink = getWorksInfoByAuthor("Uena");
const overViewCaptionJP = `柔らかい素材やダンパーを用いずに柔らかさを表現することを試みる中で、この作品は生まれました。動力を使わず、ヤジロベエが複数連なった構造だけで生み出されるふるまいは、モーメントが釣り合っていれば、どのような硬さや比重の素材でも同じ柔らかい動きを示します。 硬いけど柔らかい、そんな不思議なふるまいをご体験ください。`;
const Uena: React.FC = () => {
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

export default Uena;
