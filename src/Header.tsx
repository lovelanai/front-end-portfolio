import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <div>
          <button>
            <a href="#start">Logo</a>
          </button>
        </div>
        <div>
          <ul>
            <button>
              <a href="#start">Home</a>
            </button>
            <button>
              <a href="#about">About</a>
            </button>
            <button>
              <a href="#portfolio">Portfolio</a>
            </button>
            <button>
              <a href="#contact">Contact</a>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
