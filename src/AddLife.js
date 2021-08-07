export default function AddLife({ grid, setGrid }) {
  let up = 1,
    down = grid.length - 2,
    left = 1,
    right = grid[0].length - 2;
  let flagU = true,
    flagD = true,
    flagL = true,
    flagR = true;
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      if (grid[i][j] ===1 && flagU) {
        up = i;

        flagU = false;
      }
      if (grid[i][j] === 1) {
        down = i;
        flagD = false;
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[j][i] === 1 && flagL) {
        left = i;
        flagL = false;
      }
      if (grid[j][i] === 1) {
        right = i;
        flagR = false;
      }
    }
  }
  console.log(`up=${up} down=${down} left=${left} right=${right}`);
}
