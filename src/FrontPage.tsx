import ParticlesBg from "particles-bg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Element, Link } from "react-scroll";
import "./FrontPage.css";
import TextAnimation from "./TextAnimation";
import TypeWriter from "./Typewriter";

export default function FrontPage() {
  return (
    <Element name="start">
      <div className="frontPageContainer" id="start">
        <div className="nameContainer">
          <div className="nameContent">
            <span className="nameTitle">Love Lanai</span>
            <TextAnimation />
            <div className="textMobile">
              <TypeWriter />
            </div>

            <div className="location">
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                Gothenburg, Sweden <HiOutlineLocationMarker className="icon" />{" "}
                {"  "}
              </h1>
            </div>
            <div className="portfolioBtnWrapper">
              <Link
                className="portfolioBtn"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={200}
              >
                To Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div className="particlesLayout">
          <ParticlesBg type="cobweb" color="#ffffff" num={30} bg={true} />
        </div>
      </div>
    </Element>
  );
}
