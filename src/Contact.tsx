import { Element } from "react-scroll";
import "./Contact.css";
export default function Contact() {
  const text1 = ` (Time > 01:00`;

  const text2 = `Time < 08:00){
    
    `;

  const text3 = `
} 

{ `;

  const text4 = `

}`;

  const text5 = `{`;

  return (
    <Element name="Contact">
      <div className="contactContainer">
        <div className="contactContent">
          <pre className="contactForm">
            <code className="contactFunction">
              <p>
                Function <span>ContactInfo</span>
                <span>() {text5}</span>
              </p>
              <br />
              <span>If</span>
              {text1}
              <span> || </span>
              {text2}
              LoveIsAsleep === <span>True</span>
            </code>
            <code className="contactElse">
              {text3}
              <span>else</span>
            </code>
            <code>
              <p>Phone: 073-077 21 42;</p>
              <p>
                Email:{" "}
                <a href="mailto:love.lanai@medieinstitutet.se">
                  love.lanai@medieinstitutet.se
                </a>
                ;
              </p>
              <p>
                Github:
                <a href="https://github.com/lovelanai">
                  https://github.com/lovelanai
                </a>
                ;
              </p>
              <p>{text4}</p>
            </code>
          </pre>
        </div>
      </div>
    </Element>
  );
}
