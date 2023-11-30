import { useState } from 'react';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [playList, setPlayList] = useState([Math.floor(Math.random() * 2)]);
  const currentSquares = history[currentMove];
  const xIsNext = playList[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setPlayList([...playList, !xIsNext]);
  }

  function handleRestart() {
    setHistory([Array(9).fill(null)]);
    setPlayList([!xIsNext]);
    setCurrentMove(0);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    return (
      <li key={move}>
        <button
          className="rounded border-2 border-solid border-neutral-600 bg-neutral-800 px-2 leading-5 text-slate-200"
          onClick={() => jumpTo(move)}>{`Go to move #${move}`}</button>
      </li>
    );
  });

  return (
    <div className="flex justify-center space-x-8">
      <div className="space-y-4">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          handlePlay={handlePlay}
        />
        <button
          className="w-[188px] select-none rounded border-2 border-solid border-neutral-600 bg-neutral-800 text-slate-200"
          onClick={handleRestart}>
          Restart
        </button>
      </div>
      <div>
        <p className="py-4 text-lg">History:</p>
        <ol className="-mt-0.5 space-y-1">{moves}</ol>
      </div>
    </div>
  );
}
