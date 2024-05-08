import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 896, min: 414 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 667, min: 375 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 740, min: 360 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 882, min: 344 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonitni = () => {
  const [testimonitni, setTestimonitni] = useState([]);

  useEffect(() => {
    fetchTestimonitni();
  }, []);

  const fetchTestimonitni = () => {
    fetch("https://api.edulink-indonesia.com/testimonitni")
      .then((res) => res.json())
      .then((data) => {
        setTestimonitni(data);
        (data);
      });
  };

  //   const settings = {
  //     responsive: {responsive},
  //     dots: false,
  //     autoplay: true,
  //     autoplaySpeed: 1500,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     className: "button-slider",
  //   };
  return (
    <React.Fragment>
      <div className="box-testi">
        <div className="slider-top-testi">
          <h1 className="title-testimoni">TESTIMONI SISWA</h1>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
          >
            {testimonitni.map((item, index) => {
              return (
                <div className="top-slider-testi">
                  <div className="slider" key={index}>
                    <div className="card-testimoni">
                      <img
                        className="foto-testimoni"
                        src={"https://api.edulink-indonesia.com/images/" + item.image}
                        alt=""
                      />
                      <h1 className="nama-siswa">{item.name_siswa}</h1>
                      <h1 className="judul-testimoni">{item.judul_testi}</h1>
                      <img
                        className="star-5"
                        src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
                        alt=""
                      />
                      <span className="petik-quot">
                        <FontAwesomeIcon
                          className="icon-quote"
                          icon={faQuoteLeft}
                        />
                      </span>
                      <h1 className="desk-testi">{item.deskripsi}</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonitni;