import About from "./About";
import Contact from "./Contact";
import FrontPage from "./FrontPage";
import "./Main.css";
import Portfolio from "./Portfolio";

export default function Main() {
  return (
    <main>
      <FrontPage />
      <About />
      <Portfolio />

      <Contact />
    </main>
  );
}
