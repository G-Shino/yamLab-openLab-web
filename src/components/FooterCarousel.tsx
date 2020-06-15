import React from "react";
import css from "@emotion/css";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import Slider from "react-slick";
import Router from "next/router";
import { LIST_WORKS_BASE_INFO } from "../constants/WorksList";
const Logo = require("../images/Logo.svg");

function NextArrow(props) {
  const { onClick } = props;

  const StyledNext = styled.div`
    width: 40px;
    height: 100%;
    padding: 0;
    position: absolute;
    top: 50%;
    right: -20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transform: translateY(-50%);
    &:hover {
      opacity: 70%;
    }
  `;
  const StyledArrow = styled.div`
    width: 10px;
    height: 10px;
    border: 3px solid;
    border-color: white white transparent transparent;
    transform: rotate(45deg);
    align-items: center;
  `;

  return (
    <div onClick={onClick}>
      <StyledNext>
        <StyledArrow />
      </StyledNext>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;

  const StyledPrev = styled.div`
    width: 40px;
    height: 100%;
    padding: 0;
    position: absolute;
    top: 50%;
    left: -20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transform: translateY(-50%);
    &:hover {
      opacity: 70%;
    }
  `;
  const StyledArrow = styled.div`
    width: 10px;
    height: 10px;
    border: 3px solid;
    border-color: white white transparent transparent;
    transform: rotate(-135deg);
    align-items: center;
  `;

  return (
    <div onClick={onClick}>
      <StyledPrev>
        <StyledArrow />
      </StyledPrev>
    </div>
  );
}

interface Props {
  exclude: string;
}

const FooterCarousel: React.FC<Props> = ({ exclude }) => {
  const currentIndex = LIST_WORKS_BASE_INFO.findIndex(
    (baseInfo) => baseInfo.author === exclude
  );
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: currentIndex - 2 + 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          initialSlide: currentIndex,
        },
      },
    ],
  };

  return (
    <WrapperSlider>
      <Slider {...settings} css={CssSlider}>
        <div key={"home"}>
          <StyledContents
            onClick={() => {
              Router.push(`/`).then(() => window.scrollTo(0, 0));
            }}
          >
            <StyledImg src={Logo} style={{ width: "85%" }} />
          </StyledContents>
        </div>
        {LIST_WORKS_BASE_INFO.map((baseInfo) => {
          if (baseInfo.author === exclude) {
            return (
              <div key={baseInfo.author}>
                <StyledCurrentContents
                  css={CSSBlink}
                  onClick={() => {
                    Router.push(`${baseInfo.link}`).then(() =>
                      window.scrollTo(0, 0)
                    );
                  }}
                >
                  <StyledCurrentImg src={baseInfo.src} />
                </StyledCurrentContents>
              </div>
            );
          }
          return (
            <div key={baseInfo.author}>
              <StyledContents
                onClick={() => {
                  Router.push(`${baseInfo.link}`).then(() =>
                    window.scrollTo(0, 0)
                  );
                }}
              >
                <StyledImg src={baseInfo.src} />
              </StyledContents>
            </div>
          );
        })}
      </Slider>
    </WrapperSlider>
  );
};

export default FooterCarousel;

const WrapperSlider = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1000px) {
    width: 100%;
  }
`;

const CssSlider = css`
  width: 100%;
`;

const StyledContents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 90%;
    padding-top: 90%;
    position: absolute;
    background-color: white;
    z-index: 0;
  }
`;

const StyledImg = styled.img`
  width: 90%;
  border: solid 3px;
  border-color: transparent;
  &:hover {
    border-color: white;
  }
  z-index: 2;
`;

const Blink = keyframes`
0% {opacity:0.3;}
50% {opacity: 1;}
100% {opacity:0.3;}
`;

const CSSBlink = css`
  animation: ${Blink} 2s linear infinite;
`;

const StyledCurrentContents = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StyledCurrentImg = styled.img`
  width: 90%;
  border: solid 3px;
  border-color: transparent;
`;
