import { Element } from "react-scroll";
import "./About.css";

export default function About() {
  return (
    <Element name="about">
      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="left">
            <div></div>
          </div>
          <div className="right">
            <div>
              <section>
                <h1>About me</h1>
              </section>
              <section>
                <h2>
                  I'm currently a front-end-developer student at Medieinstitutet
                </h2>
              </section>
              <section>
                <p>
                  I'm a upcoming Front End developer based in Gothenburg. I
                  would describe myselt as a creative developer with a good eye
                  for problemsolving. I´ve been working mostly on client-side
                  coding, but have recently dipped a toe into backend-coding
                  such as ExpressJS and MongoDB.
                </p>
                <br />
                <p>
                  Besides coding I feed my creative side by playing & producing
                  music. and from my job, I I always
                </p>
              </section>

              <section>
                <button className="cvButton">Download CV</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
