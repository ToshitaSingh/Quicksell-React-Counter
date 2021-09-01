import React from "react";
import "./styles.css";
export const Button = (props) => {
  return (
    <button
      class="right"
      color="#a64949"
      onClick={() =>
        props.sign == "+" ? props.updateCount(1) : props.updateCount(-1)
      }
    >
      {props.sign}
    </button>
  );
};
