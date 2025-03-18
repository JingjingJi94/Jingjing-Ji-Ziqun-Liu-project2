import { Link, useLocation } from "react-router-dom";
import "../css/common.css";

const Nav = ({ children }) => {
  const location = useLocation(); // Get the current URL path

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-title">Battleship Game</div>
        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              className={`navbar-link ${
                location.pathname === "/" ? "selected" : ""
              }`}
            >
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link
              to="/game/normal"
              className={`navbar-link ${
                location.pathname === "/game/normal" ? "selected" : ""
              }`}
            >
              <i className="fas fa-gamepad"></i> Normal Game
            </Link>
          </li>
          <li>
            <Link
              to="/game/easy"
              className={`navbar-link ${
                location.pathname === "/game/easy" ? "selected" : ""
              }`}
            >
              <i className="fas fa-play-circle"></i> Free Play Game
            </Link>
          </li>
          <li>
            <Link
              to="/rules"
              className={`navbar-link ${
                location.pathname === "/rules" ? "selected" : ""
              }`}
            >
              <i className="fas fa-book"></i> Game Rules
            </Link>
          </li>
          <li>
            <Link
              to="/highscores"
              className={`navbar-link ${
                location.pathname === "/highscores" ? "selected" : ""
              }`}
            >
              <i className="fas fa-trophy"></i> High Scores
            </Link>
          </li>
        </ul>
      </nav>

      {/* This is where each page's content will be rendered */}
      <div className="AllPageContent">{children}</div>
    </div>
  );
};

export default Nav;
