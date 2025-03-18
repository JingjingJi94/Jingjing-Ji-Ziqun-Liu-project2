import { createContext } from "react";

export const GameContext = createContext();

export default function GameAppProvider(props) {
  const globalData = {};
  return (
    <GameContext.Providr value={globalData}>
      {props.children}
    </GameContext.Providr>
  );
}
