import React from "react";
import css from "@emotion/css";
import styled from "@emotion/styled";
import Slider from "react-slick";
import Router from "next/router";
import LogoWhite from "../images/LogoWhite.png";
import { LIST_WORKS_BASE_INFO } from "../constants/WorksList";

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
    initialSlide: currentIndex - 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          initialSlide: currentIndex - 1,
        },
      },
    ],
  };

  return (
    <WrapperSlider>
      <Slider {...settings} css={CssSlider}>
        {LIST_WORKS_BASE_INFO.map((baseInfo) => {
          if (baseInfo.author === exclude) {
            return (
              <div key={"home"}>
                <StyledContents
                  onClick={() => {
                    Router.push(`/#${exclude}`).then(() =>
                      window.scrollTo(0, 0)
                    );
                  }}
                >
                  <StyledImg src={LogoWhite} />
                </StyledContents>
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
