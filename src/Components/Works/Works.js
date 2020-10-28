import React from 'react';
import './Works.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from 'react-bootstrap';

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };
  return (
    <div className="works m-5">
      <h1 className="text-white text-center p-5">
        Here are some of <span style={{ color: "#7AB259" }}> our works</span>
      </h1>
      <Container>
        <Slider  {...settings}>
          <div className="m-5">
            <img
              src="https://i.imgur.com/IDi4tPp.png"
              alt=""
              height="250"
              width="300" />
          </div>
          <div className="m-5">
            <img
              src="https://i.imgur.com/Cb9dlth.png"
              alt=""
              height="250"
              width="300" />
          </div>
          <div className="m-5">
            <img src="https://i.imgur.com/ulYQN2Q.png"
              alt=""
              height="250"
              width="300" />
          </div>
          <div className="m-5">
            <img src="https://i.imgur.com/VxO57YO.png"
              alt=""
              height="250"
              width="300" />
          </div>
          <div className="m-5">
            <img src="https://i.imgur.com/leEPWnd.png"
              alt=""
              height="250"
              width="300" />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Works;