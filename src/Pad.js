import React from "react";
import "./styles.css";

export default ({ btnName, onClick, idName }) => {
  return (
    <button
      className="pad-btn"
      name={btnName}
      value={btnName}
      onClick={onClick}
      id={idName}
    >
      {btnName}
    </button>
  );
};
