import React, { useState } from "react";
import "../css/game.css";
import Cell from "./Cell";

export default function Board(props) {
  // 1. props.board is a 2-D array defined in `ShipPlacement.js`
  // 2. `placeShipsRandomly()` in `ShipPlacement.js` creates the 2-D board
  // 3. `EasyGame.jsx` and `NormalGame.jsx` initiate states using `placeShipsRandomly()`
  // and return Board component with 2-D borad passed as a prop

  return (
    <div>
      <div className="grid-container">
        {props.board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            // nested map loops through the 2-D array board and
            // each cell gets a div

            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              handleCellClick={() => props.onCellClick(rowIndex, colIndex)}
              hideShips={props.hideShips}
            />
          ))
        )}
      </div>
    </div>
  );
}
