import { Element } from "react-scroll";
import "./Contact.css";
export default function Contact() {
  const text1 = ` (Time `;

  const arrow = `> `;
  const time1 = `01`;
  const time12 = `00`;
  const sleep = `
  
  LoveIsAsleep`;

  const arrowfnc = ` = ()`;
  const arrowfnc2 = ` =>`;
  const text2 = `Time`;
  const arrow2 = ` <`;
  const time2 = ` 08`;
  const time21 = `00`;

  const text3 = `

} `;

  const text4 = `
}`;

  const text5 = ` {`;

  return (
    <Element name="Contact">
      <div className="contactContainer">
        <div className="contactContent">
          <pre className="contactForm">
            <code className="contactFunction">
              <p>
                const <span>ContactInfo</span>
                <span>{arrowfnc}</span>
                <span>{arrowfnc2}</span>
                <span> {text5}</span>
              </p>
              <br />
              <span>If</span>
              {text1}
              <span>{arrow}</span>
              <span>{time1}</span>:<span>{time12}</span>
              <span> || </span>
              {text2}
              <span>{arrow2}</span>
              <span>{time2}</span>:<span>{time21}</span>)<span>{text5}</span>
              {sleep} <span>===</span> <span>True</span> <span>;</span>
            </code>
            <code className="contactElse">
              <span>{text3}</span>
              <span>else</span>
              <br />
              <br />
            </code>
            <code className="elseForm">
              Phone <span>:</span> <span>073</span>
              <span>-</span>
              <span>077 21 42</span>
              <span>;</span>
              <p>
                Email<span>:</span>{" "}
                <a href="mailto:love.lanai@medieinstitutet.se">
                  "love.lanai@medieinstitutet.se"
                </a>
                <span>;</span>
              </p>
              <p>
                Github<span>:</span>{" "}
                <a href="https://github.com/lovelanai">
                  "https://github.com/lovelanai"
                </a>
                <span>;</span>
              </p>
              <span>{text4}</span>
            </code>
          </pre>
        </div>
      </div>
    </Element>
  );
}
