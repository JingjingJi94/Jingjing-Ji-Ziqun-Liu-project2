import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Home Page
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import HighScores from "./pages/HighScores";
import Nav from "./components/Nav";
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
