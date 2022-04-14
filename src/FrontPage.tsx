import ParticlesBg from "particles-bg";
import { HiOutlineLocationMarker } from "react-icons/hi";

import "./FrontPage.css";
import TextAnimation from "./TextAnimation";

export default function FrontPage() {
  return (
    <div className="frontPageContainer">
      <div className="nameContainer">
        <div className="nameContent">
          <span>Love Lanai</span>
          <TextAnimation />
          <div className="location">
            <h1> Gothenburg, Sweden</h1>
            <HiOutlineLocationMarker className="icon" /> {"  "}
          </div>
          <button>To Portfolio</button>
        </div>
      </div>
      <div className="particlesLayout">
        <ParticlesBg type="cobweb" color="#ffffff" num={30} bg={true} />
      </div>
    </div>
  );
}
