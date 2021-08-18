const PATTERN_GRIDS = {
  gosper: {
    grid: [
      [0, -6],
      [-1, -5],
      [-1, -6],
      [-1, -7],
      [-2, -4],
      [-2, -8],
      [-3, -6],
      [-4, -3],
      [-5, -3],
      [-6, -4],
      [-7, -5],
      [-7, -6],
      [-7, -7],
      [-4, -9],
      [-5, -9],
      [-6, -8],
      [-16, -6],
      [-16, -7],
      [-17, -6],
      [-17, -7],
      [3, -7],
      [3, -8],
      [3, -9],
      [4, -7],
      [4, -8],
      [4, -9],
      [5, -6],
      [5, -10],
      [7, -5],
      [7, -6],
      [7, -10],
      [7, -11],
      [17, -8],
      [17, -9],
      [18, -8],
      [18, -9],
    ],
    min_rows: 22,
    min_cols: 36,
  },
  pulsar: {
    grid: [
      [-1, 2],
      [-1, 3],
      [-1, 4],
      [-1, -2],
      [-1, -3],
      [-1, -4],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, -2],
      [1, -3],
      [1, -4],
      [2, 1],
      [3, 1],
      [4, 1],
      [-2, 1],
      [-3, 1],
      [-4, 1],
      [2, -1],
      [3, -1],
      [4, -1],
      [-2, -1],
      [-3, -1],
      [-4, -1],
      [2, 6],
      [3, 6],
      [4, 6],
      [-2, 6],
      [-3, 6],
      [-4, 6],
      [2, -6],
      [3, -6],
      [4, -6],
      [-2, -6],
      [-3, -6],
      [-4, -6],
      [-6, 2],
      [-6, 3],
      [-6, 4],
      [-6, -2],
      [-6, -3],
      [-6, -4],
      [6, 2],
      [6, 3],
      [6, 4],
      [6, -2],
      [6, -3],
      [6, -4],
    ],
    min_rows: 8,
    min_cols: 8,
  },
  blinker: {
    grid: [
      [1, 0],
      [0, 0],
      [-1, 0],
    ],

    min_rows: 6,
    min_cols: 6,
  },
  beacon: {
    grid: [
      [0, 0],
      [-1, 0],
      [-1, -1],
      [0, -1],
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
    ],
    min_rows: 6,
    min_cols: 6,
  },
  pentadecathlon: {
    grid: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 4],
      [0, 5],
      [0, -1],
      [0, -3],
      [0, -4],
      [1, 3],
      [1, -2],
      [-1, 3],
      [-1, -2],
    ],
    min_rows: 16,
    min_cols: 10,
  },
  glider: {
    grid: [
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [0, -1],
    ],
    min_rows: 5,
    min_cols: 5,
  },
  lwss: {
    grid: [
      [-2, -1],
      [-2, 1],
      [-1, 2],
      [0, 2],
      [1, 2],
      [1, -1],
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    min_rows: 7,
    min_cols: 6,
  },
  mwss: {
    grid: [
      [-3, 0],
      [-3, 1],
      [-3, 2],
      [-2, -1],
      [-2, 2],
      [-1, 2],
      [0, -2],
      [0, 2],
      [1, 2],
      [2, 1],
      [2, -1],
    ],
    min_rows: 7,
    min_cols: 8,
  },
  hwss: {
    grid: [
      [-3, 0],
      [-3, 1],
      [-3, 2],
      [-2, -1],
      [-2, 2],
      [-1, 2],
      [0, -2],
      [0, 2],
      [1, -2],
      [1, 2],
      [2, 2],
      [3, 1],
      [3, -1],
    ],
    min_rows: 7,
    min_cols: 9,
  },
  test: { grid: [[0, 0]], min_rows: 1, min_cols: 1 },
};
export default function Patterns({
  grid,
  setGrid,
  setreRender,
  patternSelectedFromModal,
}) {
  
  if (patternSelectedFromModal === "") return;
  for (const [key1, val1] of Object.entries(PATTERN_GRIDS)) {
    if (key1 !== patternSelectedFromModal) continue;
    for (const [key2, val2] of Object.entries(val1)) {
      if (key2 === "grid") {
        setPattern({ grid, setGrid, val2, setreRender });
      }
    }
  }
}

function setPattern({ grid, setGrid, val2, setreRender }) {
  var newGrid = grid;
  for (const [key, val] of Object.entries(val2)) {
    console.log(key);
    newGrid[val[0] + grid.length / 2][val[1] + grid[0].length / 2] = 1;
    //console.log(val);
  }
  //console.log(newGrid);
  setGrid(newGrid);
  setreRender((prev) => prev + 1);
}
