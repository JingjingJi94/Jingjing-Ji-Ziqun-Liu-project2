import "../css/common.css"; // Import common styles
import "../css/rules.css"; // Import the rules.css file

import githubIcon from "../images/github_icon.png";
import linkedinIcon from "../images/linkedin_icon.png";
import emailIcon from "../images/email_icon.svg";

function Rules() {
  return (
    <div>
      <div className="rules-content">
        <h1>Battleship Game Rules</h1>

        <h2>Preparation</h2>
        <p>
          Each player is given two boards of the same size: a player board and
          an enemy board. Each player secretly positions five ships on their
          player board, each with a different size (usually 2 to 5 squares
          long). Each ship can be placed either vertically or horizontally,
          without overlapping.
        </p>

        <h2>Start</h2>
        <p>
          Players take turns targeting grid coordinates on their enemy's board
          and fire a missile at that square.
          <br />
          <br />
          <strong>Hit:</strong> This action will be a{" "}
          <span style={{ color: "darkgreen" }}>hit</span> if any part of an
          enemy's ship is positioned on this square. The firing player must mark
          the square on the enemy's board with a "Check mark." The enemy must
          mark the affected square on their battlefield board with an "X".
          <br />
          <strong>Miss:</strong> This action will be a{" "}
          <span style={{ color: "red" }}>miss</span> if the targeted square has
          no part of any enemy's ship. The firing player must mark the square on
          the enemy's board with an "X." No action is required by the player
          being attacked.
        </p>

        <h2>Winning</h2>
        <p>The first player to sink all of the enemy's ships wins!</p>

        <h2>Credits:</h2>

        <div className="container">
          <img src={githubIcon} alt="GitHub Logo" className="icon-image" />
          <a href="https://github.com/JingjingJi94">GitHub</a>
        </div>

        <div className="container">
          <img src={linkedinIcon} alt="LinkedIn Logo" className="icon-image" />
          <a href="https://www.linkedin.com/in/jingjingji/">LinkedIn</a>
        </div>

        <div className="container">
          <img src={emailIcon} alt="Email Logo" className="icon-image" />
          <a href="mailto:jingjingji@example.com">Email</a>
        </div>
      </div>
    </div>
  );
}

export default Rules;
