import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Testimoni.css";
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
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimoni = () => {
  const [testimoni, setTestimoni] = useState([]);

  useEffect(() => {
    fetchTestimoni();
  }, []);

  const fetchTestimoni = () => {
    fetch("http://localhost:8000/testimoni")
      .then((res) => res.json())
      .then((data) => {
        setTestimoni(data);
        console.log(data);
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
        <div className="slider-top-testi" style={{ background: "" }}>
          <h1 className="title-testimoni">Testimonial</h1>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
          >
            {testimoni.map((item, index) => {
              return (
                <div className="top-slider-testi">
                  <div className="slider" key={index}>
                    <div className="card-testimoni">
                      <img
                        className="foto-testimoni"
                        src={"http://localhost:8000/images/" + item.image}
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

export default Testimoni;
