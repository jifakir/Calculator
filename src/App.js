import React, { useState } from "react";
import "./styles.css";
import Pad from "./Pad";
import Display from "./Display";
import { padData } from "./data";

export default function App() {
  const initValue = "0";
  const [currentValue, setCurrentValue] = useState(initValue);
  const [total, setTotal] = useState(initValue);
  const currentValueHanlder = (e) => {
    if (total !== "0") {
      setTotal(initValue);
    } else if (currentValue.length >= 20) {
      return alert("Sorry! You have exceded maximum character limit.");
    }
    const value = e.target.value;
    const refineValue = currentValue.replace(/^[x+-/%0]/g, "");
    const refinedValue = refineValue.match(/[+-/x%]{2}/g)
      ? refineValue.slice(0, -1)
      : refineValue;
    setCurrentValue(refinedValue.concat(value));
  };
  // Equation Handler
  const totalValueHandler = (e) => {
    const endWithOperator = /[+x/*]$/;
    let refinedValue = currentValue.replace(/x/g, "*");
    console.log(refinedValue);
    let result;
    if (endWithOperator.test(refinedValue)) {
      result = refinedValue.slice(0, -1);
    } else {
      result = refinedValue;
    }
    console.log(result);
    const equal = eval(result);
    console.log(equal);
    setTotal(equal);
    setCurrentValue(initValue);
  };
  // AC handler
  const acHandler = () => {
    setCurrentValue(initValue);
    setTotal(initValue);
  };

  // cancel handler

  const cancelHandler = () => {
    if (currentValue.length === 1) {
      return setCurrentValue(initValue);
    }
    const canceledValue = currentValue.slice(0, -1);
    setCurrentValue(canceledValue);
  };
  const onOffHandler = () => {};

  return (
    <div className="calculator">
      <div className="container">
        <div className="dipslay-wrapper">
          <Display currentValue={currentValue} calValue={total} />
        </div>
        <div className="pad-wrapper">
          {padData.map((i) => (
            <Pad
              key={i.idName}
              btnName={i.value}
              idName={i.idName}
              onClick={
                i.value === "AC"
                  ? acHandler
                  : i.value === "C"
                  ? cancelHandler
                  : i.value === "="
                  ? totalValueHandler
                  : i.value === "root"
                  ? onOffHandler
                  : currentValueHanlder
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
