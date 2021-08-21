import React from "react-dom";
import ReactDom from "react-dom";
import "./style.css";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zindex: 1000,
};
export default function Modal({ open, setIsOpen, children }) {
  if (!open) return null;
  function handleMclick() {
    setIsOpen(false);
  }
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div className="MODAL_STYLES">
        {children}

        <button onClick={() => handleMclick()}>Close</button>
      </div>{" "}
    </>,
    document.getElementById("portal")
  );
}
