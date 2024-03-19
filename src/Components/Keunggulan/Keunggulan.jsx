import React, { useEffect, useState } from "react";
import "./Keunggulan.css";
import keunggulanIcon from "../../assets/keunggulan.png";

const Keunggulan = () => {
  const [keunggulan, setKeunggulan] = useState([]);

  useEffect(() => {
    fetchKeunggulan();
  }, []);

  const fetchKeunggulan = () => {
    fetch("http://localhost:8000/keunggulan")
      .then((res) => res.json())
      .then((data) => {
        setKeunggulan(data);
        console.log(data);
      });
  };

  return (
    <React.Fragment>
      <div className="parent-box-keunggulan">
        <h1 className="title-keunggulan">
          <img className="icon-keunggulan" src={keunggulanIcon} alt="" />
          Keunggulan
        </h1>
        <div className="parent-card-keunggulan">
          {keunggulan.map((item, index) => (
              <img
              key={index}
                className="keunggulan-img"
                src={"http://localhost:8000/images/" + item.image}
                alt=""
              />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Keunggulan;
