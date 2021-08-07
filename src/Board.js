import React from "react";
var isSimulation2DoneExecuting = true;
var numCols = undefined;
var numRows = undefined;
var grid = undefined;
var setGrid = undefined;
var buttonText = undefined;
export default function Board(props) {
  numRows = props.numRows;
  numCols = props.numCols;
  grid = props.grid;
  setGrid = props.setGrid;
  buttonText = props.buttonText;
  if (isSimulation2DoneExecuting && buttonText === "Stop") {
    //console.log('if')
    isSimulation2DoneExecuting = false;
    simulate2(props.delayTime);
  }
  return <></>;
}
/*
async function tutor()
{
   console.log('Hello')
   for(let i=0; i<=10; i++)
     {
         //await sleep(2000)
         //console.log(`i=${i}`)
     }
     //isTutorDoneExecuting=true
}
*/
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function simulate2(delayTime) {
  await sleep(delayTime);
  var newGrid = [];
  for (let i = 0; i < numRows; i++) {
    var a = [];
    for (let j = 0; j < numCols; j++) {
      a[j] = grid[i][j];
    }
    newGrid.push(a);
  }
  let flag = false;
  for (let i = 1; i < numRows - 1; i++) {
    for (let j = 1; j < numCols - 1; j++) {
      let alives = neighbours_Alive_Dead(grid, i, j);

      if (alives > 0) {
        //console.log(`(i,j)=(${i},${j}) alives=${alives}`)
        //console.log(grid)
        //console.log(newGrid)
      }
      if (alives > 0) flag = true;

      if (grid[i][j] === 1) {
        if (alives < 2 || alives > 3) newGrid[i][j] = 0;
        else if (alives === 2 || alives === 3) flag = true;
      } else {
        if (alives === 3) newGrid[i][j] = 1;
      }
    }
  }
  isSimulation2DoneExecuting = true;
  if (flag) {
    setGrid(newGrid);
  }
}

function neighbours_Alive_Dead(arr, i, j) {
  let alives = 0;
  if (arr[i - 1][j - 1] === 1) alives++;
  if (arr[i - 1][j] === 1) alives++;
  if (arr[i - 1][j + 1] === 1) alives++;
  if (arr[i][j - 1] === 1) alives++;
  if (arr[i][j + 1] === 1) alives++;
  if (arr[i + 1][j - 1] === 1) alives++;
  if (arr[i + 1][j] === 1) alives++;
  if (arr[i + 1][j + 1] === 1) alives++;
  return alives;
}

//changes
