export default function placeShipsRandomly(size = 10) {
  const ships = [5, 4, 3, 3, 2]; // Ship sizes
  const board = Array.from({ length: size }, () => Array(size).fill("empty"));
  let shipId = 1; // Track different ships

  const directions = [
    [0, 1], // Right
    [1, 0], // Down
  ];

  const isValidPlacement = (row, col, shipSize, direction) => {
    const [dx, dy] = direction;
    for (let i = 0; i < shipSize; i++) {
      const newRow = row + i * dx;
      const newCol = col + i * dy;
      if (
        newRow >= size ||
        newCol >= size ||
        board[newRow][newCol] !== "empty"
      ) {
        return false;
      }
    }
    return true;
  };

  for (const shipSize of ships) {
    let placed = false;
    while (!placed) {
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);
      const direction =
        directions[Math.floor(Math.random() * directions.length)];

      if (isValidPlacement(row, col, shipSize, direction)) {
        for (let i = 0; i < shipSize; i++) {
          board[row + i * direction[0]][
            col + i * direction[1]
          ] = `ship-${shipId}`;
        }
        shipId++; // Increment ship ID for tracking
        placed = true;
      }
    }
  }

  return board;
}
