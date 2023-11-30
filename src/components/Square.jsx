export default function Square({ value, win, onSquareClick }) {
  return (
    <button
      className={
        'float-left -mr-0.5 -mt-0.5 h-16 w-16 cursor-pointer select-none border-2 border-solid border-neutral-500 bg-neutral-800 text-2xl text-slate-200' +
        (win ? ' text-green-300' : '')
      }
      onClick={onSquareClick}>
      {value}
    </button>
  );
}
