import React from "react";
import "./styles.css";

export default ({ currentValue, calValue }) => {
  return (
    <div className="display">
      <div id="display" className="current">{currentValue}</div>
      <div className="total">{calValue}</div>
    </div>
  );
};
