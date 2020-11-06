import React from "react";
import "./tile.scss";

export default function Tile({ value, handleClick }) {
  return (
    <div className="tile" onClick={handleClick}>
      {value}
    </div>
  );
}
