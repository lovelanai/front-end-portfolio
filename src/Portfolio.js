import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import "./Portfolio.css";
import kameraproffset from "./assets/img/kameraproffset.png";
import store from "./assets/img/store.png";
import bigmac from "./assets/img/bigmac.png";
import resume from "./assets/img/resume.png";
import asos from "./assets/img/asos.png";
import cumpane from "./assets/img/cumpane.png";
import travelsome from "./assets/img/travelsome.png";
import obeseman from "./assets/img/obeseman.png";
import { GoMarkGithub } from "react-icons/go";
import { GoLink } from "react-icons/go";

const portfolio = [
  {
    name: "Travelsome",
    category: ["all", "react", "javascript", "backend"],
    image: travelsome,
    description: "MongoDB, ExpressJS, React",
    repo: "https://github.com/lovelanai/travelsome",
    demo: "https://github.com/lovelanai/travelsome",
  },
  {
    name: "Kameraproffset",
    category: ["all", "react", "typescript"],
    image: kameraproffset,
    description: "React, Typescript",
    repo: "https://github.com/lovelanai/miniprojekt2-webbshop",
    demo: "https://kameraproffset.netlify.app/",
  },
  {
    name: "Store.se",
    category: ["all", "react", "typescript"],
    image: store,
    description: "React, Typescript",
    repo: "https://github.com/lovelanai/Store.se-webshop",
    demo: "https://storese.netlify.app/",
  },
  {
    name: "BigMac Armageddon",
    category: ["all", "typescript"],
    image: bigmac,
    description: "Typescript, Canvas, p5",
    repo: "https://github.com/lovelanai/big-mac-armageddon",
    demo: "https://bigmacarmageddon.netlify.app/",
  },
  {
    name: "Interactive resume",
    category: ["all", "html", "javascript"],
    image: resume,
    description: "Html, Css, Javascript",
    repo: "https://github.com/lovelanai/Interactive-resume",
    demo: "https://lovelanai.github.io/Interactive-resume/",
  },
  {
    name: "obeseman",
    category: ["all", "html", "javascript"],
    image: obeseman,
    description: "Html, Css, Javacsript",
    repo: "https://github.com/lovelanai/Obese-Man-Adventure",
    demo: "https://lovelanai.github.io/Obese-Man-Adventure/",
  },
  {
    name: "cumpane",
    category: ["all", "html", "javascript"],
    image: cumpane,
    description: "Html, Css, Javascript",
    repo: "https://github.com/lovelanai/Re-design-of-webshop",
    demo: "https://lovelanai.github.io/Re-design-of-webshop/",
  },
  {
    name: "Asos",
    category: ["all", "html"],
    image: asos,
    description: "Html, Css",
    repo: "https://github.com/lovelanai/ASOS.com-recreation",
    demo: "https://lovelanai.github.io/ASOS.com-recreation/",
  },
];
export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <Element name="portfolio">
      <div className="portfolioContainer">
        <div className="portfolioContent">
          <div className="portfolio__labels">
            <a active={filter === "all"} onClick={() => setFilter("all")}>
              All
            </a>
            <a active={filter === "react"} onClick={() => setFilter("react")}>
              react
            </a>
            <a
              active={filter === "typescript"}
              onClick={() => setFilter("typescript")}
            >
              Typescript
            </a>
            <a
              active={filter === "javascript"}
              onClick={() => setFilter("javascript")}
            >
              javascript
            </a>
            <a active={filter === "html"} onClick={() => setFilter("html")}>
              Html
            </a>
            <a
              active={filter === "backend"}
              onClick={() => setFilter("backend")}
            >
              Backend
            </a>
          </div>
          <div className="portfolio__container">
            {projects.map((item) =>
              item.filtered === true ? (
                <div key={item.name} className="project">
                  <div className="content-box">
                    <div className="project-title">
                      <span key={item.name}>{item.name}</span>
                    </div>
                    <div className="project-image">
                      <img key={item.image} src={item.image}></img>
                    </div>
                    <div className="description">
                      <p>Built with: {item.description}</p>
                    </div>

                    <div className="linkIcons">
                      <a href={item.demo}>
                        <GoLink />
                      </a>
                      <a href={item.repo}>
                        <GoMarkGithub />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </Element>
  );
}
