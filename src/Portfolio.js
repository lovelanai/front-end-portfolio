import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import "./Portfolio.css";

const portfolio = [
  {
    name: "My best client",
    category: ["all", "react", "typescript"],
  },
  {
    name: "My favorite case",
    category: ["all", "typescript", "javascript"],
  },
  {
    name: "A old job",
    category: ["all", "react"],
  },
  {
    name: "It is a really cool website",
    category: ["all", "react", "javascript"],
  },
  {
    name: "Obeseman",
    category: ["all", "react", "javascript"],
  },
  {
    name: "Something more",
    category: ["all", "backend"],
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
                <span key={item.name}>{item.name}</span>
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
