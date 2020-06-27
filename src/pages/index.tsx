import React from "react";
import CloseWebSite from "../components/CloseWebSite";
import OGPHead from "../components/OGPHead";
import LogoOGP from "../images/logo_ogp.png";

const Home: React.FC = () => {
  return (
    <>
      <OGPHead
        title="開催にあたり"
        type="website"
        description="言葉を交えると新しい発見があります。話すことによってイメージの輪郭が急にはっきりすることもあります。アイデアは、人との関わりの中で少しずつ、時には劇的に進展します。山中研究室においても、会話や議論はプロジェクト進行の中核になります。常に、より広い視野、客観的な意見、新たなビジョンを求めて繰り返される会話。重要なのは話者の多様性です。今回の展示では、来場いただいた皆さんと、研究メンバーが会話することを目指しました。展示されたプロトタイプには、私たちのビジョンや価値観が込められています。気になることがあったら、そこにいるメンバーに遠慮なく問いかけてください。そして、あなたが思ったこと、感じたこと、考えたことを聞かせてください。限られた時間ではありますが、一緒に未来をドライブできれば幸いです。"
        keyword=""
        image={LogoOGP}
        page=""
      />
      <CloseWebSite />
    </>
  );
};

export default Home;
