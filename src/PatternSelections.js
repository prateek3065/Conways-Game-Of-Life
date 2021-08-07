import React from "react";
export default function PatternSelections({
  isModalForPatterSelectionOpen,
  setOpenModalForPatternSelection,
  patternSelectedFromModal,
  setPatternSelectedFromModal,
  Patterns,
  setreRender,
  grid,
  setGrid,
}) {
  function handleClick(patternNmae) {
    //setPatternSelectedFromModal(patternNmae);
    var newGrid = grid;
    for (let i = 1; i < grid.length - 2; i++) {
      for (let j = 1; j < grid[0].length - 2; j++) newGrid[i][j] = 0;
    }
    setGrid(newGrid);
    patternSelectedFromModal = patternNmae;
    setOpenModalForPatternSelection(false);
    setreRender((prev) => prev + 1);
    Patterns({ grid, setGrid, setreRender, patternSelectedFromModal });
  }
  return (
    <div>
      <div id="pattern-selection">
        <button className="buttons" onClick={() => handleClick("gosper")}>
          gosper
        </button>
        <button className="buttons" onClick={() => handleClick("pulsar")}>
          pulsar
        </button>
        <button className="buttons" onClick={() => handleClick("blinker")}>
          blinker
        </button>
        <button className="buttons" onClick={() => handleClick("beacon")}>
          beacon
        </button>
        <button
          className="buttons"
          onClick={() => handleClick("pentadecathlon")}
        >
          pentadecathlon
        </button>
        <button className="buttons" onClick={() => handleClick("glider")}>
          glider
        </button>
        <button className="buttons" onClick={() => handleClick("lwss")}>
          lawss
        </button>
        <button className="buttons" onClick={() => handleClick("mwss")}>
          mawss
        </button>
        <button className="buttons" onClick={() => handleClick("hwss")}>
          hwss
        </button>
      </div>
    </div>
  );
}
