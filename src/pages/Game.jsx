import React from 'react';
import { useParams } from 'react-router-dom';

function Game() {
  const { difficulty } = useParams();

  return (
    // <div>Hello</div>
    <div>
      <h1>Game Difficulty: {difficulty}</h1>
      <p>Welcome to the {difficulty} difficulty game!</p>
    </div>
  );
}

export default Game;
