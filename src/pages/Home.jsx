import React from "react";
import { Link } from "react-router-dom";
import "../css/common.css";
import shipImage from "../images/ship.png";

function Home() {
  return (
    <div>
      <div className="content">
        <h1 className="title">BATTLESHIP GAME</h1>
        <img src={shipImage} alt="ship image" className="image" />
        <h1>I want to play a</h1>

        <div className="home-button-container">
          <Link to="/game/normal">
            <button className="home-game-button">Normal Game</button>
          </Link>
          <Link to="/game/easy">
            <button className="home-game-button">Free Play Game</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// const Home = () => {
//     return (
//         <div>
//             <h1>Welcome to Battleship!</h1>
//             <p>Select your game mode:</p>
//             <button>Normal Game</button>
//             <button>Free Play Game</button>
//         </div>
//     );
// };

export default Home;
