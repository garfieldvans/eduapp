import React, { useEffect, useState } from "react";
import hotProgram from "../../../../assets/8 maret 2024.png";

const BestprogramTni2 = () => {
  const [program_2, setProgram_2] = useState([]);

  useEffect(() => {
    fetchProgram_2();
  }, []);

  const fetchProgram_2 = () => {
    fetch("https://api.edulink-indonesia.com/bestprogramtni2")
      .then((res) => res.json())
      .then((data) => {
        setProgram_2(data);
        console.log(data);
      });
  };
  return (
    <React.Fragment>
      <div className="main-box-2">
        <div className="main-best-program-2">
          <h1 className="title-best-program-2">
            SPECIAL CLASS <br /> TARUNA EDUMATRIX
          </h1>
          <h3 className="hot-program-2">
            <img className="icon-hot-program-2" src={hotProgram} alt="" /> HOTS
            PROGRAM
          </h3>
          <div className="parent-best-program-2">
            <div className="box-best-program-2">
              {program_2.map((item, index) => (
                <div className="card-halaman-kota" key={index}>
                  <a href="https://edulink-indonesia.com/lead/edm/chat">
                    <img
                      className="best-program-img-2"
                      src={"https://api.edulink-indonesia.com/images/" + item.image}
                      alt=""
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BestprogramTni2;
