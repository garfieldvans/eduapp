import React, { useEffect, useState } from "react";
import modelTanyaProgram from "../../../assets/tanya_program.png";
import hotProgram from "../../../assets/8 maret 2024.png";

const BestprogramTni = () => {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    fetchProgram();
  }, []);

  const fetchProgram = () => {
    fetch("https://api.edulink-indonesia.com/bestprogramtni")
      .then((res) => res.json())
      .then((data) => {
        setProgram(data);
        (data);
      });
  };
  return (
    <React.Fragment>
      <div className="main-box">
        <div className="main-best-program">
          <h1 className="title-best-program">
            SPECIAL CLASS <br/> TARUNA EDUMATRIX
          </h1>
          <h3 className="hot-program">
            <img className="icon-hot-program" src={hotProgram} alt="" /> HOTS
            PROGRAM
          </h3>
          <div className="parent-best-program">
            <div className="box-best-program">
              {program.map((item, index) => (
                <div className="card-best-program" key={index}>
                  <a href="https://edulink-indonesia.com/lead/edm/chat">
                    <img
                      className="best-program-img"
                      src={"https://api.edulink-indonesia.com/images/" + item.image}
                      alt=""
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a
          className="parent-img-modeltanya-program"
          href="https://wa.me/+6281216365729?text=Halo%20Kak%20Nia%20Saya%20ingin%20tanya%20les%20privat%20untuk%20Kelas%20:%0aMapel%20:%20%0aKurikulum%20:%20%0aWilayah%20:"
        >
          <img className="model-tanya-program" src={modelTanyaProgram} alt="" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default BestprogramTni;
