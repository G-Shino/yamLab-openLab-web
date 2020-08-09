import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import texture from "../images/mdftexture.jpg";
import HeaderLogo from "../images/logo_white.png";

import oga0101 from "../images/works/Oga/01-01-01.png";
import oga0102 from "../images/works/Oga/01-01-02.png";
import oga0103 from "../images/works/Oga/01-01-03.png";
import oga0104 from "../images/works/Oga/01-01-04.png";
import oga0201 from "../images/works/Oga/01-02-01.png";
import oga0202 from "../images/works/Oga/01-02-02.png";
import oga0203 from "../images/works/Oga/01-02-03.png";
import oga0204 from "../images/works/Oga/01-02-04.png";
import oga0301 from "../images/works/Oga/01-03-01.png";
import oga0302 from "../images/works/Oga/01-03-02.png";
import oga0303 from "../images/works/Oga/01-03-03.png";
import oga0304 from "../images/works/Oga/01-03-04.png";
import oga0305 from "../images/works/Oga/01-03-05.png";
import oga0306 from "../images/works/Oga/01-03-06.png";
import oga0307 from "../images/works/Oga/01-03-07.png";
import oga0401 from "../images/works/Oga/01-04-01.png";
import oga0402 from "../images/works/Oga/01-04-02.png";
import oga0403 from "../images/works/Oga/01-04-03.png";

import shinogu0201 from "../images/works/Shinogu/02-02-01.png";
import shinogu0202 from "../images/works/Shinogu/02-02-02.png";
import shinogu0301 from "../images/works/Shinogu/02-03-01.png";
import shinogu0302 from "../images/works/Shinogu/02-03-02.png";
import shinogu0303 from "../images/works/Shinogu/02-03-03.png";
import shinogu0304 from "../images/works/Shinogu/02-03-04.png";
import shinogu0401 from "../images/works/Shinogu/02-04-01.png";
import shinogu0402 from "../images/works/Shinogu/02-04-02.png";
import shinogu0403 from "../images/works/Shinogu/02-04-03.png";
import shinogu0501 from "../images/works/Shinogu/02-05-01.png";
import shinogu0502 from "../images/works/Shinogu/02-05-02.png";
import shinogu0503 from "../images/works/Shinogu/02-05-03.png";
import shinogu0504 from "../images/works/Shinogu/02-05-04.png";
import shinogu0601 from "../images/works/Shinogu/02-06-01.png";
import shinogu0602 from "../images/works/Shinogu/02-06-02.png";
import shinogu0603 from "../images/works/Shinogu/02-06-03.png";
import shinogu0604 from "../images/works/Shinogu/02-06-04.png";
import shinogu0701 from "../images/works/Shinogu/02-07-01.png";

import hazuki_1_1 from "../images/works/Hazuki/hazuki_1-1.png";
import hazuki_1_2 from "../images/works/Hazuki/hazuki_1-2.png";
import hazuki_2 from "../images/works/Hazuki/hazuki_2.png";
import hazuki_3_1 from "../images/works/Hazuki/hazuki_3-1.png";
import hazuki_3_2 from "../images/works/Hazuki/hazuki_3-2.png";
import hazuki_5 from "../images/works/Hazuki/hazuki_5.png";
import hazuki_6 from "../images/works/Hazuki/hazuki_6.png";
import hazuki_7 from "../images/works/Hazuki/hazuki_7.png";
import hazuki_8 from "../images/works/Hazuki/hazuki_8.png";
import hazuki_9 from "../images/works/Hazuki/hazuki_9.png";

import kana0301 from "../images/works/Kana/05-03-01.png";
import kana0302 from "../images/works/Kana/05-03-02.png";
import kana0303 from "../images/works/Kana/05-03-03.png";
import kana0304 from "../images/works/Kana/05-03-04.png";
import kana0401 from "../images/works/Kana/05-04-01.png";
import kana0402 from "../images/works/Kana/05-04-02.png";
import kana0403 from "../images/works/Kana/05-04-03.png";
import kana0601 from "../images/works/Kana/05-06-01.png";
import kana0602 from "../images/works/Kana/05-06-02.png";
import kana0603 from "../images/works/Kana/05-06-03.png";

import fumin0101 from "../images/works/Fu-min/06-01-01.png";
import fumin0102 from "../images/works/Fu-min/06-01-02.png";
import fumin0103 from "../images/works/Fu-min/06-01-03.png";
import fumin0104 from "../images/works/Fu-min/06-01-04.png";
import fumin0201 from "../images/works/Fu-min/06-02-01.png";
import fumin0202 from "../images/works/Fu-min/06-02-02.png";
import fumin0203 from "../images/works/Fu-min/06-02-03.png";
import fumin0301 from "../images/works/Fu-min/06-03-01.png";
import fumin0302 from "../images/works/Fu-min/06-03-02.png";
import fumin0401 from "../images/works/Fu-min/06-04-01.png";
import fumin0402 from "../images/works/Fu-min/06-04-02.png";
import fumin0403 from "../images/works/Fu-min/06-04-03.png";
import fumin0501 from "../images/works/Fu-min/06-05-01.png";
import fumin0502 from "../images/works/Fu-min/06-05-02.png";
import fumin0503 from "../images/works/Fu-min/06-05-03.png";
import fumin0504 from "../images/works/Fu-min/06-05-04.png";
import fumin0601 from "../images/works/Fu-min/06-06-01.png";
import fumin0602 from "../images/works/Fu-min/06-06-02.png";
import fumin0603 from "../images/works/Fu-min/06-06-03.png";
import fumin0604 from "../images/works/Fu-min/06-06-04.png";

const authors = ["oga", "shinogu", "hazuki", "kana", "fu-min"] as const;
type Authors = typeof authors;

const Page: React.FC = () => {
  const targets = React.useRef<
    { [key in keyof Authors]?: React.RefObject<HTMLDivElement> }
  >({});
  authors.forEach((author) => {
    targets.current[author] = React.createRef();
  });
  const [author, setAuthor] = React.useState("");
  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAuthor(entry.target.id);
      }
    }, options);
    console.log(targets);
    Object.values(targets.current).forEach((target) => {
      observer.observe(target.current);
    });
    return () => {
      Object.values(targets.current).forEach((target) => {
        observer.unobserve(target.current);
      });
    };
  }, []);

  return (
    <WrapperDiv>
      <WrapperMainDiv>
        <Header>
          <Link href="/">
            <h1>
              <HeaderLogoDiv
                src={HeaderLogo}
                alt="Dia Log"
                height="800"
                width="800"
              />
            </h1>
          </Link>{" "}
        </Header>
        <Main>
          <WorkTitle>Scalable hand</WorkTitle>
          <WorksDiv ref={targets.current[authors[0]]} id={authors[0]}>
            <WorkImg src={oga0101} alt="" width="802" height="535" />
            <WorkImg src={oga0102} alt="" width="802" height="535" />
            <WorkImg src={oga0103} alt="" width="802" height="535" />
            <WorkImg src={oga0104} alt="" width="802" height="535" />
            <WorkImg src={oga0201} alt="" width="802" height="535" />
            <WorkImg src={oga0202} alt="" width="802" height="535" />
            <WorkImg src={oga0203} alt="" width="802" height="535" />
            <WorkImg src={oga0204} alt="" width="802" height="535" />
            <WorkImg src={oga0301} alt="" width="802" height="535" />
            <WorkImg src={oga0302} alt="" width="802" height="535" />
            <WorkImg src={oga0303} alt="" width="802" height="535" />
            <WorkImg src={oga0304} alt="" width="802" height="535" />
            <WorkImg src={oga0305} alt="" width="802" height="535" />
            <WorkImg src={oga0306} alt="" width="802" height="535" />
            <WorkImg src={oga0307} alt="" width="802" height="535" />
            <WorkImg src={oga0401} alt="" width="802" height="535" />
            <WorkImg src={oga0402} alt="" width="802" height="535" />
            <WorkImg src={oga0403} alt="" width="802" height="535" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
          <WorkTitle>流点</WorkTitle>
          <WorksDiv ref={targets.current[authors[1]]} id={authors[1]}>
            <WorkImg src={shinogu0201} alt="" width="802" height="535" />
            <WorkImg src={shinogu0202} alt="" width="802" height="535" />
            <WorkImg src={shinogu0301} alt="" width="802" height="535" />
            <WorkImg src={shinogu0302} alt="" width="802" height="535" />
            <WorkImg src={shinogu0303} alt="" width="802" height="535" />
            <WorkImg src={shinogu0304} alt="" width="802" height="535" />
            <WorkImg src={shinogu0401} alt="" width="802" height="535" />
            <WorkImg src={shinogu0402} alt="" width="802" height="535" />
            <WorkImg src={shinogu0403} alt="" width="802" height="535" />
            <WorkImg src={shinogu0501} alt="" width="802" height="535" />
            <WorkImg src={shinogu0502} alt="" width="802" height="535" />
            <WorkImg src={shinogu0503} alt="" width="802" height="535" />
            <WorkImg src={shinogu0504} alt="" width="802" height="535" />
            <WorkImg src={shinogu0601} alt="" width="802" height="535" />
            <WorkImg src={shinogu0602} alt="" width="802" height="535" />
            <WorkImg src={shinogu0603} alt="" width="802" height="535" />
            <WorkImg src={shinogu0604} alt="" width="802" height="535" />
            <WorkImg src={shinogu0701} alt="" width="802" height="535" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
          <WorkTitle>
            Reduce Unconscious Gender Bias through Workshop with Co-Speculative
            Design
          </WorkTitle>
          <WorksDiv ref={targets.current[authors[2]]} id={authors[2]}>
            <WorkImg src={hazuki_1_1} alt="" />
            <WorkImg src={hazuki_1_2} alt="" />
            <WorkImg src={hazuki_2} alt="" />
            <WorkImg src={hazuki_3_1} alt="" />
            <WorkImg src={hazuki_3_2} alt="" />
            <WorkImg src={hazuki_5} alt="" />
            <WorkImg src={hazuki_6} alt="" />
            <WorkImg src={hazuki_7} alt="" />
            <WorkImg src={hazuki_8} alt="" />
            <WorkImg src={hazuki_9} alt="" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
          <WorkTitle>OTT: OTTOTTO</WorkTitle>
          <WorksDiv ref={targets.current[authors[3]]} id={authors[3]}>
            <WorkImg src={kana0301} alt="" />
            <WorkImg src={kana0302} alt="" />
            <WorkImg src={kana0303} alt="" />
            <WorkImg src={kana0304} alt="" />
            <WorkImg src={kana0401} alt="" />
            <WorkImg src={kana0402} alt="" />
            <WorkImg src={kana0403} alt="" />
            <WorkImg src={kana0601} alt="" />
            <WorkImg src={kana0602} alt="" />
            <WorkImg src={kana0603} alt="" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
          <WorkTitle>ヴァイオリン用顎・肩当て</WorkTitle>
          <WorksDiv ref={targets.current[authors[4]]} id={authors[4]}>
            <WorkImg src={fumin0101} alt="" />
            <WorkImg src={fumin0102} alt="" />
            <WorkImg src={fumin0103} alt="" />
            <WorkImg src={fumin0104} alt="" />
            <WorkImg src={fumin0201} alt="" />
            <WorkImg src={fumin0202} alt="" />
            <WorkImg src={fumin0203} alt="" />
            <WorkImg src={fumin0301} alt="" />
            <WorkImg src={fumin0302} alt="" />
            <WorkImg src={fumin0401} alt="" />
            <WorkImg src={fumin0402} alt="" />
            <WorkImg src={fumin0403} alt="" />
            <WorkImg src={fumin0501} alt="" />
            <WorkImg src={fumin0502} alt="" />
            <WorkImg src={fumin0503} alt="" />
            <WorkImg src={fumin0504} alt="" />
            <WorkImg src={fumin0601} alt="" />
            <WorkImg src={fumin0602} alt="" />
            <WorkImg src={fumin0603} alt="" />
            <WorkImg src={fumin0604} alt="" />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
            <AdjusterDiv />
          </WorksDiv>
        </Main>
      </WrapperMainDiv>
      <AsideDiv>
        <h3>Message</h3>
        <StyledUL>
          <li>{author}</li>
        </StyledUL>
      </AsideDiv>
    </WrapperDiv>
  );
};

export default Page;

const WrapperDiv = styled.div`
  height: auto;
  background-image: url(${texture});
  height: auto;
  display: flex;
`;

const WrapperMainDiv = styled.div`
  width: calc(100% - 320px);
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Header = styled.header`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderLogoDiv = styled.img`
  width: 80px;
  height: auto;
  padding-top: 8px;
  padding-left: 8px;
`;

const Main = styled.main`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
`;

const WorkTitle = styled.h2`
  text-align: center;
`;

const WorksDiv = styled.div`
  margin-bottom: 160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 320px) {
    margin-bottom: 96px;
  }
`;

const WorkImg = styled.img`
  box-sizing: border-box;
  width: 320px;
  height: auto;
  padding: 16px;
  flex-grow: 1;
  flex-shrink: 0;
  @media (max-width: 320px) {
    width: 90%;
  }
`;

const AdjusterDiv = styled.div`
  width: 320px;
  height: 0;
  flex-grow: 1;
  @media (max-width: 320px) {
    width: 90%;
  }
`;

const AsideDiv = styled.aside`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  padding-top: 24px;
  padding-left: 24px;
  background-color: black;
  color: white;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledUL = styled.ul`
  width: 80%;
  color: white;
`;
