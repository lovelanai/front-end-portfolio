import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [header, setHeader] = useState("headerContent");

  const height = window.innerHeight - 5;

  const listenScrollEvent = () => {
    if (window.scrollY < height) {
      return setHeader("headerContent");
    } else if (window.scrollY > height) {
      return setHeader("headerContent headerDark");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div className="headerContainer">
      <div id="headerColors" className={header}>
        <div>
          <button>
            <a href="#start">Logo</a>
          </button>
        </div>
        <div>
          <ul>
            <button>
              <a href="#start">Home</a>
            </button>
            <button>
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
