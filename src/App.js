import { React, useState, useEffect } from "react";
import Board from "./Board";
import Modal from "./Modal";
import AddLife from "./AddLife";
import { v4 as uuid } from "uuid";
import Patterns from "./Patterns";
import ModalForPattern from "./ModalForPattern";
const numRows = 70;
const numCols = 70;
var start_info = [
  "The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur",
  "1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.",
  "2. Any live cell with two or three live neighbours lives on to the next generation.",
  "3. Any live cell with more than three live neighbours dies, as if by overpopulation.",
  "4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.",
];

const App = () => {
  //console.log(iteration)
  const [buttonText, setButtonText] = useState(() => "Start");
  const [reRender, setreRender] = useState(() => {
    return 1;
  });
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++)
      rows.push(Array.from(Array(numCols), () => 0));

    for (let i = 0; i < numRows; i++) {
      rows[0][i] = 2;
      rows[numRows - 1][i] = 2;
      rows[i][0] = 2;
      rows[i][numCols - 1] = 2;
    }
    return rows;
  });

  const [modalInfo, setModalInfo] = useState(() => {
    return start_info;
  });

  const [delayTime, setDelayTime] = useState(() => {
    return 100;
  });

  function changeState(i, j) {
    if (buttonText === "Stop") {
      setIsOpen(true);
      setModalInfo(["Please Stop the game before adding any Life"]);
    } else {
      const newGrid = grid;
      newGrid[i][j] = grid[i][j] === 1 ? 0 : 1;
      setGrid(newGrid);
      setreRender((prev) => {
        return (prev + 1) % 1000;
      });
    }
  }

  useEffect(() => {}, [reRender]);

  function handleClick() {
    if (buttonText === "Start") setButtonText("Stop");
    else setButtonText("Start");
    setreRender((prev) => {
      return (prev + 1) % 1000;
    });
  }

  const [isOpen, setIsOpen] = useState(() => {
    return true;
  });

  function handleReset() {
    var newGrid = grid;
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (i === 0 || j === 0 || i === numRows - 1 || j === numCols - 1)
          newGrid[i][j] = 2;
        else newGrid[i][j] = 0;
      }
    }
    setGrid(newGrid);
    setreRender((prev) => prev + 1);
  }

  function addLife() {
    if (buttonText === "Stop") {
      setIsOpen(true);
      setModalInfo([
        "You must first stop the running game before adding random lifes",
      ]);
      return;
    }
    AddLife({ grid, setGrid });
  }

  function infoRequest() {
    setModalInfo(start_info);
    setIsOpen(true);
  }
  const [isModalForPatterSelectionOpen, setOpenModalForPatternSelection] =
    useState(() => false);

  const [patternSelectedFromModal, setPatternSelectedFromModal] = useState(
    () => ""
  );
  function selectPattern() {
    setOpenModalForPatternSelection(true);
    //debugger;

    //debugger;
  }
  //console.log('Re-rendering')
  function goToLinkedin() {
    console.log("clicked");
    window.open("https://www.linkedin.com/in/prateek-sharma-891721196/");
  }
  return (
    <>
      <div className="container">
        <div className="buttons-bar">
          <button
            className="buttons"
            id="button-reset"
            onClick={() => {
              handleReset();
            }}
          >
            Reset Board
          </button>
          <button className="buttons" onClick={addLife}>
            Add Lifes
          </button>
          <button
            className="buttons"
            onClick={() => setDelayTime((prev) => prev + 100)}
          >
            Slow
          </button>
          <button
            className="buttons"
            onClick={() => setDelayTime((prev) => prev - 100)}
          >
            Fast
          </button>
          <button className="buttons" onClick={() => selectPattern()}>
            Select Patterns
          </button>
          <button
            className="buttons"
            id="button-info-request"
            onClick={() => infoRequest()}
          >
            Info About the Game
          </button>
        </div>
        <div className="buttons-bar" id="start-button-bar">
          <input className="checkbox" type="checkbox" onClick={handleClick} />
        </div>
        <div
          className="board"
          style={{
            gridTemplateColumns: `repeat(${numCols},10px)`,
          }}
        >
          {grid.map((rows, i) =>
            rows.map((col, j) => (
              <div
                onClick={() => {
                  changeState(i, j);
                }}
                key={`${i}-${j}`}
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor:
                    grid[i][j] === 1
                      ? "green"
                      : grid[i][j] === 2
                      ? "lightgrey"
                      : "white",
                  border: "solid 1px black",
                }}
              />
            ))
          )}
          <Board
            numRows={numRows}
            numCols={numCols}
            grid={grid}
            setGrid={setGrid}
            buttonText={buttonText}
            delayTime={delayTime}
          />
          <Modal open={isOpen} setIsOpen={setIsOpen}>
            {modalInfo.map((element) => {
              return <div key={uuid()}>{element}</div>;
            })}
          </Modal>
          <ModalForPattern
            isModalForPatterSelectionOpen={isModalForPatterSelectionOpen}
            setOpenModalForPatternSelection={setOpenModalForPatternSelection}
            patternSelectedFromModal={patternSelectedFromModal}
            setPatternSelectedFromModal={setPatternSelectedFromModal}
            Patterns={Patterns}
            setreRender={setreRender}
            grid={grid}
            setGrid={setGrid}
          />
        </div>
      </div>
      <div className="footer">
        <div className="footer-tag">
          <h1>Project build by Prateek</h1>
          <h1>
            For more information regarding Conways-Game-Of-Life Click below
          </h1>
          <a
            className="links"
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
          >
            Link
          </a>
        </div>
        <div className="linkedin-icon">
          <i className="fa fa-linkedin-square" onClick={() => goToLinkedin()} />
        </div>
      </div>
    </>
  );
};

export default App;
//Patterns({ grid, setGrid, setreRender })
