/* eslint-disable no-unused-expressions */

import React, { useEffect, useMemo, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useParams } from "react-router-dom";

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

const MasterteacherTni = () => {
  const [guru, setGuru] = useState([]);
  const [tags, setTags] = useState([]);
  const { id } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchGuru();
    fetchTags();
  }, [id]);

  const fetchGuru = () => {
    fetch(`https://api.edulink-indonesia.com/gurutni?&tags=${tags}`)
      .then((res) => res.json())
      .then((data) => {
        setGuru(data);
      });
  };

  const fetchTags = () => {
    fetch(`https://api.edulink-indonesia.com/tags`)
      .then((res) => res.json())
      .then((data) => {
        setTags(data);
      });
  };

  const handleTags = (tags) => {
    fetch(`https://api.edulink-indonesia.com/gurutni?limit=10&tags=${tags}`)
      .then((res) => res.json())
      .then((data) => {
        setGuru(data);
      });
  };

  return (
    <div className="parent-slider-tutor">
      <h1 className="title-tutor">MASTER TEACHER BERPENGALAMAN</h1>
      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {guru.map((item, index) => {
            return (
              <div className="slider" key={index}>
                <div className="card-master-teacher">
                  <img
                    className="background-tutor"
                    src={"https://api.edulink-indonesia.com/images/" + item.image2}
                    alt="asdasd"
                  />
                  <div className="content-tutor">
                    <h1 className="judul-tutor">{item.topTitle}</h1>
                    <div className="child-content-tutor">
                      <img
                        className="foto-tutor"
                        src={"https://api.edulink-indonesia.com/images/" + item.image}
                        alt=""
                      />
                      <div>
                        <p>{item.name}</p>
                        <p>{item.deskripsi}</p>
                      </div>
                    </div>
                    <div className="ratting-tutor">
                      <img
                        className="star-5"
                        src="https://static.vecteezy.com/system/resources/previews/003/355/389/original/five-5-star-rank-sign-illustration-free-vector.jpg"
                        alt=""
                      />
                      <span>5.0</span>
                    </div>
                    <div className="univ-tutor">
                      <FontAwesomeIcon icon={faUniversity} />
                      <h1 className="desk-tutor">{item.universitas}</h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default MasterteacherTni;
