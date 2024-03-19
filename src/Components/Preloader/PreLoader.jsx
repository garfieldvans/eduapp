import React, { useEffect } from "react";
import "./PreLoader.css";
import { preLoaderAnim } from "../Animation/Animation";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <React.Fragment>
        <div className="preloader">
          <div className="texts-container">
            <span>Integrity | </span>
            <span>Expert | </span>
            <span>Synergy</span>
          </div>
        </div>
    </React.Fragment>
  );
};

export default PreLoader;
