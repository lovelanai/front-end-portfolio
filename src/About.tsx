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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore,
                </h2>
              </section>
              <section>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  consequatur a autem esse suscipit quae vel quaerat maxime
                  dolore eos voluptate earum, iste possimus. Ad necessitatibus
                  porro magni vitae odit.
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
