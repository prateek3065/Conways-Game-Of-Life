import React from "react-dom";
import ReactDom from "react-dom";
import "./style.css";
import PatternSelections from "./PatternSelections";
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zindex: 1000,
};
export default function ModalForPattern({
  isModalForPatterSelectionOpen,
  setOpenModalForPatternSelection,
  patternSelectedFromModal,
  setPatternSelectedFromModal,
  Patterns,
  setreRender,
  grid,
  setGrid,
}) {
  if (!isModalForPatterSelectionOpen) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div className="MODAL_STYLES">
        <PatternSelections
          isModalForPatterSelectionOpen={isModalForPatterSelectionOpen}
          setOpenModalForPatternSelection={setOpenModalForPatternSelection}
          patternSelectedFromModal={patternSelectedFromModal}
          setPatternSelectedFromModal={setPatternSelectedFromModal}
          Patterns={Patterns}
          setreRender={setreRender}
          grid={grid}
          setGrid={setGrid}
        />
      </div>{" "}
    </>,
    document.getElementById("portal2")
  );
}
