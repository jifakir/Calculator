import React from "react";
import "./styles.css";

export default ({ currentValue, calValue }) => {
  return (
    <div className="display">
      <div className="current">{currentValue}</div>
      <div className="total">{calValue}</div>
    </div>
  );
};
