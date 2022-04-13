import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <div>
          <button>Logo</button>
        </div>
        <div>
          <ul>
            <button>Home</button>
            <button>About</button>
            <button>Portfolio</button>
            <button>Contact</button>
          </ul>
        </div>
      </div>
    </div>
  );
}
