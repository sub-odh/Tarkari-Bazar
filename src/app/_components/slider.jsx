"use client";

import React from "react";

import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./sliderItem";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slider = () => {
  return (
    <div>
      <SlickSlider {...settings}>
        <SliderItem
          title="Fresh & Healthy Organic Food"
          subTitle={<Discount discount={40} />}
        />
        <SliderItem
          title="Fresh & Healthy Organic Food"
          subTitle={<Discount discount={20} />}
        />
        <SliderItem
          title="Fresh & Healthy Organic Food"
          subTitle={<Discount discount={48} />}
        />
        <SliderItem
          title="Fresh & Healthy Organic Food"
          subTitle={<Discount discount={48} />}
        />
      </SlickSlider>
    </div>
  );
};

export default Slider;

const Discount = (props) => {
  return (
    <p className="text-body-xxl text-white text-opacity-60 border-l-4 border-success pl-3">
      Sale Up to <br /> <span className="text-white">{props.discount}</span>%
      off
    </p>
  );
};
