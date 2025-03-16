import React, { useState } from "react";
import Board from "./Board";
import placeShipsRandomly from "./ShipPlacement.js";
import "../../css/game.css";
import Timer from "./Timer";

export default function NormalGame() {
  const [playerBoard, setPlayerBoard] = useState(placeShipsRandomly());
  const [aiBoard, setAiBoard] = useState(placeShipsRandomly());
  const [playerTurn, setPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [resetTrigger, setResetTrigger] = useState(0);

  const resetGame = () => {
    setPlayerBoard(placeShipsRandomly());
    setAiBoard(placeShipsRandomly());
    setPlayerTurn(true);
    setWinner(null);
    setResetTrigger((prev) => prev + 1); // Trigger timer reset
  };

  const eliminatedShips = new Set(); // Track eliminated ships

  const checkShipEliminated = (board, shipId) => {
    if (eliminatedShips.has(shipId)) return; // Stop if already eliminated

    for (let row = 0; row < board.length; row++)
      for (let col = 0; col < board[row].length; col++)
        if (board[row][col] === shipId) return; // Ship still has unhit positions

    eliminatedShips.add(shipId);
    console.log(`Ship ${shipId} eliminated!`);
    checkGameOver();
  };

  const checkGameOver = () => {
    const playerHasShipsLeft = playerBoard.some((row) =>
      row.some((cell) => cell.startsWith("ship-"))
    );
    const aiHasShipsLeft = aiBoard.some((row) =>
      row.some((cell) => cell.startsWith("ship-"))
    );

    if (!aiHasShipsLeft && !winner) {
      setWinner("Player");
      console.log("Game Over! Player Wins!");
    } else if (!playerHasShipsLeft && !winner) {
      setWinner("AI");
      console.log("Game Over! AI Wins!");
    }
  };

  const handlePlayerMove = (row, col) => {
    if (winner || aiBoard[row][col] === "hit" || aiBoard[row][col] === "miss")
      return;

    const newAiBoard = aiBoard.map((rowArr) => [...rowArr]);
    const hitShip =
      typeof newAiBoard[row][col] === "string" &&
      newAiBoard[row][col].startsWith("ship-")
        ? newAiBoard[row][col]
        : null;

    newAiBoard[row][col] = hitShip ? "hit" : "miss";
    setAiBoard(newAiBoard);

    if (hitShip) {
      console.log("Player ");
      checkShipEliminated(newAiBoard, hitShip);
    }

    setPlayerTurn(false);
    setTimeout(handleAiMove, 300);
  };

  const handleAiMove = () => {
    if (winner) return;

    let row, col;
    do {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    } while (
      playerBoard[row][col] === "hit" ||
      playerBoard[row][col] === "miss"
    );

    const newPlayerBoard = playerBoard.map((rowArr) => [...rowArr]);
    const hitShip =
      typeof newPlayerBoard[row][col] === "string" &&
      newPlayerBoard[row][col].startsWith("ship-")
        ? newPlayerBoard[row][col]
        : null;

    newPlayerBoard[row][col] = hitShip ? "hit" : "miss";
    setPlayerBoard(newPlayerBoard);

    if (hitShip) {
      console.log("AI ");
      checkShipEliminated(newPlayerBoard, hitShip);
    }

    setPlayerTurn(true);
  };

  return (
    <div className="game-container">
      <h1>Normal Difficulty</h1>

      {winner && <h2 className="game-over">Game Over! {winner} Won! 🎉</h2>}

      <Timer winner={winner} resetTrigger={resetTrigger} />

      <div className="boards">
        <div>
          <h2>Your Board</h2>
          <Board
            board={playerBoard}
            onCellClick={() => {}}
            hideShips={false}
            gameOver={winner !== null}
          />
        </div>
        <div>
          <h2>Enemy Board</h2>
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
    </div>
  );
}
