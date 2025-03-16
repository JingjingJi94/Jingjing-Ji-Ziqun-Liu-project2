export function createEmptyBoard(size = 10) {
  return Array.from({ length: size }, () => Array(size).fill("empty"));
}

export function isValidPlacement(board, row, col, shipSize, direction) {
  const [dx, dy] = direction;
  for (let i = 0; i < shipSize; i++) {
    const newRow = row + i * dx;
    const newCol = col + i * dy;

    if (
      newRow >= board.length ||
      newCol >= board[0].length ||
      board[newRow][newCol] !== "empty"
    ) {
      return false;
    }
  }
  return true;
}

export function placeShip(board, row, col, shipSize, direction, shipId) {
  const newBoard = board.map((row) => [...row]); // Create a copy of the board
  for (let i = 0; i < shipSize; i++) {
    newBoard[row + i * direction[0]][col + i * direction[1]] = `ship-${shipId}`;
  }
  return newBoard;
}

export function getRandomPosition(size) {
  return [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
}

export function getRandomDirection() {
  const directions = [
    [0, 1], // Right
    [1, 0], // Down
  ];
  return directions[Math.floor(Math.random() * directions.length)];
}

export default function placeShipsRandomly(size = 10) {
  const ships = [5, 4, 3, 3, 2];
  let board = createEmptyBoard(size);
  let shipId = 1;

  for (const shipSize of ships) {
    let placed = false;
    while (!placed) {
      const [row, col] = getRandomPosition(size);
      const direction = getRandomDirection();

      if (isValidPlacement(board, row, col, shipSize, direction)) {
        board = placeShip(board, row, col, shipSize, direction, shipId);
        shipId++;
        placed = true;
      }
    }
  }
  return board;
}
