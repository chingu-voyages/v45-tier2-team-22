"use client";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import { useAppContext } from "@/context/AppContext";

import "./themeToggleButton.scss";

function ThemeToggleButton() {
  const { setCurrentTheme } = useAppContext();

  return (
    <div className="toggleWrapper">
      <input
        className="checkbox"
        type="checkbox"
        onClick={(e) =>
          e.currentTarget.checked
            ? setCurrentTheme("light")
            : setCurrentTheme("dark")
        }
      />
      <span className="slider" />
      <div className="iconsContainer">
        <div className="innerWrapper">
          <BsFillSunFill color={"#E0C900"} size={"16px"} />
          <BsFillMoonFill color={"#E0C900"} size={"16px"} />
        </div>
      </div>
    </div>
  );
}

export default ThemeToggleButton;
