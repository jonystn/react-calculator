import React, { useState, useEffect } from "react";
import "./Calculator.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faTimes,
  faMinus,
  faSquareRootAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

// Icons
const divide = <FontAwesomeIcon icon={faDivide} style={{ color: "#1AAFBE" }} />;
const times = <FontAwesomeIcon icon={faTimes} style={{ color: "#7EB54D" }} />;
const minus = <FontAwesomeIcon icon={faMinus} style={{ color: "#E34E2A" }} />;
const squareRoot = (
  <FontAwesomeIcon icon={faSquareRootAlt} style={{ color: "#F9B31B" }} />
);

export default function Calculator() {
  // State variables
  const [operand1, setOperand1] = useState(null);
  const [operand2, setOperand2] = useState(null);
  const [lastOperation, setLastOperation] = useState(null);
  const [result, setResult] = useState(null);

  const handleFocus = (event) => event.target.select();

  // Buttons
  function divideResult() {
    if (operand1 && operand2) setResult(Math.floor(operand1 / operand2));
    if (operand1 && operand2) setLastOperation(operand1 + " ÷ " + operand2);
  }

  function minusResult() {
    if (operand1 && operand2) setResult(Math.floor(operand1 - operand2));
    if (operand1 && operand2) setLastOperation(operand1 + " - " + operand2);
  }

  function timesResult() {
    if (operand1 && operand2) setResult(Math.floor(operand1 * operand2));
    if (operand1 && operand2) setLastOperation(operand1 + " × " + operand2);
  }

  function sqrtResult() {
    if (operand1 && operand2)
      setResult(Math.pow(operand2, 1 / operand1).toFixed(5) + "...");
    if (operand1 && operand2) setLastOperation(operand1 + " √ " + operand2);
  }

  return (
    <div className="Calculator">
      <div className="Container">
        <div className="Top">
          <h1>react calculator</h1>
          <div className="Hr"></div>
        </div>
        <span>operand 1</span>
        <div className="Led">
          <input
            class="Readout"
            type="number"
            tabindex="1"
            autoFocus="autofocus"
            maxLength="8"
            value={operand1}
            onChange={(e) => setOperand1(e.target.value)}
          />
          <input
            class="Placehold"
            type="readonly"
            tabindex="-1"
            disabled=""
            placeholder="88888888"
          ></input>
        </div>
        <span>operand 2</span>
        <div className="Led">
          <input
            class="Readout"
            type="number"
            tabindex="2"
            maxLength="8"
            value={operand2}
            onChange={(e) => setOperand2(e.target.value)}
          />
          <input
            class="Placehold"
            type="readonly"
            tabindex="-1"
            disabled=""
            placeholder="88888888"
          ></input>
        </div>

        <div className="Btns">
          <button onClick={minusResult}>
            <i>{minus}</i>
          </button>
          <button onClick={timesResult}>
            <i>{times}</i>
          </button>
          <button onClick={divideResult}>
            <i>{divide}</i>
          </button>
          <button onClick={sqrtResult}>
            <i>{squareRoot}</i>
          </button>
        </div>

        <span>result</span>
        <div className="ResultContainer">
          <div className="LedLastOperation">
            <input
              className="LastOperation"
              type="text"
              tabindex="-1"
              value={lastOperation}
              readOnly
            />
            <input
              class="Placehold"
              type="readonly"
              tabindex="-1"
              disabled=""
              placeholder="888888888888888888888"
            ></input>
          </div>

          <div className="LedResult">
            <input
              className="Result"
              tabindex="-1"
              type="text"
              value={result}
              onFocus={handleFocus}
              readOnly
            />
            <input
              class="Placehold"
              type="readonly"
              tabindex="-1"
              disabled=""
              placeholder="8888888888"
            ></input>
          </div>
        </div>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}
