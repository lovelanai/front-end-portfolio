import { CSSProperties, useEffect, useState } from "react";
import { Link } from "react-scroll";
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
          <Link
            className="headerBtn"
            to="start"
            spy={true}
            smooth={true}
            duration={200}
          >
            Logo
          </Link>
        </div>
        <div>
          <ul>
            <Link
              activeClass="current"
              className="headerBtn"
              to="start"
              spy={true}
              smooth={true}
              duration={200}
            >
              Home
            </Link>
            <Link
              activeClass="current"
              className="headerBtn"
              to="about"
              spy={true}
              smooth={true}
              duration={200}
            >
              About
            </Link>

            <Link
              activeClass="current"
              className="headerBtn"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={200}
            >
              Portfolio
            </Link>
            <Link
              activeClass="current"
              className="headerBtn"
              to="Contact"
              spy={true}
              smooth={true}
              duration={200}
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
