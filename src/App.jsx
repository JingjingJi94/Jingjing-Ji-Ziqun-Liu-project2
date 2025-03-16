import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Home Page
import Rules from "./pages/Rules";
import Game from "./pages/game/Game";
import HighScores from "./pages/HighScores";
import Nav from "./pages/Nav";
import "./css/game.css";
import "./css/App.css";

function App() {
  return (
    <Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/:difficulty" element={<Game />} />
        <Route path="/highscores" element={<HighScores />} />
      </Routes>
    </Nav>
  );
}

export default App;
