// CellLine.jsx
export function CellLine({ left, right }) {
    return (
      <>
        <div className="cell-left font-mono text-sm text-right leading-[1.4rem] select-none">
          {left}
        </div>
        <div className="cell-spacer" />
        <div className="cell-right min-w-0">
          {right}
        </div>
      </>
    );
  }