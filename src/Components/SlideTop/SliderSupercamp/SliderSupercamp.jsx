import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSupercamp = () => {
  const [sliderHeader, setSliderHeader] = useState([]);
  const [sliderHeader_2, setSliderHeader_2] = useState([]);

  useEffect(() => {
    fetchsliderHeader();
    fetchsliderHeader_2();
  }, []);

  const fetchsliderHeader = async() => {
    await fetch("https://api.edulink-indonesia.com/sliderheadersupercamp")
      .then((res) => res.json())
      .then((data) => {
        setSliderHeader(data);
      });
  };

  const fetchsliderHeader_2 = async() => {
    await fetch("https://api.edulink-indonesia.com/sliderheadersupercamp")
      .then((res) => res.json())
      .then((data) => {
        setSliderHeader_2(data);
      });
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "button-slider",
  };

  return (
    <React.Fragment>
      <div className="slider-top" style={{ background: "" }}>
        <Slider {...settings}>
          {sliderHeader.map((item, index) => {
            return (
              <div className="top-slider">
                <div className="slider" key={index}>
                  <a href="https://edulink-indonesia.com/lead/edm/chat">
                    <img
                      src={
                        "https://api.edulink-indonesia.com/images/" + item.image
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="slider-top-2" style={{ background: "" }}>
        <Slider {...settings}>
          {sliderHeader_2.map((item, index) => {
            return (
              <div className="top-slider">
                <div className="slider" key={index}>
                  <a href="https://edulink-indonesia.com/lead/edm/chat">
                    <img
                      src={
                        "https://api.edulink-indonesia.com/images/" + item.image
                      }
                      alt=""
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default SliderSupercamp;
