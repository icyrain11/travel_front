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
  //useState
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  //获胜者
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  //处理点击事件
  function handleSquareClick(index: number) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="status">{status}</div>
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

function calculateWinner(squares: Array<string>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [x, y, z] = lines[i];
    if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
      return squares[x];
    }
  }

  return null;
}
