import { useState } from "react";
import Board from "./Board";
import Timer from "./Timer";
import placeShipsRandomly from "./ShipPlacement.js";
import "../../css/game.css";

export default function EasyGame() {
  const [aiBoard, setAiBoard] = useState(placeShipsRandomly()); // Only enemy board
  const [winner, setWinner] = useState(null);
  const [resetTrigger, setResetTrigger] = useState(0);

  const checkGameOver = () => {
    const aiHasShipsLeft = aiBoard.some((row) =>
      row.some((cell) => cell.startsWith("ship-"))
    );

    if (!aiHasShipsLeft) {
      setWinner("Player");
    }
  };

  const handlePlayerMove = (row, col) => {
    if (winner || aiBoard[row][col] === "hit" || aiBoard[row][col] === "miss")
      return;

    const newAiBoard = aiBoard.map((rowArr) => [...rowArr]);
    newAiBoard[row][col] = newAiBoard[row][col].startsWith("ship-")
      ? "hit"
      : "miss";
    setAiBoard(newAiBoard);

    checkGameOver(); // No AI turn - free play mode
  };

  const resetGame = () => {
    setAiBoard(placeShipsRandomly());
    setWinner(null);
    setResetTrigger((prev) => prev + 1);
  };

  return (
    <div className="game-container">
      <h1>Free Play Mode</h1>

      {winner && <h2 className="game-over">Game Over! {winner} Won! 🎉</h2>}

      <Timer winner={winner} resetTrigger={resetTrigger} />

      <div className="boards">
        <Board
          board={aiBoard}
          onCellClick={handlePlayerMove}
          hideShips={true}
          gameOver={winner !== null}
        />
      </div>

      <button className="restart-button" onClick={resetGame}>
        🔄 Restart Game
      </button>
    </div>
  );
}
