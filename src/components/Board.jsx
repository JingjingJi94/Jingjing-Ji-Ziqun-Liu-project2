import React, { useState } from "react";
import "../css/game.css";

const Board = (props) => {
  return (
    <div>
      <div className="grid-container">
        {props.board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`box 
                ${cell === "hit" ? "hit" : ""} 
                ${cell === "miss" ? "miss" : ""} 
                ${cell === "ship" && !props.hideShips ? "ship-cell" : ""}`}
              onClick={() => props.onCellClick(rowIndex, colIndex)}
            >
              {cell === "hit"
                ? "❌"
                : cell === "miss"
                ? "✅"
                : cell === "ship" && !props.hideShips
                ? "🚢"
                : ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
