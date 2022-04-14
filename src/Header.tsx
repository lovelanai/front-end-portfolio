import "./Header.css";
import { useState } from "react";
import { start } from "repl";
import { url } from "inspector";

export default function Header() {
  const [style, setStyle] = useState("headerContent");

  const changeStyle = () => {
    console.log("you clicked");

    setStyle("headerContent headerDark");
  };

  const revertChangeStyle = () => {
    setStyle("headerContent headerTransparent");
  };

  return (
    <div className="headerContainer">
      <div className={style}>
        <div>
          <button onClick={revertChangeStyle}>
            <a href="#start">Logo</a>
          </button>
        </div>
        <div>
          <ul>
            <button onClick={revertChangeStyle}>
              <a href="#start">Home</a>
            </button>
            <button onClick={changeStyle}>
              <a href="#about">About</a>
            </button>
            <button>
              <a href="#portfolio">Portfolio</a>
            </button>
            <button>
              <a href="#contact">Contact</a>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
