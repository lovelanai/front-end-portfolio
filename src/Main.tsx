import ParticlesBg from "particles-bg";

import "./Main.css";
import TextAnimation from "./TextAnimation";

export default function Main() {
  return (
    <div className="mainContainer">
      <div className="nameContent">
        <div>
          <TextAnimation />
        </div>
      </div>
      <div className="particlesLayout">
        <ParticlesBg type="cobweb" color="#ffffff" num={30} bg={true} />
      </div>
    </div>
  );
}
