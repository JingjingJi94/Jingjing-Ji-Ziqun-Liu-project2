import React from "react";
import { useParams, Navigate } from "react-router-dom";
import EasyGame from "./EasyGame";
import NormalGame from "./NormalGame";

export default function Game() {
  const { difficulty } = useParams();

  if (difficulty === "normal") return <NormalGame />;
  else if (difficulty === "easy") return <EasyGame />;
  else return <Navigate to="/" />;
}
