import React from 'react';
import { Link } from 'react-router-dom';
import '../css/common.css';
import shipImage from '../images/ship.png';


function Home() {
  return (
    <div>
      {/* Sticky Left Sidebar Navbar */}
      <nav className="navbar">
        <div className="navbar-title">Battleship Game</div>
        <ul className="navbar-links">
          <li><a href="index.html" className="navbar-link active">Home</a></li>
          <li><a href="game/index.html" className="navbar-link">Sample Game</a></li>
          <li><a href="rules/index.html" className="navbar-link">Game Rules</a></li>
          <li><a href="scores/index.html" className="navbar-link">High Scores</a></li>
        </ul>
      </nav> 

      <div className="content">
        <h1 className="title">Battleship Game</h1>
        <img src={shipImage} alt="ship image" className="image" />
        <h1>I want to play a:</h1>
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
