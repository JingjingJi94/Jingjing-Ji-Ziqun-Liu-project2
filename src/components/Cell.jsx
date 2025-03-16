// <div
//   key={`${rowIndex}-${colIndex}`}
//   className={`box
//     ${cell === "hit" ? "hit" : ""}
//     ${cell === "miss" ? "miss" : ""}
//     ${cell === "ship" && !props.hideShips ? "ship-cell" : ""}`}
//   onClick={() => props.onCellClick(rowIndex, colIndex)}
// >
//   {cell === "hit"
//     ? "❌"
//     : cell === "miss"
//     ? "✅"
//     : cell === "ship" && !props.hideShips
//     ? "🚢"
//     : ""}
// </div>

export default function Cell({ value, handleCellClick, hideShips }) {
  const getClassName = () => {
    if (value === "hit") return "box hit";
    if (value === "miss") return "box miss";
    if (value === "ship" && !hideShips) return "box ship-cell";
    return "box";
  };

  return (
    <div className={getClassName()} onClick={handleCellClick}>
      {value === "hit"
        ? "❌"
        : value === "miss"
        ? "✅"
        : value === "ship" && !hideShips
        ? "🚢"
        : ""}
    </div>
  );
}
