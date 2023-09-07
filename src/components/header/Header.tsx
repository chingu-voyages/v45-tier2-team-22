import React from "react";
import Lottie from "lottie-react";
import Search from "../search/Search";
import meteorAnimation from "../../../public/meteor_animation.json";

import "./Header.scss";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="animationWrapper">
        <Lottie animationData={meteorAnimation} loop={true} />
      </div>
      <Search />
    </div>
  );
};

export default Header;
