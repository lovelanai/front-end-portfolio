import ParticlesBg from "particles-bg";

import "./Main.css";

export default function Main() {
  return (
    <div className="mainContainer">
      <div className="nameContent">
        <div>
          <h1>Love Lanai</h1>
          <h2>Front End Developer</h2>
        </div>
      </div>
      <div className="particlesLayout">
        <ParticlesBg type="cobweb" color="#ffffff" num={30} bg={true} />
      </div>
    </div>
  );
}
