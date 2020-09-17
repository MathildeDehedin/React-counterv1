import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ counter, setCounter }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <button
          className={counter <= 0 ? "hidden" : "minus-img"}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          <FontAwesomeIcon icon="minus" />
        </button>
        <span className="counter">{counter}</span>
        <button
          className={counter === 10 ? "hidden" : "plus-img"}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>

      <button
        className="btn-reset"
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Button;
