import React from "react";
import Plus from "../assets/plus.jpg";
import Minus from "../assets/minus.jpg";

const Button = ({ counter, setCounter }) => {
  return (
    <div className="container">
      <div className="calculator">
        <button
          className={counter <= 0 ? "hidden" : "minus-img"}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          <img className="minus-img" src={Minus} alt="minus-icone" />
        </button>
        <span className="counter">{counter}</span>
        <button
          className={counter === 10 ? "hidden" : "plus-img"}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          <img className="plus-img" src={Plus} alt="plus-icone" />
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
