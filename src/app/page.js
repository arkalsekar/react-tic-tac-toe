"use client";
import "./globals.css";
import styles from "./page.module.css";
import Square from "./lib/square";
import { useState, useEffect } from "react";

export default function Home() {
  let [squares, setSquares] = useState(Array(9).fill(null));
  let [turn, setTurn] = useState("X");
  let status;

  
  let clear = () => {
    squares.fill(null);
    squares.fill(null);
    console.log(squares);
  }
  
  let winner = calculateWinner(squares);

  if (winner) {
    status = "Winner Winner Chicken Dinner for " + winner;
  } 
  else {
    status = "The Turn for " + turn;
  }

  function handleClick(id) {
    // Setting the Data in the square
    let nextSquares = squares.slice();
    nextSquares[id] = turn;
    setSquares(nextSquares);
    turn == "X" ? setTurn("0") : setTurn("X");

    console.log("User Clicked")
    console.log(status);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  return (
    <>
    {/* <h2> { (winner == null) ? " Currently it is the Turn of " + turn : ("Winner : " + winner && squares.fill(null)) } </h2> */}
    <h2> {status} </h2> 

    <button className={styles.clear} onClick={clear}> Clear </button>

      <div className={styles.mainBoard}>
        <div className={styles.boardRow}>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>

        <div className={styles.boardRow}>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>

        <div className={styles.boardRow}>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>


      </div>
    </>
  );
}
