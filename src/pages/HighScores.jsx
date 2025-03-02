import React from 'react';
import '../css/common.css';
import '../css/scores.css';

const Scores = () => {
  return (
    <div>
      {/* Sticky Left Sidebar Navbar */}
      <nav className="navbar">
        <div className="navbar-title">Battleship Game</div>
        <ul className="navbar-links">
          <li><a href="../index.html" className="navbar-link">Home</a></li>
          <li><a href="../game/index.html" className="navbar-link">Sample Game</a></li>
          <li><a href="../rules/index.html" className="navbar-link">Game Rules</a></li>
          <li><a href="../scores/index.html" className="navbar-link active">High Scores</a></li>
        </ul>
      </nav>

      <div className="content">
        <div className="score-page">
        <h1>&gt;&gt;&gt;High Scores&lt;&lt;&lt;</h1>
        </div>

        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>IronMan</td>
              <td>15</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>SuperMan</td>
              <td>14</td>
              <td>4</td>
            </tr>
            <tr>
              <td>3</td>
              <td>AmericanCaptain</td>
              <td>12</td>
              <td>8</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Batman</td>
              <td>8</td>
              <td>8</td>
            </tr>
            <tr>
              <td>5</td>
              <td>AquaMan</td>
              <td>7</td>
              <td>10</td>
            </tr>
            <tr>
              <td>6</td>
              <td>BlackPanther</td>
              <td>5</td>
              <td>9</td>
            </tr>
            <tr>
              <td>7</td>
              <td>SpiderMan</td>
              <td>5</td>
              <td>11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Scores;
