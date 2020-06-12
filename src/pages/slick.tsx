import React from "react";
import css from "@emotion/css";
import styled from "@emotion/styled";
import Slider from "react-slick";
import Router from "next/router";
import { LIST_WORKS_BASE_INFO } from "../constants/WorksList";

// const SliderWrapperStyle = styled.div``;

function NextArrow(props) {
  const { onClick } = props;
  const StyledNext = styled.div`
    width: 40px;
    height: 100%;
    padding: 0;
    position: absolute;
    top: 50%;
    right: -30px;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    &:hover {
      opacity: 70%;
    }
  `;

  const StyledArrow = styled.div`
    width: 30px;
    height: 30px;
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
    left: -30px;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    &:hover {
      opacity: 70%;
    }
  `;
  const StyledArrow = styled.div`
    width: 30px;
    height: 30px;
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

const SwipeToSlide: React.FC = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const WrapperSliderDiv = styled.div`
    width: 50%;
    height: 100vh;
    margin: 0 auto;
    padding-top: 50px;
  `;

  const CssSlider = css`
    width: 100%;
  `;

  const StyledContents = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const StyledImg = styled.img`
    width: 90%;
    border: solid 3px white;
  `;

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <WrapperSliderDiv>
          <Slider {...settings} css={CssSlider}>
            {LIST_WORKS_BASE_INFO.map((baseInfo) => (
              <div key={baseInfo.author}>
                <StyledContents
                  onClick={() => {
                    Router.push(`${baseInfo.link}`).then(() => {
                      console.log("OK");
                    });
                  }}
                >
                  <StyledImg src={baseInfo.src} />
                </StyledContents>
              </div>
            ))}
          </Slider>
        </WrapperSliderDiv>
      </div>
    </>
  );
};

export default SwipeToSlide;
