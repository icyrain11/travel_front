import { MouseEventHandler, useState } from "react";
import "./index.css";
import React from "react";

export default function Index() {
  return (
    <>
      <Board></Board>
    </>
  );
}

interface SquareProps {
  value: string;
  onSquareClick: MouseEventHandler<HTMLButtonElement>;
}

function Square({ value, onSquareClick }: SquareProps): React.ReactElement {
  return (
    <>
      <button className="sqare" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}

function Board(): React.ReactElement {
  const [squares, setSquares] = useState(Array(9).fill(""));

  //处理点击事件
  function handleSquareClick(index: number) {
    const nextSquare = squares.slice();
    nextSquare[index] = "X";
    setSquares(nextSquare);
  }

  return (
    <>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleSquareClick(0)}
        ></Square>
        <Square
          value={squares[1]}
          onSquareClick={() => handleSquareClick(1)}
        ></Square>
        <Square
          value={squares[2]}
          onSquareClick={() => handleSquareClick(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleSquareClick(3)}
        ></Square>
        <Square
          value={squares[4]}
          onSquareClick={() => handleSquareClick(4)}
        ></Square>
        <Square
          value={squares[5]}
          onSquareClick={() => handleSquareClick(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleSquareClick(6)}
        ></Square>
        <Square
          value={squares[7]}
          onSquareClick={() => handleSquareClick(7)}
        ></Square>
        <Square
          value={squares[8]}
          onSquareClick={() => handleSquareClick(8)}
        ></Square>
      </div>
    </>
  );
}
