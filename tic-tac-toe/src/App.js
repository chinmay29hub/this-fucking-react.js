import './App.css';
// import { Box } from './components/Box';
import { Board } from './components/Board';
import React, { useState } from 'react';
import { Scroreboard } from './components/Scroreboard';
import { ResetButton } from './components/ResetButton';

function App() {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null))

  const [xPlaying, setXPlaying] = useState(true)

  const [scores, setScores] = useState({ xScore : 0, oScore : 0 })

  const [gameOver, setGameOver] = useState(false)

  // const board = ["X","X","X","X","X","X","X","X","X"]

  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O"
      } else {
        return value
      }
    })

    const winner = checkWinner(updateBoard)

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores
        oScore += 1
        setScores({ ...scores, oScore })
      } else {
        let { xScore } = scores
        xScore += 1
        setScores({ ...scores, xScore })
      }
    }

    // console.log(scores)

    setBoard(updateBoard)

    setXPlaying(!xPlaying)
  }


  const checkWinner = (board) => {
    for (let i = 0; i<WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i]

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        // console.log(board[x])
        setGameOver(true)
        return board[x]
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <div className='App'>
    <Scroreboard scores= { scores } xPlaying={ xPlaying }/>
    <Board board = { board } onClick={ gameOver ? resetBoard : handleBoxClick }/>
    <ResetButton resetBoard = { resetBoard }/>
    </div>
  );
}

export default App;
