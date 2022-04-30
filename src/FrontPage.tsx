import ParticlesBg from "particles-bg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Element, Link } from "react-scroll";
import "./FrontPage.css";
import TextAnimation from "./TextAnimation";

export default function FrontPage() {
  return (
    <Element name="start">
      <div className="frontPageContainer" id="start">
        <div className="nameContainer">
          <div className="nameContent">
            <span>Love Lanai</span>
            <TextAnimation />
            <h1 className="textMobile">Front End Developer</h1>
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
