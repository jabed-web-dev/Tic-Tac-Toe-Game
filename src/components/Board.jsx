import Square from './Square';

export default function Board({ xIsNext, squares, handlePlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    handlePlay(nextSquares);
  }

  const [winner, a, b, c] = calculateWinner(squares) ?? [];
  let status;
  if (winner) {
    status = <span className="text-green-500">{`Winner: ${winner}`}</span>;
  } else if (calculateDraw(squares)) {
    status = <span className="text-yellow-500">Match Draw</span>;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  function winning(i) {
    return a === i || b === i || c === i;
  }

  return (
    <div>
      <p className="py-4 text-lg">{status}</p>
      <div className="after:clear-both after:table after:content-['']">
        <Square
          value={squares[0]}
          win={winning(0)}
          onSquareClick={() => handleClick(0)}
        />
        <Square
          value={squares[1]}
          win={winning(1)}
          onSquareClick={() => handleClick(1)}
        />
        <Square
          value={squares[2]}
          win={winning(2)}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="after:clear-both after:table after:content-['']">
        <Square
          value={squares[3]}
          win={winning(3)}
          onSquareClick={() => handleClick(3)}
        />
        <Square
          value={squares[4]}
          win={winning(4)}
          onSquareClick={() => handleClick(4)}
        />
        <Square
          value={squares[5]}
          win={winning(5)}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="after:clear-both after:table after:content-['']">
        <Square
          value={squares[6]}
          win={winning(6)}
          onSquareClick={() => handleClick(6)}
        />
        <Square
          value={squares[7]}
          win={winning(7)}
          onSquareClick={() => handleClick(7)}
        />
        <Square
          value={squares[8]}
          win={winning(8)}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </div>
  );
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
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], a, b, c];
    }
  }
  return null;
}

function calculateDraw(squares) {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      return false;
    }
  }
  return true;
}
